'use strict'

/* 
 * A process that beeps when there are new alarms present on the system.
 * {json:scada} - Copyright (c) 2020-2021 - Ricardo L. Olsen
 * This file is part of the JSON-SCADA distribution (https://github.com/riclolsen/json-scada).
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

const BEEP_PERIOD = 3000
const CHECK_PERIOD = 1000

const APP_NAME = 'ALARM_BEEP'
const APP_MSG = '{json:scada} - Alarm Beep'
const VERSION = '0.1.1'
var jsConfigFile = '../../conf/json-scada.json'
const fs = require('fs')
const mongo = require('mongodb')
const { MongoClient, ReadPreference } = require('mongodb')
const { setInterval } = require('timers')
let sys = require('child_process')

const WavFilesWin = ['c:\\windows\\media\\Windows Default.wav', 'c:\\windows\\media\\Windows Background.wav', 'c:\\windows\\media\\Windows Message Nudge.wav' ]
const WavFilesNonWin = ['/usr/share/sounds/linuxmint-gdm.wav']

// produces a beep using platform dependant method, parameter is an index to the wav file to be played
function Beep(beepType) {
  beepType = beepType || 0
  if (beepType<0) 
	beepType=0
  if (process.platform === "win32") {
    // sys.exec(`rundll32 user32.dll,MessageBeep`) // this won't work for windows services
    console.log("Beep! " + WavFilesWin[beepType%WavFilesWin.length])
    sys.execFile('c:\\json-scada\\platform-windows\\sounder.exe', [WavFilesWin[beepType%WavFilesWin.length]])
  }    
  else {
    // Other platforms
    console.log("Beep! " + WavFilesNonWin[beepType%WavFilesNonWin.length])
    sys.exec('/usr/bin/aplay -q -D default ' + WavFilesNonWin[beepType%WavFilesNonWin.length])
  }
}

//Beep(0)
Beep(2)

const args = process.argv.slice(2)
var confFile = null
if (args.length > 0)
  confFile = args[0]
jsConfigFile = confFile || process.env.JS_CONFIG_FILE || jsConfigFile;

console.log(APP_MSG + " Version " + VERSION)
console.log("Config File: " + jsConfigFile)

if (!fs.existsSync(jsConfigFile)) {
  console.log('Error: config file not found!')
  process.exit()
}

const RealtimeDataCollectionName = 'realtimeData'
const beepPointKey = -1

let rawFileContents = fs.readFileSync(jsConfigFile)
let jsConfig = JSON.parse(rawFileContents)
if (
  typeof jsConfig.mongoConnectionString != 'string' ||
  jsConfig.mongoConnectionString === ''
) {
  console.log('Error reading config file.')
  process.exit()
}

; (async () => {

  let connOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    appname: APP_NAME + " Version:" + VERSION,
    maxPoolSize: 20,
    readPreference: ReadPreference.PRIMARY
  }

  if (typeof jsConfig.tlsCaPemFile === 'string' && jsConfig.tlsCaPemFile.trim() !== '') {
    jsConfig.tlsClientKeyPassword = jsConfig.tlsClientKeyPassword || ""
    jsConfig.tlsAllowInvalidHostnames = jsConfig.tlsAllowInvalidHostnames || false
    jsConfig.tlsAllowChainErrors = jsConfig.tlsAllowChainErrors || false
    jsConfig.tlsInsecure = jsConfig.tlsInsecure || false

    connOptions.tls = true
    connOptions.tlsCAFile = jsConfig.tlsCaPemFile
    connOptions.tlsCertificateKeyFile = jsConfig.tlsClientPemFile
    connOptions.tlsCertificateKeyFilePassword = jsConfig.tlsClientKeyPassword
    connOptions.tlsAllowInvalidHostnames = jsConfig.tlsAllowInvalidHostnames
    connOptions.tlsInsecure = jsConfig.tlsInsecure
  }

  let collection = null
  let clientMongo = null
  let doBeepIntervalHandle = null
  let checkBeepIntervalHandle = null
  let beepPresent = false
  let beepType = 0
  while (true) {
    if (clientMongo === null) {
      console.log('Try to connect to MongoDB server...')
      await MongoClient.connect(jsConfig.mongoConnectionString, connOptions)
        .then(async client => {
          clientMongo = client
          console.log('Connected correctly to MongoDB server')

          // specify db and collections
          const db = client.db(jsConfig.mongoDatabaseName)
          collection = db.collection(RealtimeDataCollectionName)

          function doBeep() {
            if (clientMongo) {
              if (beepPresent) {
                Beep(beepType-1)
              }
            }
          }

          clearInterval(doBeepIntervalHandle)
          doBeepIntervalHandle = setInterval(doBeep, BEEP_PERIOD)

          clearInterval(checkBeepIntervalHandle)
          let enterQuery = false
          checkBeepIntervalHandle = setInterval(async function () {
            if (enterQuery)
              return
            if (clientMongo) {
              enterQuery = true
              let data = await collection.findOne({ _id: beepPointKey }
			    /*, { maxTimeMS: CHECK_PERIOD / 2 }*/
				)
                .catch(function (err) {
                  if (clientMongo) clientMongo.close()
                  beepPresent = false
                  clientMongo = null
                  console.log('Error on Mongodb query!')
                  enterQuery = false
                })

              if (data && typeof data._id === 'number') {
                if ("value" in data) {
                  beepPresent = data.value === 0 ? false : true;
                  if ('beepType' in data) {
                    if (beepType != data.beepType) {
                      clearInterval(doBeepIntervalHandle)
                      doBeepIntervalHandle = setInterval(doBeep, BEEP_PERIOD/(data.beepType>=2?3:1))
                    }
                    beepType = data.beepType                    
                  }
                  else
                    beepType = 0 
                  console.log("Beep status " + beepPresent + ' ' + data.beepType )
                }
              }
              enterQuery = false
            }
          }, CHECK_PERIOD)

        })
        .catch(function (err) {
          if (clientMongo) clientMongo.close()
          beepPresent = false
          clientMongo = null
          console.log("Connect to MongoDB error!")
        })
    }

    // wait 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000))

    // detect connection problems, if error will null the client to later reconnect
    if (clientMongo === undefined) {
      console.log('Disconnected Mongodb!')
      beepPresent = false
      clientMongo = null
    }
    if (clientMongo)
    if (!(await checkConnectedMongo(clientMongo))) {
        // not anymore connected, will retry
        beepPresent = false
        console.log('Disconnected Mongodb!')
        clientMongo.close()
        clientMongo = null
      }
  }
})()

// test mongoDB connectivity
let CheckMongoConnectionTimeout = 1000
let HintMongoIsConnected = true
async function checkConnectedMongo (client) {
  if (!client) {
    return false
  }

  let tr = setTimeout(() => {
    console.log('Mongo ping timeout error!')
    HintMongoIsConnected = false
  }, CheckMongoConnectionTimeout)

  let res = null
  try {
    res = await client.db('admin').command({ ping: 1 })
    clearTimeout(tr)
  } catch (e) {
    console.log('Error on mongodb connection!')
    return false
  }
  if ('ok' in res && res.ok) {
    HintMongoIsConnected = true
    return true
  } else {
    HintMongoIsConnected = false
    return false
  }
}

const express = require('express')
const mongo = require('mongodb')
const { MongoClient, ReadPreference } = require('mongodb')
const { parse } = require('json2csv')
const Log = require('./simple-logger')
const AppDefs = require('./app-defs')
const LoadConfig = require('./load-config')
const app = express()

function toMongoDouble (value, defaultValue) {
  defaultValue = defaultValue || 0
  if (value === undefined || value === null) value = defaultValue
  if (typeof value === 'number') return new mongo.Double(value)
  value = parseFloat(value)
  if (isNaN(value)) value = new mongo.Double(parseFloat(defaultValue))
  else value = new mongo.Double(value)
  return value
}

function toMongoDoubleOrString (value, defaultValue) {
  defaultValue = defaultValue || ""
  if (value === undefined || value === null) value = defaultValue
  if (typeof value === 'number') return new mongo.Double(value)
  let v = parseFloat(value)
  console.log(value)
  if (isNaN(v)) value = value.trim()
  else value = new mongo.Double(v)
  return value
}

function toMongoBoolean (value, defaultValue) {
  if (typeof defaultValue !== 'boolean') defaultValue = false
  if (value === undefined || value === null) value = defaultValue
  if (typeof value === 'boolean') return value
  value = value || 'false'
  if (value.toLowerCase() === 'true') value = true
  else if (value.toLowerCase() === 'false') value = false
  else value = defaultValue
  return value
}

function toMongoObj (value, defaultValue) {
  defaultValue = defaultValue || {}
  if (value === undefined || value === null) value = defaultValue
  if (typeof value === 'object') return value
  value = value || ''
  value = value.trim()
  if (value.indexOf('ERROR:') === 0) {
    value = value.replace('ERROR:', '').trim()
  }
  if (value === 'null' || value === 'undefined' || value === '')
    value = defaultValue
  else {
    try {
      value = JSON.parse(value)
    } catch (e) {
      Log.log(e)
      value = 'ERROR: ' + value
    }
  }
  return value
}

const jsConfig = LoadConfig() // load and parse config file
Log.levelCurrent = jsConfig.LogLevel

app.use(express.json({ limit: '200mb' }))
app.use(express.text({ limit: '200mb' }))

const IP_BIND = process.env.JS_CSEXCEL_IP_BIND || AppDefs.IP_BIND;
const HTTP_PORT = process.env.JS_CSEXCEL_HTTP_PORT || AppDefs.HTTP_PORT;

app.listen(HTTP_PORT, IP_BIND, () => {
  Log.log('listening on ' + IP_BIND + ':' + HTTP_PORT)
})

MongoClient.connect(
  // try to (re)connect
  jsConfig.mongoConnectionString,
  getMongoConnectionOptions(jsConfig)
).then(async client => {
  Log.log('MongoDB - Connected correctly to MongoDB server', Log.levelMin)
  const db = client.db(jsConfig.mongoDatabaseName)
  connsCollection = db.collection(jsConfig.ProtocolConnectionsCollectionName)
  rtDataCollection = db.collection(jsConfig.RealtimeDataCollectionName)
  instCollection = db.collection(jsConfig.ProtocolDriverInstancesCollectionName)

  let instFields = [
    '_id',
    'protocolDriver',
    'protocolDriverInstanceNumber',
    'enabled',
    'logLevel',
    'nodeNames',
    'keepProtocolRunningWhileInactive'
  ]
  let instProjection = {}
  instFields.forEach(value => {
    instProjection[value] = 1
  })

  app.get('/excel/protocolDriverInstances.csv', async function (req, res) {
    let results = await instCollection
      .find({})
      .project(instProjection)
      .sort({ _id: 1 })
      .toArray()
    res.setHeader('content-type', 'text/csv')
    res.setHeader('header', 'present')
    res.send(parse(results, { fields: instFields }))
  })

  app.get('/excel/protocolDriverInstances.json', async function (req, res) {
    let results = await instCollection
      .find({})
      .project(instProjection)
      .sort({ _id: 1 })
      .toArray()
    res.send(results)
  })

  let connsFields = [
    '_id',
    'protocolDriver',
    'protocolDriverInstanceNumber',
    'protocolConnectionNumber',
    'name',
    'description',
    'enabled',
    'commandsEnabled'
  ]
  let connsProjection = {}
  connsFields.forEach(value => {
    connsProjection[value] = 1
  })

  app.get('/excel/connections.csv', async function (req, res) {
    let results = await connsCollection
      .find({})
      .project(connsProjection)
      .sort({ _id: 1 })
      .toArray()
    res.setHeader('content-type', 'text/csv')
    res.setHeader('header', 'present')
    res.send(parse(results, { fields: connsFields }))
  })

  app.get('/excel/connections.json', async function (req, res) {
    let results = await connsCollection
      .find({})
      .project(connsProjection)
      .sort({ _id: 1 })
      .toArray()
    res.send(results)
  })

  let fields = [
    '_id',
    'tag',
    'type',
    'origin',
    'description',
    'ungroupedDescription',
    'group1',
    'group2',
    'group3',
    'valueDefault',
    'priority',
    'frozenDetectTimeout',
    'invalidDetectTimeout',
    'historianDeadBand',
    'historianPeriod',
    'commandOfSupervised',
    'supervisedOfCommand',
    'location',
    'isEvent',
    'unit',
    'alarmState',
    'stateTextTrue',
    'stateTextFalse',
    'eventTextTrue',
    'eventTextFalse',
    'formula',
    'parcels',
    'kconv1',
    'kconv2',
    'zeroDeadband',
    'protocolSourceConnectionNumber',
    'protocolSourceCommonAddress',
    'protocolSourceObjectAddress',
    'protocolSourceASDU',
    'protocolSourceCommandDuration',
    'protocolSourceCommandUseSBO',
    'protocolDestinations',
    'hiLimit',
    'hihiLimit',
    'hihihiLimit',
    'loLimit',
    'loloLimit',
    'lololoLimit',
    'hysteresis',
    'alarmDisabled',
    'commandBlocked',
    'commissioningRemarks'
  ]
  let projection = {}
  fields.forEach(value => {
    projection[value] = 1
  })

  app.get('/excel/realtimeData.csv', async function (req, res) {
    let results = await rtDataCollection
      .find({ _id: { $gt: 0 } })
      .project(projection)
      .sort({ _id: 1 })
      .toArray()
    res.setHeader('content-type', 'text/csv')
    res.setHeader('header', 'present')
    res.send(parse(results, { fields }))
  })

  app.get('/excel/realtimeData.json', async function (req, res) {
    let results = await rtDataCollection
      .find({ _id: { $gt: 0 } })
      .project(projection)
      .sort({ _id: 1 })
      .toArray()
    res.send(results)
  })

  app.post('/excel/realtimeDataUpdate', async function (req, res) {
    console.log(req.body)
    let data = JSON.parse(req.body)

    await data.forEach(async elem => {
      console.log(elem.tag)

      let _id = toMongoDouble(elem._id)
      elem.tag = elem.tag || ''
      elem.group1 = elem.group1 || ''
      elem.group2 = elem.group2 || ''
      elem.group3 = elem.group3 || ''
      elem.description = elem.description || ''
      elem.ungroupedDescription = elem.ungroupedDescription || ''
      elem.unit = elem.unit || ''
      elem.stateTextTrue = elem.stateTextTrue || 'true'
      elem.stateTextFalse = elem.stateTextFalse || 'false'
      elem.eventTextTrue = elem.eventTextTrue || 'true'
      elem.eventTextFalse = elem.eventTextFalse || 'false'
      elem.type = elem.type || 'digital'
      elem.origin = elem.origin || 'supervised'
      elem.commissioningRemarks = elem.commissioningRemarks || ''
      elem.valueDefault = toMongoDouble(elem.valueDefault)
      elem.priority = toMongoDouble(elem.priority)
      elem.frozenDetectTimeout = toMongoDouble(elem.frozenDetectTimeout)
      elem.invalidDetectTimeout = toMongoDouble(
        elem.invalidDetectTimeout,
        60000
      )
      elem.historianDeadBand = toMongoDouble(elem.historianDeadBand)
      elem.historianPeriod = toMongoDouble(elem.historianPeriod)
      elem.commandOfSupervised = toMongoDouble(elem.commandOfSupervised)
      elem.supervisedOfCommand = toMongoDouble(elem.supervisedOfCommand)
      elem.alarmState = toMongoDouble(elem.alarmState)
      elem.formula = toMongoDouble(elem.formula)
      elem.kconv1 = toMongoDouble(elem.kconv1, 1)
      elem.kconv2 = toMongoDouble(elem.kconv2, 0)
      elem.zeroDeadband = toMongoDouble(elem.zeroDeadband)
      elem.location = toMongoObj(elem.location, {})
      elem.isEvent = toMongoBoolean(elem.isEvent, false)
      elem.parcels = toMongoObj(elem.parcels, [])
      elem.protocolSourceConnectionNumber = toMongoDouble(
        elem.protocolSourceConnectionNumber
      )
      elem.protocolSourceCommonAddress = toMongoDouble(
        elem.protocolSourceCommonAddress
      )
      elem.protocolSourceObjectAddress = toMongoDoubleOrString(
        elem.protocolSourceObjectAddress
      )
      elem.protocolSourceASDU = toMongoDoubleOrString(elem.protocolSourceASDU)
      elem.protocolSourceCommandDuration = toMongoDouble(
        elem.protocolSourceCommandDuration
      )
      elem.protocolSourceCommandUseSBO = toMongoBoolean(
        elem.protocolSourceCommandUseSBO,
        false
      )
      elem.protocolDestinations = toMongoObj(elem.protocolDestinations, [])
      elem.protocolDestinations.forEach( pd => {
        pd.protocolDestinationConnectionNumber = toMongoDouble(pd.protocolDestinationConnectionNumber)
        pd.protocolDestinationCommonAddress = toMongoDouble(pd.protocolDestinationCommonAddress)
        pd.protocolDestinationObjectAddress = toMongoDoubleOrString(pd.protocolDestinationObjectAddress)
        pd.protocolDestinationASDU = toMongoDoubleOrString(pd.protocolDestinationASDU)
        pd.protocolDestinationCommandDuration = toMongoDouble(pd.protocolDestinationCommandDuration)
        pd.protocolDestinationCommandUseSBO = toMongoBoolean(pd.protocolDestinationCommandUseSBO, false)
        pd.protocolDestinationKConv1 = toMongoDouble(pd.protocolDestinationKConv1, 1)
        pd.protocolDestinationKConv2 = toMongoDouble(pd.protocolDestinationKConv2, 0)
        pd.protocolDestinationGroup = toMongoDouble(pd.protocolDestinationGroup, 0)
        pd.protocolDestinationHoursShift = toMongoDouble(pd.protocolDestinationHoursShift, 0)
        } )
      
      elem.hiLimit = toMongoDouble(elem.hiLimit, Number.MAX_VALUE)
      elem.hihiLimit = toMongoDouble(elem.hihiLimit, Number.MAX_VALUE)
      elem.hihihiLimit = toMongoDouble(elem.hihihiLimit, Number.MAX_VALUE)
      elem.loLimit = toMongoDouble(elem.loLimit, -Number.MAX_VALUE)
      elem.loloLimit = toMongoDouble(elem.loloLimit, -Number.MAX_VALUE)
      elem.lololoLimit = toMongoDouble(elem.lololoLimit, -Number.MAX_VALUE)
      elem.hysteresis = toMongoDouble(elem.hysteresis, 0)
      elem.alarmDisabled = toMongoBoolean(elem.alarmDisabled, false)
      elem.commandBlocked = toMongoBoolean(elem.commandBlocked, false)
      delete elem._id

      let onInsert = {
        value: new mongo.Double(0),
        valueString: '',
        valueJson: {},
        sourceDataUpdate: null,
        invalid: true,
        substituted: false,
        alarmed: false,
        overflow: false,
        transient: false,
        frozen: false,
        annotation: '',
        notes: '',
        timeTag: null,
        timeTagAlarm: null,
        timeTagAtSource: null,
        timeTagAtSourceOk: false,
        updatesCnt: new mongo.Double(0)
      }
      

      if (elem.tag.trim() === '') {
        Log.log("DELETE _id=" + _id)
        let result = await rtDataCollection.deleteOne(
          { _id: _id },
        )
      } else {
        Log.log("UPDATE _id=" + _id + ' tag=' + elem.tag)
        let result = await rtDataCollection.updateOne(
          { _id: _id },
          { $set: elem, $setOnInsert: onInsert },
          { upsert: true }
        )
        console.log(elem)
        console.log(`matched ${result.matchedCount} modified ${result.modifiedCount} upserted: ${result.upsertedCount}` )
        
      }
    })
    Log.log("Response 200")
    res.sendStatus(200)
  })
})

function getMongoConnectionOptions (configObj) {
  let connOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    appname:
      AppDefs.NAME +
      ' Version:' +
      AppDefs.VERSION +
      ' Instance:' +
      configObj.Instance,
    maxPoolSize: 20,
    readPreference: ReadPreference.PRIMARY
  }

  if (
    typeof configObj.tlsCaPemFile === 'string' &&
    configObj.tlsCaPemFile.trim() !== ''
  ) {
    configObj.tlsClientKeyPassword = configObj.tlsClientKeyPassword || ''
    configObj.tlsAllowInvalidHostnames =
      configObj.tlsAllowInvalidHostnames || false
    configObj.tlsAllowChainErrors = configObj.tlsAllowChainErrors || false
    configObj.tlsInsecure = configObj.tlsInsecure || false

    connOptions.tls = true
    connOptions.tlsCAFile = configObj.tlsCaPemFile
    connOptions.tlsCertificateKeyFile = configObj.tlsClientPemFile
    connOptions.tlsCertificateKeyFilePassword = configObj.tlsClientKeyPassword
    connOptions.tlsAllowInvalidHostnames = configObj.tlsAllowInvalidHostnames
    connOptions.tlsInsecure = configObj.tlsInsecure
  }

  return connOptions
}

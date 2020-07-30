// identify script names that access data servers (REALTIME WITH COMMANDS)

// data server path (leave empty for local server) e.g.: 'http://192.168.1.1:51909/htdocs/'
var ServerPath = '';

// identify the script name that access realtime point data
var PNTServer = "http://127.0.0.1:3001/server_realtime"; // has no access to controls!
// var PNTServer = 'pgsql_pntserver.php'; // via PostgreSQL (no access to controls)
// var PNTServer = 'sqlite_pntserver.php'; // via SQLite (no access to controls)

var CMDServer = "http://127.0.0.1:3001/server_command"; // has access to controls!

// identify the script name that access historic data
var TimePNTServer = ServerPath + "timepntserver.php"; // via SQLite
// var TimePNTServer = "pgsql_timepntserver.php"; // via PostgreSQL

// identify the script name that access tabular data
var TabPNTServer = "http://127.0.0.1:3001/server_realtime"; // pntserver.rjs has access to controls!
// var TimePNTServer = "pgsql_tabserver.php"; // via PostgreSQL
// var TabPNTServer = "sqlite_tabserver.php"; // via SQLite

// identify the script name that access events data
var EventServer = ServerPath + 'eventserver.php'; // via SQLite
// var EventServer = 'pgsql_eventserver.php'; // via PostgreSQL

// identify the script name that access point documental annotation data
var DocAnnotationServer = "http://127.0.0.1:3001/server_realtime"; // via SQLite (can write annotations)
// var DocAnnotationServer = 'annotation_readonly.php'; // via SQLite read only

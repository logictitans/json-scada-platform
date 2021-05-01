<a href="https://github.com/riclolsen/json-scada/">
    <img src="https://github.com/riclolsen/json-scada/raw/master/src/htdocs/images/json-scada.svg" alt="JSON:SCADA Logo" title="JSON:SCADA" align="right" height="60" />
</a>

{json:scada}
============

A portable and scalable SCADA/IoT platform centered on the MongoDB database server.

![](https://img.shields.io/badge/node-%3E%3D14-green "Node.js >= 14")
![](https://img.shields.io/badge/golang-%3E%3D1.14-green "Go >= 1.14")
![](https://img.shields.io/badge/dotnet-%3E%3D5.0-green "Dotnet >=5.0")

![](https://img.shields.io/badge/mongodb-%3E%3D4.2-green "MongoDB >= 4.2")
![](https://img.shields.io/badge/postgresql-12-green "PostgreSQL 12")
![](https://img.shields.io/badge/timescaledb-2.0-green "TimescaleDB 2.0")
![](https://img.shields.io/badge/grafana-%3E%3D7-green "Grafana >= 7")

![](https://img.shields.io/badge/linux-x86--64-green "Linux x86-64")
![](https://img.shields.io/badge/linux-ARM-green "Linux ARM")
![](https://img.shields.io/badge/windows-x86--64-green "Windows x86-64")
![](https://img.shields.io/badge/macosx-x86--64-green "Mac OSX x86-64")
![](https://img.shields.io/badge/macosx-ARM--M1-yellow "Mac ARM M1 x86-64")

![](https://img.shields.io/badge/IEC60870--5--104-green "IEC60870-5-104")
![](https://img.shields.io/badge/IEC60870--5--101-green "IEC60870-5-101")
![](https://img.shields.io/badge/DNP3-yellow "DNP3")
![](https://img.shields.io/badge/MQTT-yellow "MQTT")
![](https://img.shields.io/badge/Sparkplug--B-yellow "Sparkplug B")
![](https://img.shields.io/badge/OPC--UA-yellow "OPC-UA")
![](https://img.shields.io/badge/CIP.Ethernet/IP-yellow "CIP Ethernet/IP")

![](https://img.shields.io/badge/license-GPL-green "License GPL")
![](https://img.shields.io/badge/contributors-welcome-green "Contributors Welcome")

## Mission Statement

To provide an easy to use, fully-featured, scalable, and portable SCADA/IoT system built by leveraging mainstream open-source IT tools.
 
## Screenshots

![screenshots](https://github.com/riclolsen/json-scada/raw/master/docs/screenshots/anim-screenshots.gif "{json:scada} Screenshots")

## Major features and characteristics

* Standard IT tools applied to SCADA/IoT (MongoDB, PostgreSQL/TimescaleDB,Node.js, C#, Golang, Grafana, etc.).
* MongoDB as the real-time core database, persistence layer, config store, SOE historian.
* Portability and interoperability over Linux, Windows, Mac OSX, x86/64, ARM.
* Windows installer available in the [releases section](https://github.com/riclolsen/json-scada/releases/tag/V0.8-alpha).
* Horizontal scalability, from a single computer to big clusters (MongoDB-sharding), Docker containers, VMs, Kubernetes, cloud, or hybrid deployments.
* Unlimited tags, servers, and users.
* Modular distributed architecture. Lightweight redundant data acquisition nodes can connect securely over TLS to the database server. E.g. a Raspberry PI can be a data acquisition node.
* MongoDB Change Streams for realtime async database events processing.
* HTML5 Web interface. UTF-8/I18N. Mobile access.
* Web-based configuration management.
* Role-based access control (RBAC). 
* Various high-quality protocol drivers.
* Live point configuration updates.
* Inkscape-based SVG synoptic display editor.
* PostgreSQL/TimescaleDB historian integrated with Grafana for easy creation of dashboards.
* Extensibility of data model (MongoDB: NoSQL/schema-less).
* Development of custom applications with modern stacks like MEAN/MERN, etc.
* Big data / ML capabilities through MongoDB Spark connector.
* Access to the huge MongoDB and PostgreSQL ecosystem of tools, community, services, etc.
* Easy to understand system with small code footprint for each independent module. Extensive use of JSON from bottom up.
* Possibility of easy integration of new and custom protocol drivers developed with modern programming languages (just read/write to MongoDB).
* Future-proof, vendor independence, flexibility, extensibility.
* Reduced human costs for maintenance and development thanks to the employment of widely-used open-source IT technologies.

## Use cases

* Power/Oil/Gas/etc Local Station HMI.
* Manufacturing Local HMI.
* SCADA Protocol Gateway.
* SCADA Control Center Full System.
* SCADA/IoT Historian. MS Power BI integration.
* Intranet/Internet HTTPS Gateway - Visualization Server.
* Multilevel Systems Integrator (SCADA/IoT/ERP/MES/PLC).
* Global-Level SCADA Systems Integration/Centralization.
* Edge data processor.
* Extensible Development Platform For Data Acquisition And Processing.
* Data concentrator for Big Data / ML processing.

## Architecture

![architecture](https://github.com/riclolsen/json-scada/raw/master/docs/JSON-SCADA_ARCHITECTURE.png "{json:scada} Architecture")

## Documentation

* [Docker Demo](https://github.com/riclolsen/json-scada/blob/master/demo-docker/README.md)
* [Windows installer](https://github.com/riclolsen/json-scada/releases/tag/V0.8-alpha)
* [Config File](https://github.com/riclolsen/json-scada/blob/master/conf/README.md)
* [Calculations](https://github.com/riclolsen/json-scada/blob/master/src/calculations/README.md)
* [IEC60870-5-104 Server Driver](https://github.com/riclolsen/json-scada/blob/master/src/lib60870.netcore/iec104server/README.md)
* [IEC60870-5-104 Client Driver](https://github.com/riclolsen/json-scada/blob/master/src/lib60870.netcore/iec104client/README.md)
* [IEC60870-5-101 Server Driver](https://github.com/riclolsen/json-scada/blob/master/src/lib60870.netcore/iec101server/README.md)
* [IEC60870-5-101 Client Driver](https://github.com/riclolsen/json-scada/blob/master/src/lib60870.netcore/iec101client/README.md)
* [DNP3 Client Driver](https://github.com/riclolsen/json-scada/blob/master/src/dnp3/Dnp3Client/README.md)
* [Telegraf Listener Driver](https://github.com/riclolsen/json-scada/blob/master/src/telegraf-listener/README.md)
* [MQTT Sparkplug-B Client Driver](https://github.com/riclolsen/json-scada/blob/master/src/mqtt-sparkplug/README.md)
* [OPC-UA Client Driver](https://github.com/riclolsen/json-scada/blob/master/src/OPC-UA-Client/README.md)
* [CIP Ethernet/IP PLCTags Client Driver](https://github.com/riclolsen/json-scada/blob/master/src/libplctag/PLCTagsClient/README.md)
* [I104M Client Driver](https://github.com/riclolsen/json-scada/blob/master/src/i104m/README.md)
* [Change Stream Data Processor](https://github.com/riclolsen/json-scada/blob/master/src/cs_data_processor/README.md)
* [Custom Data Processor](https://github.com/riclolsen/json-scada/blob/master/src/cs_custom_processor/README.md)
* [Realtime Data Server](https://github.com/riclolsen/json-scada/blob/master/src/server_realtime/README.md)
* [SVG Synoptic Display Editor](https://github.com/riclolsen/json-scada/blob/master/src/svg-display-editor/README.md)
* [OSHMI2JSON Tool](https://github.com/riclolsen/json-scada/blob/master/src/oshmi2json/README.md)
* [Schema Documentation](https://github.com/riclolsen/json-scada/blob/master/docs/schema.md)
* [Install Guide](https://github.com/riclolsen/json-scada/blob/master/docs/install.md)
* [Report Generators](https://github.com/riclolsen/json-scada/blob/master/docs/report_generators.md)

## Protocols Roadmap

- [x] IEC 60870-5-104 Server TCP
- [ ] IEC 60870-5-104 Server TLS
- [x] IEC 60870-5-104 Client TCP/TLS
- [x] IEC 60870-5-101 Server (Serial, TCP)
- [x] IEC 60870-5-101 Client (Serial, TCP)
- [ ] IEC 60870-5-103 Client
- [x] DNP3 Client (TCP, UDP, TLS, Serial)
- [ ] DNP3 Server (TCP, UDP, TLS, Serial)
- [x] I104M (adapter for some OSHMI drivers)
- [x] ICCP Client (via I104M)
- [ ] Secure ICCP Client
- [x] Telegraf Client (many data sources available such as MQTT, MODBUS, SNMP, ...)
- [x] OPC UA Client (experimental)
- [ ] OPC UA Server
- [ ] OPC DA Client
- [ ] OPC DA Server
- [x] MQTT/Sparkplug-B Client
- [ ] Modbus Client
- [ ] IEC 61850 MMS Client
- [ ] IEC 61850 GOOSE Client
- [x] CIP Ethernet/IP (libplctag, experimental)
- [ ] Siemens S7
- [ ] BACNET
- [ ] OPC UA Historical Data Server

## Features Roadmap

- [x] Web-based Viewers
- [x] Web-based Configuration Manager
- [x] User auth/Role-based Access Control (RBAC)
- [x] Inkscape-based SVG Synoptic Editor
- [x] Compiled Calculations Engine
- [x] Customizable Change-Stream Processor (for user implemented scripts)
- [ ] Low-latency/Interpreted Calculations Engine
- [x] Basic Alarms Processor
- [ ] Advanced Alarms Processor 
- [x] PostgreSQL/TimescaleDB Historian
- [x] Grafana Integration 
- [x] Grafana Alerting Integration (w/ Events Viewer)
- [x] Windows Installer
- [x] Online Demo
- [x] Docker Demo (docker-compose.yaml scripts)
- [x] Dedicated Docker Containers
- [ ] Linux Image / VM
- [x] Supervisor (Linux process manager) examples
- [ ] InfluxDB Integration
- [x] Telegraf Integration
- [ ] Kafka Integration
- [x] PowerBI Integration (via PostgreSQL connector)
- [ ] PowerBI Direct Integration
- [ ] NodeRed Integration
- [x] Metabase Integration (via PostgreSQL connector)
- [ ] Alerta Integration (https://alerta.io/)
- [ ] PLC4X Integration (https://plc4x.apache.org/)
- [ ] Managed Cloud Service

## Contact

https://www.linkedin.com/in/ricardo-olsen/

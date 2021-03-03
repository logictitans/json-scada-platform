
const i18n = {
    appTitle: "Admin Management",
    logout: "Logout",
    users: "Users",
    roles: "Roles",
    driverInstances: "Driver Instances",
    connections: "Connections",
    tags: "Tags",
    userNewUser: "New User",
    userNewUserUsername: "new_user",
    userSelectUser: "Select a User",
    userDeleteUser: "Delete User!",
    userDeleteUserExecute: "Delete User!",
    userDeleteUserCancel: "Cancel",
    userRoles: "Roles",
    userAddUserRole: "Add role to user",
    userRemoveUserRole: "Remove role from user!",
    userConfirmDeleteUser: "Please confirm removal of user.",
    userUsername: "Username",
    userEmail: "email",
    userPassword: "Password",
    roleSelectRole: "Select a Role",
    roleNewRole: "New Role",    
    roleNewRoleName: "new_role",
    roleDeleteRole: "Delete Role!",
    roleConfirmDeleteRole: "Removing a role can affect many users! Please confirm.",
    roleDeleteRoleCancel: "Cancel",
    roleDeleteRoleExecute: "Delete Role!",
    roleRoleName: "Role Name",
    roleCanViewGroup1List: "Can View - Group1 List",
    roleCanCommandGroup1List: "Can Command - Group1 List",
    roleCanAccessDisplayList: "Can Access - Display List",
    roleRights: "Rights",
    roleIsAdmin: "Is Admin",
    roleIsAdminHint: "Add/remove/edit users and roles.",
    roleChangePassword: "Change Password",
    roleChangePasswordHint: "Can change its own password.",
    roleSendCommands: "Send Commands",
    roleSendCommandsHint: "Can send commands (controls).",
    roleEnterAnnotations: "Enter Annotations",
    roleEnterAnnotationsHint: "Can create/edit blocking annotations.",
    roleEnterNotes: "Enter Notes",
    roleEnterNotesHint: "Can create/edit documental notes.",
    roleEnterManuals: "Enter Manuals",
    roleEnterManualsHint: "Can change the state of manual points.",
    roleEnterLimits: "Enter Limits",
    roleEnterLimitsHint: "Can change limits for analog points.",
    roleSubstituteValues: "Substitute Values",
    roleSubstituteValuesHint: "Can replace (impose) supervised values.",
    roleAckEvents: "Ack Events",
    roleAckEventsHint: "Can acknowledge events.",
    roleAckAlarms: "Ack Alarms",
    roleAckAlarmsHint: "Can acknowledge alarms.",
    roleDisableAlarms: "Disable Alarms",
    roleDisableAlarmsHint: "Can disable/enable alarms.",
    roleNumberOfDaysSession: "Number of days...",
    roleMaxSessionDays: "Max Session Days",
    roleMaxSessionDaysHint: "Maximum days of session period.",
    instProtocolDriver: "Protocol Driver",
    instNewDriverInstance: "New Driver Instance",
    instSelectDriverInstance: "Select a driver instance",
    instDeleteDriverInstance: "Delete driver instance!",
    instDeleteDriverInstanceConfirm: "Please confirm removal of driver instance.",
    instDeleteDriverInstanceCancel: "Cancel",
    instDeleteDriverInstanceExecute: "Delete Instance!",
    instEnabled: "Enabled: ",
    instEnabledTrue: "True",
    instEnabledFalse: "False",
    instInstanceNumber: "Instance Number",
    instLogLevel: "Log Level",
    instAllowedNodesList: "Allowed Nodes List",
    instAddNewNode: "Add a new allowed node!",
    instNewNodeName: "New node name",
    instAddNewNodeCancel: "Cancel",
    instAddNewNodeExecute: "Add node!",
    connNewConnection: "New connection",
    connSelectConnection: "Select a Connection",
    connConnectionName: "Name",
    connDeleteConnection: "Delete protocol connection!",
    connDeleteConnectionConfirm: "Please confirm removal of protocol connection.",
    connDeleteConnectionCancel: "Cancel",
    connDeleteConnectionExecute: "Delete Connection!",
    connConnectionNumber: "Connection Number",
    connDescription: "Description",
    connEnabled: "Enabled: ",
    connEnabledTrue: "True",
    connEnabledFalse: "False",
    connCmdEnabled: "Commands Enabled: ",
    connCmdEnabledTrue: "True",
    connCmdEnabledFalse: "False",
    connProtocolDriver: "Protocol Driver",
    connInstanceNumber: "Instance Number",
    connProtocolConnectionParameters: "Protocol Connection Parameters",
    connLocalLinkAddress: "Local link address",
    connLocalLinkAddressTitle: "Local link address",
    connLocalLinkAddressHint: "Integer number.",
    connRemoteLinkAddress: "Remote link address",
    connRemoteLinkAddressTitle: "Remote link address",
    connRemoteLinkAddressHint: "Integer number.",
    connRemoteEndpointsUrls: "Remote Endpoints URLs",
    connRemoteEndpointsAddNew: "Add new endpoints URL",
    connRemoteEndpointsNewUrl: "New URL",
    connRemoteEndpointsNewUrlCancel: "Cancel",
    connRemoteEndpointsNewUrlExecute: "Add URL!",
    connConfigFileName: "Config File Name",
    connConfigFileNameTitle: "Config File Name",
    connConfigFileNameHint: "XML config file name with path.",
    connUseSecurity: "Use security (certificates, encryption): ",
    connUseSecurityTrue: "True",
    connUseSecurityFalse: "False",
    connAutoCreateTags: "Auto create tags (server browse): ",
    connAutoCreateTagsTrue: "True",
    connAutoCreateTagsFalse: "False",
    connPublishingInterval: "Publishing Interval",
    connPublishingIntervalTitle: "Default publishing interval on server",
    connPublishingIntervalHint: "In seconds (for auto created tags).",
    connSamplingInterval: "Sampling Interval",
    connSamplingIntervalTitle: "Default sampling interval on server",
    connSamplingIntervalHint: "In seconds (0=auto adjusted by the OPC server).",
    connServerQueueSize: "Server Queue Size",
    connServerQueueSizeTitle: "Default sampling queue size on server",
    connServerQueueSizeHint: "Use zero to avoid buffering on the OPC server.",
    connTimeoutKeepalive: "Timeout keep-alive",
    connTimeoutKeepaliveTitle: "Timeout interval for keep-alive messages",
    connTimeoutKeepaliveHint: "In milliseconds.",
    connGiInterval: "GI Interval",
    connGiIntervalTitle: "General interrogation interval",
    connGiIntervalHint: "In seconds.",
    connTestCmdInterval: "Test Command",
    connTestCmdIntervalTitle: "Test command interval",
    connTestCmdIntervalHint: "In seconds.",
    connTimeSyncInterval: "Time Sync",
    connTimeSyncIntervalTitle: "Time sync interval",
    connTimeSyncIntervalHint: "In seconds.",
    connK: "k",
    connKTitle: "'k' protocol parameter",
    connKHint: "Integer number.",
    connW: "w",
    connWTitle: "'w' protocol parameter",
    connWHint: "Integer number.",
    connT0: "t0",
    connT0Title: "'t0' protocol parameter",
    connT0Hint: "In seconds.",
    connT1: "t1",
    connT1Title: "'t1' protocol parameter",
    connT1Hint: "In seconds.",
    connT2: "t2",
    connT2Title: "'t2' protocol parameter",
    connT2Hint: "In seconds.",
    connT3: "t3",
    connT3Title: "'t3' protocol parameter",
    connT3Hint: "In seconds.",
    connSizeOfCot: "Size of COT",
    connSizeOfCotTitle: "Size of COT",
    connSizeOfCotHint: "(Cause Of Transmission).",
    connSizeOfCa: "Size of CA",
    connSizeOfCaTitle: "Size of CA",
    connSizeOfCaHint: "(Common Address).",
    connSizeOfIoa: "Size of IOA",
    connSizeOfIoaTitle: "Size of IOA",
    connSizeOfIoaHint: "(Information Object Address).",
    connModeMultiActive: "One data buffer per client (serverModeMultiActive): ",
    connModeMultiActiveTrue: "True",
    connModeMultiActiveFalse: "False",
    connMaxClientConnections: "Max Client Connections",
    connMaxClientConnectionsTitle: "Max number of client connections",
    connMaxClientConnectionsHint: "Integer number.",
    connMaxQueueSize: "Max Queue Size",
    connMaxQueueSizeTitle: "Max size of data messages queue",
    connMaxQueueSizeHint: "Integer number.",
    connClass0Scan: "Class 0 Scan",
    connClass0ScanTitle: "Class 0 scan interval",
    connClass0ScanHint: "In seconds.",
    connClass1Scan: "Class 1 Scan",
    connClass1ScanTitle: "Class 1 scan interval",
    connClass1ScanHint: "In seconds.",
    connClass2Scan: "Class 2 Scan",
    connClass2ScanTitle: "Class 2 scan interval",
    connClass2ScanHint: "In seconds.",
    connClass3Scan: "Class 3 Scan",
    connClass3ScanTitle: "Class 3 scan interval",
    connClass3ScanHint: "In seconds.",
    connTimeSyncMode: "Time Sync Mode",
    connTimeSyncModeTitle: "Time sync mode",
    connTimeSyncModeHint: "Integer number: 0, 1 or 2.",
    connEnableUnsolicited: "Enable unsolicited: ",
    connEnableUnsolicitedTrue: "True",
    connEnableUnsolicitedFalse: "False",
    connRangeScans: "Range Scans",
    connRangeScanAddNew: "Add a new range scan!",
    connRangeScanGroup: "Group",
    connRangeScanVariation: "Variation",
    connRangeScanStart: "Start Address",
    connRangeScanStop: "Stop Address",
    connRangeScanPeriod: "Period (seconds)",
    connRangeScanAddCancel: "Cancel",
    connRangeScanAddExecute: "Add range scan!",
    connTimeoutAck: "Timeout for ACK",
    connTimeoutAckTitle: "Timeout for ACK",
    connTimeoutAckHint: "In milliseconds.",
    connTimeoutRepeat: "Timeout for Repeat",
    connTimeoutRepeatTitle: "Timeout for repeat",
    connTimeoutRepeatHint: "In milliseconds.",
    connSizeOfLinkAddress: "Size of Link Address",
    connSizeOfLinkAddressTitle: "Size of link address",
    connSizeOfLinkAddressHint: "0, 1, 2",
    connSingleCharAck: "Use single char ACK: ",
    connSingleCharAckTrue: "True",
    connSingleCharAckFalse: "False",
    connTcpParameters: "TCP Parameters (leave blank for serial connections)",
    connBindIpPort: "Bind IP Address and Port",
    connBindIpPortTitle: "Bind IP address:port",
    connBindIpPortHint: "Local bind for listening.",
    connRemoteIpAddresses: "Remote IP addresses",
    connRemoteIpAddressAdd: "Add a new IP address!",
    connRemoteIpAddressAddCancel: "Cancel",
    connRemoteIpAddressAddExecute: "Add IP!",
    connLocalCertificateFile: "Local Certificate File",
    connLocalCertificateFileTitle: "Local certificate file path [TLS]",
    connLocalCertificateFileHint: "e.g. 'C:\\json-scada\\conf\\localCert.pfx",
    connPeerCertificateFile: "Peer Certificate File",
    connPeerCertificateFileTitle: "Peer certificate file path [TLS]",
    connPeerCertificateFileHint: "e.g. 'C:\\json-scada\\conf\\peerCert.cer",
    connRootCertificateFile: "Root Certificate File",
    connRootCertificateFileTitle: "Root certificate file path",
    connRootCertificateFileHint: "e.g. 'C:\\json-scada\\conf\\rootCert.cer'",
    connPrivateCertificateFile: "Private Certificate File",
    connPrivateCertificateFileTitle: "Private certificate file path",
    connPrivateCertificateFileHint: "e.g. 'C:\\json-scada\\conf\\deviceKey.pem'",
}
export default i18n
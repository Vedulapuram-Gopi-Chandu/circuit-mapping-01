import { RecordItem, DocumentItem } from "./types";

export const all_records: RecordItem[] = [
 
  {
    id: 1008,
    key: "REC-1008",
    title: "Fuel Injection Module",
    linkedRecords: [
      { id: 1001, linkType: "is synchronized with" },
      { id: 1009, linkType: "is parent of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2007, versionId: 3701, linkType: "validated against" }
    ]
  },
  {
    id: 1009,
    key: "REC-1009",
    title: "Injector Sensor",
    linkedRecords: [
      { id: 1008, linkType: "is child of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2007, versionId: 3702, linkType: "feeds data to" }
    ]
  },
  {
    id: 1010,
    key: "REC-1010",
    title: "Power Distribution Hub",
    linkedRecords: [
      { id: 1002, linkType: "is connected to" },
      { id: 1011, linkType: "is parent of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2008, versionId: 3801, linkType: "controls" }
    ]
  },
  {
    id: 1011,
    key: "REC-1011",
    title: "Power Relay",
    linkedRecords: [
      { id: 1010, linkType: "is child of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2008, versionId: 3802, linkType: "operates under" }
    ]
  },
  {
    id: 1012,
    key: "REC-1012",
    title: "Hydraulic Controller",
    linkedRecords: [
      { id: 1003, linkType: "is synchronized with" },
      { id: 1013, linkType: "is parent of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2009, versionId: 3901, linkType: "depends on" }
    ]
  },
  {
    id: 1013,
    key: "REC-1013",
    title: "Hydraulic Valve Unit",
    linkedRecords: [
      { id: 1012, linkType: "is child of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2009, versionId: 3902, linkType: "is validated by" }
    ]
  },
  {
    id: 1014,
    key: "REC-1014",
    title: "Torque Monitoring Unit",
    linkedRecords: [
      { id: 1005, linkType: "receives input from" }
    ],
    linkedDocumentVersions: [
      { documentId: 2010, versionId: 4001, linkType: "monitors" }
    ]
  },
  {
    id: 1015,
    key: "REC-1015",
    title: "Load Balancer",
    linkedRecords: [
      { id: 1010, linkType: "is controlled by" }
    ],
    linkedDocumentVersions: [
      { documentId: 2010, versionId: 4002, linkType: "references" }
    ]
  },
  {
    id: 1016,
    key: "REC-1016",
    title: "Exhaust Sensor",
    linkedRecords: [
      { id: 1004, linkType: "is sibling of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2011, versionId: 4101, linkType: "feeds readings to" }
    ]
  },
  {
    id: 1017,
    key: "REC-1017",
    title: "Air Intake Module",
    linkedRecords: [
      { id: 1008, linkType: "is attached to" }
    ],
    linkedDocumentVersions: [
      { documentId: 2011, versionId: 4102, linkType: "references" }
    ]
  },
  {
    id: 1018,
    key: "REC-1018",
    title: "Ignition Controller",
    linkedRecords: [
      { id: 1001, linkType: "is dependent on" }
    ],
    linkedDocumentVersions: [
      { documentId: 2012, versionId: 4201, linkType: "controls" }
    ]
  },
  {
    id: 1019,
    key: "REC-1019",
    title: "Ignition Coil",
    linkedRecords: [
      { id: 1018, linkType: "is child of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2012, versionId: 4202, linkType: "is used by" }
    ]
  },
  {
    id: 1020,
    key: "REC-1020",
    title: "Thermal Expansion Unit",
    linkedRecords: [
      { id: 1006, linkType: "is regulated by" }
    ],
    linkedDocumentVersions: [
      { documentId: 2013, versionId: 4301, linkType: "updates" }
    ]
  },
  {
    id: 1021,
    key: "REC-1021",
    title: "Fan Motor Controller",
    linkedRecords: [
      { id: 1020, linkType: "is child of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2013, versionId: 4302, linkType: "extends" }
    ]
  },
  {
    id: 1022,
    key: "REC-1022",
    title: "Battery Health Monitor",
    linkedRecords: [
      { id: 1007, linkType: "is connected to" }
    ],
    linkedDocumentVersions: [
      { documentId: 2014, versionId: 4401, linkType: "collects data from" }
    ]
  },
  {
    id: 1023,
    key: "REC-1023",
    title: "Charging Regulator",
    linkedRecords: [
      { id: 1022, linkType: "is linked to" }
    ],
    linkedDocumentVersions: [
      { documentId: 2014, versionId: 4402, linkType: "regulates" }
    ]
  },
  {
    id: 1024,
    key: "REC-1024",
    title: "GPS Controller",
    linkedRecords: [
      { id: 1014, linkType: "communicates with" }
    ],
    linkedDocumentVersions: [
      { documentId: 2015, versionId: 4501, linkType: "references" }
    ]
  },
  {
    id: 1025,
    key: "REC-1025",
    title: "Navigation Module",
    linkedRecords: [
      { id: 1024, linkType: "is child of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2015, versionId: 4502, linkType: "extends" }
    ]
  },
  {
    id: 1026,
    key: "REC-1026",
    title: "Wireless Communication Unit",
    linkedRecords: [
      { id: 1017, linkType: "transfers data to" }
    ],
    linkedDocumentVersions: [
      { documentId: 2016, versionId: 4601, linkType: "uses" }
    ]
  },
  {
    id: 1027,
    key: "REC-1027",
    title: "Remote Diagnostics Module",
    linkedRecords: [
      { id: 1026, linkType: "is dependent on" }
    ],
    linkedDocumentVersions: [
      { documentId: 2016, versionId: 4602, linkType: "is monitored by" }
    ]
  },

  {
    id: 1028,
    key: "REC-1028",
    title: "ABS Control Module",
    linkedRecords: [
      { id: 1029, linkType: "receives input from" },
      { id: 1014, linkType: "is synchronized with" }
    ],
    linkedDocumentVersions: [
      { documentId: 2017, versionId: 4701, linkType: "implements" }
    ]
  },
  {
    id: 1029,
    key: "REC-1029",
    title: "Wheel Speed Sensor FL",
    linkedRecords: [
      { id: 1028, linkType: "is child of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2017, versionId: 4702, linkType: "is calibrated by" }
    ]
  },
  {
    id: 1030,
    key: "REC-1030",
    title: "Airbag Deployment Unit",
    linkedRecords: [
      { id: 1031, linkType: "monitors" },
      { id: 1022, linkType: "depends on power from" }
    ],
    linkedDocumentVersions: [
      { documentId: 2018, versionId: 4801, linkType: "adheres to" }
    ]
  },
  {
    id: 1031,
    key: "REC-1031",
    title: "Impact Sensor Front",
    linkedRecords: [
      { id: 1030, linkType: "triggers" }
    ],
    linkedDocumentVersions: [
      { documentId: 2018, versionId: 4802, linkType: "validates" }
    ]
  },
  {
    id: 1032,
    key: "REC-1032",
    title: "Active Suspension Controller",
    linkedRecords: [
      { id: 1033, linkType: "is parent of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2019, versionId: 4901, linkType: "controls" }
    ]
  },
  {
    id: 1033,
    key: "REC-1033",
    title: "Damper Solenoid Valve",
    linkedRecords: [
      { id: 1032, linkType: "is actuated by" }
    ],
    linkedDocumentVersions: [
      { documentId: 2019, versionId: 4902, linkType: "specifies" }
    ]
  },
  {
    id: 1034,
    key: "REC-1034",
    title: "Electronic Power Steering",
    linkedRecords: [
      { id: 1035, linkType: "reads data from" },
      { id: 1028, linkType: "communicates with" }
    ],
    linkedDocumentVersions: [
      { documentId: 2020, versionId: 5001, linkType: "is defined by" }
    ]
  },
  {
    id: 1035,
    key: "REC-1035",
    title: "Steering Angle Sensor",
    linkedRecords: [
      { id: 1034, linkType: "feeds data to" }
    ],
    linkedDocumentVersions: [
      { documentId: 2020, versionId: 5002, linkType: "tests" }
    ]
  },
  {
    id: 1036,
    key: "REC-1036",
    title: "Main Infotainment Head Unit",
    linkedRecords: [
      { id: 1037, linkType: "outputs audio to" },
      { id: 1025, linkType: "displays data from" }
    ],
    linkedDocumentVersions: [
      { documentId: 2021, versionId: 5101, linkType: "runs firmware" }
    ]
  },
  {
    id: 1037,
    key: "REC-1037",
    title: "Digital Amplifier",
    linkedRecords: [
      { id: 1036, linkType: "is connected to" }
    ],
    linkedDocumentVersions: [
      { documentId: 2021, versionId: 5102, linkType: "references" }
    ]
  },
  {
    id: 1038,
    key: "REC-1038",
    title: "Climate Control Logic Board",
    linkedRecords: [
      { id: 1039, linkType: "receives input from" },
      { id: 1021, linkType: "sends commands to" }
    ],
    linkedDocumentVersions: [
      { documentId: 2022, versionId: 5201, linkType: "executes" }
    ]
  },
  {
    id: 1039,
    key: "REC-1039",
    title: "Cabin Temperature Sensor",
    linkedRecords: [
      { id: 1038, linkType: "is child of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2022, versionId: 5202, linkType: "is verified by" }
    ]
  },
  {
    id: 1040,
    key: "REC-1040",
    title: "Lidar Processing Unit",
    linkedRecords: [
      { id: 1041, linkType: "fuses data with" },
      { id: 1024, linkType: "uses coordinates from" }
    ],
    linkedDocumentVersions: [
      { documentId: 2023, versionId: 5301, linkType: "processes" }
    ]
  },
  {
    id: 1041,
    key: "REC-1041",
    title: "Long Range Radar",
    linkedRecords: [
      { id: 1040, linkType: "is sibling of" }
    ],
    linkedDocumentVersions: [
      { documentId: 2023, versionId: 5302, linkType: "targets" }
    ]
  },
  {
    id: 1042,
    key: "REC-1042",
    title: "Lane Keep Assist Module",
    linkedRecords: [
      { id: 1034, linkType: "sends torque request to" },
      { id: 1043, linkType: "checks driver status via" }
    ],
    linkedDocumentVersions: [
      { documentId: 2024, versionId: 5401, linkType: "enforces" }
    ]
  },
  {
    id: 1043,
    key: "REC-1043",
    title: "Driver Attention Monitor",
    linkedRecords: [
      { id: 1042, linkType: "alerts" }
    ],
    linkedDocumentVersions: [
      { documentId: 2024, versionId: 5402, linkType: "records events to" }
    ]
  },
  {
    id: 1044,
    key: "REC-1044",
    title: "Adaptive Headlight Controller",
    linkedRecords: [
      { id: 1045, linkType: "is parent of" },
      { id: 1035, linkType: "reads steering angle from" }
    ],
    linkedDocumentVersions: [
      { documentId: 2025, versionId: 5501, linkType: "regulates" }
    ]
  },
  {
    id: 1045,
    key: "REC-1045",
    title: "High Beam Shutter",
    linkedRecords: [
      { id: 1044, linkType: "is operated by" }
    ],
    linkedDocumentVersions: [
      { documentId: 2025, versionId: 5502, linkType: "cycles" }
    ]
  },
  {
    id: 1046,
    key: "REC-1046",
    title: "Rain Sensing Module",
    linkedRecords: [
      { id: 1047, linkType: "activates" }
    ],
    linkedDocumentVersions: [
      { documentId: 2026, versionId: 5601, linkType: "detects via" }
    ]
  },
  {
    id: 1047,
    key: "REC-1047",
    title: "Wiper Motor Assembly",
    linkedRecords: [
      { id: 1046, linkType: "is controlled by" }
    ],
    linkedDocumentVersions: [
      { documentId: 2026, versionId: 5602, linkType: "specs defined in" }
    ]
  }
];


export const all_documents: DocumentItem[] = [

  {
    id: 2007,
    key: "DOC-2007",
    title: "Fuel System Specification",
    type: "document",
    versions: [
      { versionId: 3701, name: "v1.0 Initial Spec", createdAt: "2023-01-15" },
      { versionId: 3702, name: "v1.1 Sensor Updates", createdAt: "2023-02-20" }
    ]
  },
  {
    id: 2008,
    key: "DOC-2008",
    title: "Power Distribution Manual",
    type: "document",
    versions: [
      { versionId: 3801, name: "v1.0 Core Logic", createdAt: "2023-03-10" },
      { versionId: 3802, name: "v2.0 Relay Configurations", createdAt: "2023-04-05" }
    ]
  },
  {
    id: 2009,
    key: "DOC-2009",
    title: "Hydraulic Safety Protocols",
    type: "document",
    versions: [
      { versionId: 3901, name: "v1.0 Base Safety", createdAt: "2023-05-12" },
      { versionId: 3902, name: "v1.2 Valve Constraints", createdAt: "2023-06-01" }
    ]
  },
  {
    id: 2010,
    key: "DOC-2010",
    title: "Load & Torque Analysis",
    type: "document",
    versions: [
      { versionId: 4001, name: "v1.0 Monitoring Setup", createdAt: "2023-06-15" },
      { versionId: 4002, name: "v1.5 Balancing Algo", createdAt: "2023-07-20" }
    ]
  },
  {
    id: 2011,
    key: "DOC-2011",
    title: "Emissions Control Standards",
    type: "document",
    versions: [
      { versionId: 4101, name: "v1.0 Exhaust Limits", createdAt: "2023-08-05" },
      { versionId: 4102, name: "v2.0 Intake Procedures", createdAt: "2023-09-10" }
    ]
  },
  {
    id: 2012,
    key: "DOC-2012",
    title: "Ignition System Design",
    type: "document",
    versions: [
      { versionId: 4201, name: "v1.0 Controller Logic", createdAt: "2023-09-25" },
      { versionId: 4202, name: "v1.1 Coil Specifications", createdAt: "2023-10-15" }
    ]
  },
  {
    id: 2013,
    key: "DOC-2013",
    title: "Thermal Regulation Guidelines",
    type: "document",
    versions: [
      { versionId: 4301, name: "v1.0 Expansion Rates", createdAt: "2023-11-01" },
      { versionId: 4302, name: "v1.2 Cooling Strategies", createdAt: "2023-11-20" }
    ]
  },
  {
    id: 2014,
    key: "DOC-2014",
    title: "Battery Management System",
    type: "document",
    versions: [
      { versionId: 4401, name: "v1.0 Health Metrics", createdAt: "2023-12-05" },
      { versionId: 4402, name: "v2.0 Charging Cycles", createdAt: "2024-01-10" }
    ]
  },
  {
    id: 2015,
    key: "DOC-2015",
    title: "GPS & Navigation Architecture",
    type: "document",
    versions: [
      { versionId: 4501, name: "v1.0 Geolocation API", createdAt: "2024-02-15" },
      { versionId: 4502, name: "v1.5 Routing Logic", createdAt: "2024-03-01" }
    ]
  },
  {
    id: 2016,
    key: "DOC-2016",
    title: "Wireless Diagnostics Protocol",
    type: "document",
    versions: [
      { versionId: 4601, name: "v1.0 Comm Handshake", createdAt: "2024-03-20" },
      { versionId: 4602, name: "v1.1 Remote Access", createdAt: "2024-04-10" }
    ]
  },

  {
    id: 2017,
    key: "DOC-2017",
    title: "Braking System Architecture",
    type: "document",
    versions: [
      { versionId: 4701, name: "v1.0 ABS Logic", createdAt: "2024-05-01" },
      { versionId: 4702, name: "v1.1 Sensor Calibration", createdAt: "2024-05-15" }
    ]
  },
  {
    id: 2018,
    key: "DOC-2018",
    title: "Passive Safety Standards",
    type: "document",
    versions: [
      { versionId: 4801, name: "v2.0 Deployment Thresholds", createdAt: "2024-06-10" },
      { versionId: 4802, name: "v2.1 Impact Verification", createdAt: "2024-06-25" }
    ]
  },
  {
    id: 2019,
    key: "DOC-2019",
    title: "Active Suspension Specs",
    type: "document",
    versions: [
      { versionId: 4901, name: "v1.0 Damping Curves", createdAt: "2024-07-05" },
      { versionId: 4902, name: "v1.2 Solenoid Limits", createdAt: "2024-07-20" }
    ]
  },
  {
    id: 2020,
    key: "DOC-2020",
    title: "Steering Control Systems",
    type: "document",
    versions: [
      { versionId: 5001, name: "v1.0 EPS Maps", createdAt: "2024-08-01" },
      { versionId: 5002, name: "v1.5 Feedback Loops", createdAt: "2024-08-15" }
    ]
  },
  {
    id: 2021,
    key: "DOC-2021",
    title: "Infotainment Hardware Guide",
    type: "document",
    versions: [
      { versionId: 5101, name: "v3.0 Head Unit Interface", createdAt: "2024-09-01" },
      { versionId: 5102, name: "v3.1 Audio Routing", createdAt: "2024-09-12" }
    ]
  },
  {
    id: 2022,
    key: "DOC-2022",
    title: "Climate Control Algorithms",
    type: "document",
    versions: [
      { versionId: 5201, name: "v1.0 Zone Logic", createdAt: "2024-10-01" },
      { versionId: 5202, name: "v1.1 Sensor Offsets", createdAt: "2024-10-10" }
    ]
  },
  {
    id: 2023,
    key: "DOC-2023",
    title: "Sensor Fusion Protocol",
    type: "document",
    versions: [
      { versionId: 5301, name: "v0.9 Lidar Point Cloud", createdAt: "2024-11-05" },
      { versionId: 5302, name: "v1.0 Radar Cross-check", createdAt: "2024-11-20" }
    ]
  },
  {
    id: 2024,
    key: "DOC-2024",
    title: "ADAS Feature Set",
    type: "document",
    versions: [
      { versionId: 5401, name: "v2.0 Lane Keep Assist", createdAt: "2024-12-01" },
      { versionId: 5402, name: "v2.1 Driver Monitoring", createdAt: "2024-12-15" }
    ]
  },
  {
    id: 2025,
    key: "DOC-2025",
    title: "Exterior Lighting Control",
    type: "document",
    versions: [
      { versionId: 5501, name: "v1.0 Adaptive Beam", createdAt: "2025-01-10" },
      { versionId: 5502, name: "v1.1 Shutter Timing", createdAt: "2025-01-25" }
    ]
  },
  {
    id: 2026,
    key: "DOC-2026",
    title: "Vision & Visibility Systems",
    type: "document",
    versions: [
      { versionId: 5601, name: "v1.0 Rain Algorithms", createdAt: "2025-02-05" },
      { versionId: 5602, name: "v1.2 Motor Electricals", createdAt: "2025-02-20" }
    ]
  }
];
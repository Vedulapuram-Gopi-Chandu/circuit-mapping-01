import { RecordItem } from "./types";

export const data_expanded_records: RecordItem[] = [

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
  }
];
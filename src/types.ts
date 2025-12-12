export interface LinkedRecord {
  id: number;
  linkType: string;
}

export interface LinkedDocumentVersion {
  documentId: number;
  versionId: number;
  linkType: string;
}

export interface RecordItem {
  id: number;
  key: string;
  title: string;
  linkedRecords: LinkedRecord[];
  linkedDocumentVersions: LinkedDocumentVersion[];
}

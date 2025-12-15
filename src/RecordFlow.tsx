import React, { useMemo, useRef } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  BackgroundVariant,
  Position,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";

import dagre from "dagre";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { all_records, all_documents } from "./Record-data";
import "./RecordFlow.css";

const nodeWidth = 230;
const nodeHeight = 90;

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const layoutGraph = (
  nodes: Node[],
  edges: Edge[],
  direction: "TB" | "LR"
) => {
  dagreGraph.setGraph({
    rankdir: direction,
    ranksep: 200,
    nodesep: 80,
    marginy: 50,
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const pos = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: pos.x - nodeWidth / 2,
        y: pos.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};
const RecordFlow: React.FC = () => {
  const flowRef = useRef<HTMLDivElement>(null);

  const initialData = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    all_records.forEach((rec) => {
      nodes.push({
        id: `rec-${rec.id}`,
        position: { x: 0, y: 0 },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
        data: {
          label: (
            <div className="record-node">
              <strong>{rec.key}</strong>
              <br />
              {rec.title}
            </div>
          ),
        },
      });

      rec.linkedRecords.forEach((link) => {
        edges.push({
          id: `rec-${rec.id}-rec-${link.id}-${link.linkType}`,
          source: `rec-${rec.id}`,
          target: `rec-${link.id}`,
          label: link.linkType,
          type: "default",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: { stroke: "#9bb4ff", strokeWidth: 2 },
        });
      });

      rec.linkedDocumentVersions.forEach((docLink) => {
        edges.push({
          id: `rec-${rec.id}-doc-${docLink.documentId}-v${docLink.versionId}`,
          source: `rec-${rec.id}`,
          target: `doc-${docLink.documentId}-v${docLink.versionId}`,
          label: docLink.linkType,
          type: "default",
          markerEnd: { type: MarkerType.ArrowClosed },
          style: {
            stroke: "#ff9966",
            strokeDasharray: "5,5",
            strokeWidth: 2,
          },
        });
      });
    });

    all_documents.forEach((doc) => {
      doc.versions.forEach((version) => {
        nodes.push({
          id: `doc-${doc.id}-v${version.versionId}`,
          position: { x: 0, y: 0 },
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
          data: {
            label: (
              <div className="document-node">
                <strong>{doc.key}</strong>
                <br />
                {doc.title}
                <br />
                <em>{version.name}</em>
              </div>
            ),
          },
        });
      });
    });

    return layoutGraph(nodes, edges, "LR");
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialData.edges);

  const exportPNG = async () => {
    if (!flowRef.current) return;

    const canvas = await html2canvas(flowRef.current, { scale: 2 });
    const url = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = url;
    link.download = "record-graph.png";
    link.click();
  };

  const exportPDF = async () => {
  if (!flowRef.current) return;

  const canvas = await html2canvas(flowRef.current, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdfWidth = canvas.width / 2;
  const pdfHeight = canvas.height / 2;

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [pdfWidth, pdfHeight],
  });

  pdf.addImage(
    imgData,
    "PNG",
    0,         
    0,          
    pdfWidth,  
    pdfHeight   
  );

  pdf.save("record-graph.pdf");
};

  return (
    <div className="recordflow-container">
      <div className="recordflow-toolbar">
        <button className="recordflow-btn" onClick={exportPNG}>
          📸 Export PNG
        </button>

        <button className="recordflow-btn" onClick={exportPDF}>
          📄 Export PDF
        </button>

        <div className="recordflow-legend">
          <span className="legend-record">● Records</span>
          <span className="legend-document">● Documents</span>
        </div>
      </div>

      <div ref={flowRef} className="recordflow-canvas">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
        >
          <Background variant={BackgroundVariant.Dots} gap={15} size={1} />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default RecordFlow;

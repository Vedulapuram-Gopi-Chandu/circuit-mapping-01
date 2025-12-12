import React, { useMemo, useRef } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";

import dagre from "dagre";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { data_expanded_records } from "./data_expanded_records";

const nodeWidth = 230;
const nodeHeight = 90;

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const layout = (nodes: Node[], edges: Edge[], direction: "TB" | "LR") => {
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const updatedNodes = nodes.map((node) => {
    const pos = dagreGraph.node(node.id);
    return {
      ...node,
      position: {
        x: pos.x - nodeWidth / 2,
        y: pos.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: updatedNodes, edges };
};

const RecordFlow: React.FC = () => {
  const flowRef = useRef<HTMLDivElement>(null);

  const { nodes, edges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    data_expanded_records.forEach((rec) => {
      nodes.push({
        id: rec.id.toString(),
        position: { x: 0, y: 0 },
        data: {
          label: (
            <div style={{ textAlign: "center" }}>
              <strong>{rec.key}</strong>
              <br />
              {rec.title}
            </div>
          ),
        },
        style: {
          padding: 10,
          borderRadius: 10,
          background: "#eef4ff",
          border: "1px solid #9bb4ff",
        },
      });

      rec.linkedRecords.forEach((link) => {
        edges.push({
          id: `${rec.id}-${link.id}-${link.linkType}`,
          source: rec.id.toString(),
          target: link.id.toString(),
          label: link.linkType,
          markerEnd: "arrowclosed",
        });
      });
    });

    return layout(nodes, edges, "TB");
  }, []);

  // PNG EXPORT
  const exportPNG = async () => {
    if (!flowRef.current) return;
    const canvas = await html2canvas(flowRef.current, { scale: 2 });
    const url = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = url;
    link.download = "graph.png";
    link.click();
  };

  // PDF EXPORT
  const exportPDF = async () => {
    if (!flowRef.current) return;

    const canvas = await html2canvas(flowRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "px");
    pdf.addImage(imgData, "PNG", 20, 20, canvas.width / 2, canvas.height / 2);
    pdf.save("graph.pdf");
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* Export Buttons */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 10,
          display: "flex",
          gap: 10,
        }}
      >
        <button onClick={exportPNG}>📸 Export PNG</button>
        <button onClick={exportPDF}>📄 Export PDF</button>
      </div>

      <div ref={flowRef} style={{ width: "100%", height: "100%" }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background variant="dots" gap={15} size={1} />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default RecordFlow;

import { MarkerType } from "reactflow";

export const nodes = [
  {
    id: "1",
    type: "node",
    data: { heading: "Send Message", content: "text message 1" },
    position: { x: 200, y: 200 }
  },
  {
    id: "2",
    type: "node",
    data: { heading: "Send Message", content: "text message 2" },
    position: { x: 550, y: 120 }
  }
];

export const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    // label: "this is an edge label",
    markerEnd: {
      type: MarkerType.ArrowClosed
    }
  }
];

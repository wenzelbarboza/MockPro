"use client";
import React, { useRef } from "react";
import { Circle, Layer, Stage } from "react-konva";
import type Konva from "konva";

const InstaCanvas = (): JSX.Element => {
  const canvasRef = useRef<Konva.Stage | null>(null);

  const handleDownload = (): void => {
    if (!canvasRef.current) return;

    const stage = canvasRef.current.getStage();

    const dataURL = stage.toDataURL();

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "instaCanvas.png";
    link.click();
  };

  return (
    <div>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleDownload}
      >
        Download
      </button>
      <Stage width={600} height={600} className="bg-white" ref={canvasRef}>
        <Layer>
          <Circle x={100} y={100} radius={50} fill="red" draggable />
        </Layer>
      </Stage>
    </div>
  );
};

export default InstaCanvas;

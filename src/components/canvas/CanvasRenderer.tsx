"use client";

import React, { useRef } from "react";
import { Stage, Layer, Rect, Image, Group } from "react-konva";
import type Konva from "konva";

type BackgroundType = "solid" | "linear-gradient" | "radial-gradient";

interface GradientStop {
  offset: number;
  color: string;
}

interface CanvasRendererProps {
  backgroundType: BackgroundType;
  backgroundColor: string;
  gradientStops: GradientStop[];
  gradientAngle: number;
  frameColor: string;
  frameThickness: number;
  frameRotation: number;
  frameSize: number;
  uploadedImage: HTMLImageElement | null;
}

const CanvasRenderer: React.FC<CanvasRendererProps> = ({
  backgroundType,
  backgroundColor,
  gradientStops,
  gradientAngle,
  frameColor,
  frameThickness,
  frameRotation,
  frameSize,
  uploadedImage,
}) => {
  const canvasRef = useRef<Konva.Stage | null>(null);

  const getBackgroundFill = (): string | CanvasGradient => {
    if (backgroundType === "solid") {
      return backgroundColor;
    }

    if (!canvasRef.current) return backgroundColor;

    const nativeCanvas = canvasRef.current.toCanvas();
    const context = nativeCanvas.getContext("2d");

    if (!context) return backgroundColor;

    if (backgroundType === "linear-gradient") {
      const angleRad = (gradientAngle * Math.PI) / 180;
      const gradient = context.createLinearGradient(
        300 - Math.cos(angleRad) * 300,
        300 - Math.sin(angleRad) * 300,
        300 + Math.cos(angleRad) * 300,
        300 + Math.sin(angleRad) * 300,
      );

      if (gradientStops.length >= 4) {
        const numRepeats = 8;
        const patternSize = 1 / numRepeats;

        for (let i = 0; i < numRepeats; i++) {
          gradientStops.forEach((stop) => {
            const adjustedOffset = (i + stop.offset) * patternSize;
            gradient.addColorStop(adjustedOffset, stop.color);
          });
        }
      } else {
        gradientStops.forEach((stop) =>
          gradient.addColorStop(stop.offset, stop.color),
        );
      }
      return gradient;
    }

    if (backgroundType === "radial-gradient") {
      const gradient = context.createRadialGradient(300, 300, 0, 300, 300, 300);

      if (gradientStops.length >= 4) {
        const numRepeats = 6;
        const patternSize = 1 / numRepeats;

        for (let i = 0; i < numRepeats; i++) {
          gradientStops.forEach((stop) => {
            const adjustedOffset = (i + stop.offset) * patternSize;
            gradient.addColorStop(adjustedOffset, stop.color);
          });
        }
      } else {
        gradientStops.forEach((stop) =>
          gradient.addColorStop(stop.offset, stop.color),
        );
      }
      return gradient;
    }

    return backgroundColor;
  };

  return (
    <Stage
      width={600}
      height={600}
      ref={canvasRef}
      className="border border-gray-300"
    >
      <Layer>
        {/* Background */}
        <Rect width={600} height={600} fill={getBackgroundFill()} />

        {/* Frame and Image Group */}
        <Group x={300} y={300} rotation={frameRotation}>
          {/* Frame */}
          <Rect
            x={-frameSize / 2}
            y={-frameSize / 2}
            width={frameSize}
            height={frameSize}
            fill={frameColor}
          />

          {/* Inner Frame (where image will be) */}
          <Rect
            x={-frameSize / 2 + frameThickness}
            y={-frameSize / 2 + frameThickness}
            width={frameSize - frameThickness * 2}
            height={frameSize - frameThickness * 2}
            fill={backgroundColor}
          />

          {/* Uploaded Image */}
          {uploadedImage && (
            <Image
              x={-frameSize / 2 + frameThickness}
              y={-frameSize / 2 + frameThickness}
              width={frameSize - frameThickness * 2}
              height={frameSize - frameThickness * 2}
              image={uploadedImage}
              alt="Uploaded Image"
            />
          )}
        </Group>
      </Layer>
    </Stage>
  );
};

export default CanvasRenderer;
"use client";
import React, { useRef, useState } from "react";
import { Stage, Layer, Rect, Image, Group } from "react-konva";
import type Konva from "konva";

type BackgroundType = "solid" | "linear-gradient" | "radial-gradient";

interface GradientStop {
  offset: number;
  color: string;
}

const DEFAULT_GRADIENT_STOPS: GradientStop[] = [
  { offset: 0, color: "#ffffff" },
  { offset: 1, color: "#000000" },
];

const InstaCanvas = (): JSX.Element => {
  const canvasRef = useRef<Konva.Stage | null>(null);
  const [backgroundType, setBackgroundType] = useState<BackgroundType>("solid");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [gradientStops, setGradientStops] = useState<GradientStop[]>(
    DEFAULT_GRADIENT_STOPS,
  );
  const [gradientAngle, setGradientAngle] = useState(0);
  const [frameColor, setFrameColor] = useState("#000000");
  const [frameThickness, setFrameThickness] = useState(20);
  const [frameRotation, setFrameRotation] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<HTMLImageElement | null>(
    null,
  );
  const [frameWidth, setFrameWidth] = useState(400);
  const [frameHeight, setFrameHeight] = useState(400);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const img = document.createElement("img");
          img.src = event.target.result as string;
          img.onload = () => {
            setUploadedImage(img);
          };
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGradientStopChange = (
    index: number,
    field: keyof GradientStop,
    value: string | number,
  ): void => {
    setGradientStops((prevStops) => {
      const newStops = [...prevStops];
      const currentStop = newStops[index];

      if (!currentStop) return prevStops;

      if (field === "offset" && typeof value === "number") {
        newStops[index] = {
          ...currentStop,
          offset: value,
        };
      } else if (field === "color" && typeof value === "string") {
        newStops[index] = {
          ...currentStop,
          color: value,
        };
      }

      return newStops;
    });
  };
  const addGradientStop = (): void => {
    setGradientStops((prevStops) => {
      if (prevStops.length >= 5) return prevStops;

      // Safe access to last stop with fallback
      const lastStopIndex = prevStops.length - 1;
      const lastOffset =
        lastStopIndex >= 0 ? prevStops[lastStopIndex]?.offset : 0;

      const newStop: GradientStop = {
        offset: Math.min((lastOffset ?? 0) + 0.2, 1),
        color: "#ffffff",
      };

      return [...prevStops, newStop];
    });
  };

  const removeGradientStop = (index: number) => {
    if (gradientStops.length > 2) {
      setGradientStops(gradientStops.filter((_, i) => i !== index));
    }
  };

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
      gradientStops.forEach((stop) =>
        gradient.addColorStop(stop.offset, stop.color),
      );
      return gradient;
    }

    if (backgroundType === "radial-gradient") {
      const gradient = context.createRadialGradient(300, 300, 0, 300, 300, 300);
      gradientStops.forEach((stop) =>
        gradient.addColorStop(stop.offset, stop.color),
      );
      return gradient;
    }

    return backgroundColor;
  };

  const handleDownload = (): void => {
    if (!canvasRef.current) return;
    try {
      const dataURL = canvasRef.current.toDataURL();
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "instaCanvas.png";
      link.click();
    } catch (error) {
      console.error("Error downloading canvas:", error);
    }
  };

  return (
    <div className="mt-52 p-4">
      <div className="mb-4 flex flex-wrap gap-4">
        {/* Background Type Selection */}
        <div className="flex items-center gap-2">
          <label>Background Type:</label>
          <select
            value={backgroundType}
            onChange={(e) =>
              setBackgroundType(e.target.value as BackgroundType)
            }
            className="rounded border p-1"
          >
            <option value="solid">Solid Color</option>
            <option value="linear-gradient">Linear Gradient</option>
            <option value="radial-gradient">Radial Gradient</option>
          </select>
        </div>

        {/* Solid Color Controls */}
        {backgroundType === "solid" && (
          <div className="flex items-center gap-2">
            <label>Background Color:</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="h-8 w-16"
            />
          </div>
        )}

        {/* Gradient Controls */}
        {(backgroundType === "linear-gradient" ||
          backgroundType === "radial-gradient") && (
          <div className="flex flex-wrap items-center gap-4">
            {backgroundType === "linear-gradient" && (
              <div className="flex items-center gap-2">
                <label>Angle:</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={gradientAngle}
                  onChange={(e) => setGradientAngle(Number(e.target.value))}
                  className="w-32"
                />
                <span>{gradientAngle}°</span>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={addGradientStop}
                  className="rounded bg-green-500 px-2 py-1 text-white hover:bg-green-600"
                  disabled={gradientStops.length >= 5}
                >
                  Add Stop
                </button>
              </div>

              {gradientStops.map((stop, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="color"
                    value={stop.color}
                    onChange={(e) =>
                      handleGradientStopChange(index, "color", e.target.value)
                    }
                    className="h-8 w-16"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={stop.offset}
                    onChange={(e) =>
                      handleGradientStopChange(
                        index,
                        "offset",
                        Number(e.target.value),
                      )
                    }
                    className="w-32"
                  />
                  <span>{(stop.offset * 100).toFixed(0)}%</span>
                  {gradientStops.length > 2 && (
                    <button
                      onClick={() => removeGradientStop(index)}
                      className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Frame Controls */}
        <div className="flex items-center gap-2">
          <label>Frame Color:</label>
          <input
            type="color"
            value={frameColor}
            onChange={(e) => setFrameColor(e.target.value)}
            className="h-8 w-16"
          />
        </div>

        <div className="flex items-center gap-2">
          <label>Frame Thickness:</label>
          <input
            type="range"
            min="5"
            max="50"
            value={frameThickness}
            onChange={(e) => setFrameThickness(Number(e.target.value))}
            className="w-32"
          />
          <span>{frameThickness}px</span>
        </div>

        <div className="flex items-center gap-2">
          <label>Frame Rotation:</label>
          <input
            type="range"
            min="-180"
            max="180"
            value={frameRotation}
            onChange={(e) => setFrameRotation(Number(e.target.value))}
            className="w-32"
          />
          <span>{frameRotation}°</span>
        </div>

        <div className="flex items-center gap-2">
          <label>Frame Width:</label>
          <input
            type="range"
            min="200"
            max="500"
            value={frameWidth}
            onChange={(e) => setFrameWidth(Number(e.target.value))}
            className="w-32"
          />
          <span>{frameWidth}px</span>
        </div>

        <div className="flex items-center gap-2">
          <label>Frame Height:</label>
          <input
            type="range"
            min="200"
            max="500"
            value={frameHeight}
            onChange={(e) => setFrameHeight(Number(e.target.value))}
            className="w-32"
          />
          <span>{frameHeight}px</span>
        </div>

        <div className="flex items-center gap-2">
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="text-sm"
          />
        </div>

        <button
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>

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
          <Group x={300} y={300} rotation={frameRotation} draggable>
            {/* Frame */}
            <Rect
              x={-frameWidth / 2}
              y={-frameHeight / 2}
              width={frameWidth}
              height={frameHeight}
              fill={frameColor}
            />

            {/* Inner Frame (where image will be) */}
            <Rect
              x={-frameWidth / 2 + frameThickness}
              y={-frameHeight / 2 + frameThickness}
              width={frameWidth - frameThickness * 2}
              height={frameHeight - frameThickness * 2}
              fill={backgroundColor}
            />

            {/* Uploaded Image */}
            {uploadedImage && (
              <Image
                x={-frameWidth / 2 + frameThickness}
                y={-frameHeight / 2 + frameThickness}
                width={frameWidth - frameThickness * 2}
                height={frameHeight - frameThickness * 2}
                image={uploadedImage}
                alt="Uploaded Image"
              />
            )}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default InstaCanvas;

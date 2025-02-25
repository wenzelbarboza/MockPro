"use client";

import React, { useState } from "react";
import BackgroundControls from "./canvas/BackgroundControls";
import FrameControls from "./canvas/FrameControls";
import CanvasRenderer from "./canvas/CanvasRenderer";

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
  const [activeTab, setActiveTab] = useState<"background" | "frame">(
    "background",
  );
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
  const [frameSize, setFrameSize] = useState(400);
  const [frameTemplate, setFrameTemplate] = useState<string | null>(null);

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

  const handleDownload = (): void => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    try {
      const dataURL = canvas.toDataURL();
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "instaCanvas.png";
      link.click();
    } catch (error) {
      console.error("Error downloading canvas:", error);
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Canvas - Left Side */}
      <div className="flex w-3/4 items-center justify-center">
        <CanvasRenderer
          backgroundType={backgroundType}
          backgroundColor={backgroundColor}
          gradientStops={gradientStops}
          gradientAngle={gradientAngle}
          frameColor={frameColor}
          frameThickness={frameThickness}
          frameRotation={frameRotation}
          frameSize={frameSize}
          uploadedImage={uploadedImage}
        />
      </div>

      {/* Controls Panel - Right Side */}
      <div className="w-1/4 overflow-y-auto bg-background p-4">
        <div className="flex flex-col gap-6">
          {/* Tab Buttons */}
          <div className="flex gap-2 border-b border-border">
            <button
              onClick={() => setActiveTab("background")}
              className={`px-4 py-2 ${activeTab === "background" ? "border-b-2 border-primary font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Background
            </button>
            <button
              onClick={() => setActiveTab("frame")}
              className={`px-4 py-2 ${activeTab === "frame" ? "border-b-2 border-primary font-semibold text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              Frame
            </button>
          </div>

          {/* Image Upload */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Image</h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="cursor-pointer rounded border border-gray-300 p-2"
            />
          </div>

          {/* Conditional Rendering of Controls */}
          {activeTab === "background" ? (
            <BackgroundControls
              backgroundType={backgroundType}
              setBackgroundType={setBackgroundType}
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
              gradientStops={gradientStops}
              setGradientStops={setGradientStops}
              gradientAngle={gradientAngle}
              setGradientAngle={setGradientAngle}
            />
          ) : (
            <FrameControls
              frameColor={frameColor}
              setFrameColor={setFrameColor}
              frameThickness={frameThickness}
              setFrameThickness={setFrameThickness}
              frameRotation={frameRotation}
              setFrameRotation={setFrameRotation}
              frameSize={frameSize}
              setFrameSize={setFrameSize}
              frameTemplate={frameTemplate}
              setFrameTemplate={setFrameTemplate}
            />
          )}

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="mt-4 rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstaCanvas;

"use client";

import React, { useState, useRef } from "react";
import BackgroundControls from "./canvas/BackgroundControls";
import FrameControls from "./canvas/FrameControls";
import FramePreview from "./canvas/FramePreview";
import { toPng } from "html-to-image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";
import { ChevronUp } from "lucide-react";

type BackgroundType = "solid" | "linear-gradient" | "radial-gradient";
export type DeviceType = "basic" | "iphone15" | "youtube";

interface GradientStop {
  offset: number;
  color: string;
}

const DEFAULT_GRADIENT_STOPS: GradientStop[] = [
  { offset: 0, color: "#ffffff" },
  { offset: 1, color: "#000000" },
];

type InstaCanvasProps = {
  params: {
    type: DeviceType;
  };
};

const InstaCanvas = ({ params }: InstaCanvasProps): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { type } = params;

  console.log("type: ", type);

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
  const [frameTiltX, setFrameTiltX] = useState<number>(0);
  const [frameTiltY, setFrameTiltY] = useState<number>(0);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [frameSize, setFrameSize] = useState(400);
  const [deviceType, setDeviceType] = useState<DeviceType>(type);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const getBackgroundStyle = () => {
    if (backgroundType === "solid") {
      return { background: backgroundColor };
    }

    const gradientColors = gradientStops
      .map((stop) => `${stop.color} ${stop.offset * 100}%`)
      .join(", ");

    if (backgroundType === "linear-gradient") {
      return {
        background: `linear-gradient(${gradientAngle}deg, ${gradientColors})`,
      };
    }

    if (backgroundType === "radial-gradient") {
      return {
        background: `radial-gradient(circle at center, ${gradientColors})`,
      };
    }

    return {};
  };

  const handleDownload = async () => {
    const element = document.getElementById("canvas-content");
    if (!element) return;

    try {
      // Use html-to-image for better handling of CSS properties
      const dataUrl = await toPng(element);

      // Download the image
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "instaCanvas.png";
      link.click();
    } catch (error) {
      console.error("Error downloading canvas:", error);
    }
  };

  const isMobile = useMediaQuery("(max-width: 768px)"); // Check if screen is mobile size

  // Controls panel content - reused in both desktop and mobile views
  const ControlsPanel = () => (
    <div className="flex h-full flex-col gap-6">
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

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Image Upload Button */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Image</h3>
        <button
          onClick={handleUploadClick}
          className="cursor-pointer rounded border border-gray-300 p-2 hover:bg-gray-50"
        >
          Choose Image
        </button>
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
          frameTiltX={frameTiltX}
          setFrameTiltX={setFrameTiltX}
          frameTiltY={frameTiltY}
          setFrameTiltY={setFrameTiltY}
          deviceType={deviceType}
          setDeviceType={setDeviceType}
        />
      )}
    </div>
  );

  // Canvas content - reused in both desktop and mobile views
  const CanvasContent = () => (
    <div
      id="canvas-content"
      className="relative aspect-square w-full max-w-[600px] border-2 border-gray-300 shadow-lg"
      style={getBackgroundStyle()}
    >
      <FramePreview
        frameColor={frameColor}
        frameThickness={frameThickness}
        frameRotation={frameRotation}
        frameSize={frameSize}
        frameTiltX={frameTiltX}
        frameTiltY={frameTiltY}
        deviceType={deviceType}
        onUploadClick={handleUploadClick}
        setUploadedImage={setUploadedImage}
      >
        {uploadedImage && deviceType === "youtube" ? (
          <img
            src={uploadedImage}
            alt="Uploaded"
            className="h-full w-full object-contain"
            style={{ display: "block", position: "absolute", inset: "0" }}
          />
        ) : (
          uploadedImage && (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className="h-full w-full object-cover"
              style={{ display: "block", position: "absolute", inset: "0" }}
            />
          )
        )}
      </FramePreview>
    </div>
  );

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      {isMobile ? (
        // Mobile Layout with Drawer
        <div className="flex w-full flex-col items-center justify-center overflow-hidden bg-gray-50">
          <div className="relative flex h-full w-full flex-col items-center justify-center p-4">
            <CanvasContent />

            {/* Mobile Drawer */}
            <Drawer>
              <DrawerTrigger asChild>
                <button className="fixed bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg">
                  <ChevronUp className="h-4 w-4" />
                  <span>Controls</span>
                </button>
              </DrawerTrigger>
              <DrawerContent className="flex max-h-[90vh] flex-col p-4 pt-6">
                <div className="flex-1 overflow-y-auto pb-24">
                  <DrawerTitle className="sr-only">Controls Panel</DrawerTitle>
                  <ControlsPanel />
                </div>
                <DrawerFooter className="fixed bottom-0 left-0 right-0 z-10 border-t border-border bg-background p-4 shadow-lg">
                  <button
                    onClick={handleDownload}
                    className="w-full rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
                  >
                    Download Image
                  </button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      ) : (
        // Desktop Layout with Sidebar
        <>
          {/* Preview Area - Left Side */}
          <div className="flex w-3/4 items-center justify-center overflow-hidden bg-gray-50">
            <CanvasContent />
          </div>

          {/* Controls Panel - Right Side */}
          <div className="w-1/4 overflow-y-auto bg-background p-4">
            <div className="flex h-full flex-col">
              <div className="flex-1 overflow-y-auto pb-6">
                <ControlsPanel />
              </div>
              <div className="sticky bottom-0 z-10 border-t border-border bg-background pt-4">
                <button
                  onClick={handleDownload}
                  className="w-full rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
                >
                  Download Image
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InstaCanvas;

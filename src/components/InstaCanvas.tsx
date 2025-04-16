"use client";

import React, { useState, useRef, use, type Usable } from "react";
import BackgroundControls from "./canvas/BackgroundControls";
import FrameControls from "./canvas/FrameControls";
import FramePreview from "./canvas/FramePreview";
import { toPng } from "html-to-image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, buttonVariants } from "./ui/button";

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

  const { type } = use<{ type: DeviceType }>(
    params as unknown as Usable<{ type: DeviceType }>,
  );

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
  const [deviceType, setDeviceType] = useState<DeviceType>(type);
  const [frameSize, setFrameSize] = useState(deviceType == "basic" ? 200 : 300);

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

  const controlsPannel = () => {
    return (
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

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="mt-4 rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          Download Image
        </button>
      </div>
    );
  };

  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      {/* Preview Area - Left Side */}
      <div className="flex w-full items-center justify-center overflow-hidden bg-gray-50 p-2 md:w-3/4 md:p-0">
        <div
          id="canvas-content"
          className="relative aspect-square w-[600px] border-2 border-gray-300 shadow-lg"
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
      </div>

      {/* Controls Panel - Right Side */}
      <div className="hidden overflow-y-auto bg-background p-4 md:block md:w-1/4">
        {controlsPannel()}
      </div>

      {/* Drawer */}
      <div className="block md:hidden">
        {/* this the real code */}
        <Drawer>
          <DrawerTrigger
            className={` ${buttonVariants({ variant: "default" })} absolute bottom-4 left-1/2 z-50 -translate-x-1/2 transform rounded bg-blue-600 px-4 py-2 text-white shadow-lg`}
          >
            Open
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
              <div className="h- h-[70vh] overflow-y-scroll">
                {controlsPannel()}
              </div>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default InstaCanvas;

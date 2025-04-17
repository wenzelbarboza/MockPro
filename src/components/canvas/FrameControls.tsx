"use client";

import React from "react";
import { type DeviceType } from "../InstaCanvas";
import { redirect } from "next/navigation";

interface FrameControlsProps {
  frameColor: string;
  setFrameColor: (color: string) => void;
  frameThickness: number;
  setFrameThickness: (thickness: number) => void;
  frameRotation: number;
  setFrameRotation: (rotation: number) => void;
  frameSize: number;
  setFrameSize: (size: number) => void;
  frameTiltX: number;
  setFrameTiltX: (tilt: number) => void;
  frameTiltY: number;
  setFrameTiltY: (tilt: number) => void;
  deviceType: DeviceType;
  setDeviceType: (type: DeviceType) => void;
}

const FrameControls: React.FC<FrameControlsProps> = ({
  frameColor,
  setFrameColor,
  frameThickness,
  setFrameThickness,
  frameRotation,
  setFrameRotation,
  frameSize,
  setFrameSize,

  frameTiltX,
  setFrameTiltX,
  frameTiltY,
  setFrameTiltY,
  deviceType,
  setDeviceType,
}) => {
  const handleDeviceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDeviceType = e.target.value as DeviceType;
    setDeviceType(newDeviceType);
    if (newDeviceType === "basic") {
      setFrameSize(200);
    } else if (newDeviceType === "iphone15") {
      setFrameSize(300);
    }
    redirect(`/frame/${newDeviceType}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Frame Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <label className="w-24 text-sm">Device:</label>
            <select
              value={deviceType}
              onChange={handleDeviceTypeChange}
              className="flex-1 rounded border border-gray-300 p-2"
            >
              <option value="basic">Basic Frame</option>
              <option value="qrcode">Qr Generator</option>
              <option value="iphone15">iPhone 15</option>
              <option value="youtube">Youtube</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="w-24 text-sm">Color:</label>
            <input
              type="color"
              value={frameColor}
              onChange={(e) => setFrameColor(e.target.value)}
              className="h-8 w-8 cursor-pointer rounded border border-gray-300"
            />
            <span className="text-sm">{frameColor}</span>
          </div>

          {deviceType === "basic" && (
            <div className="flex items-center gap-2">
              <label className="w-24 text-sm">Thickness:</label>
              <input
                type="range"
                min="1"
                max="50"
                value={frameThickness}
                onChange={(e) => setFrameThickness(Number(e.target.value))}
                className="flex-1"
              />
              <span className="w-12 text-sm">{frameThickness}px</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <label className="w-24 text-sm">Rotation:</label>
            <input
              type="range"
              min="0"
              max="360"
              value={frameRotation}
              onChange={(e) => setFrameRotation(Number(e.target.value))}
              className="flex-1"
            />
            <span className="w-12 text-sm">{frameRotation}°</span>
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24 text-sm">Size:</label>
            <input
              type="range"
              min={deviceType === "iphone15" ? 200 : 100}
              max={deviceType === "iphone15" ? 800 : 600}
              value={frameSize}
              onChange={(e) => setFrameSize(Number(e.target.value))}
              className="flex-1"
            />
            <span className="w-12 text-sm">{frameSize}px</span>
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24 text-sm">Tilt X:</label>
            <input
              type="range"
              min="-45"
              max="45"
              value={frameTiltX ?? 0}
              onChange={(e) => setFrameTiltX?.(Number(e.target.value))}
              className="flex-1"
            />
            <span className="w-12 text-sm">{frameTiltX ?? 0}°</span>
          </div>

          <div className="flex items-center gap-2">
            <label className="w-24 text-sm">Tilt Y:</label>
            <input
              type="range"
              min="-45"
              max="45"
              value={frameTiltY ?? 0}
              onChange={(e) => setFrameTiltY?.(Number(e.target.value))}
              className="flex-1"
            />
            <span className="w-12 text-sm">{frameTiltY ?? 0}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameControls;

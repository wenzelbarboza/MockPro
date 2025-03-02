"use client";

import React from "react";

type DeviceType = "basic" | "iphone15";

interface FramePreviewProps {
  frameColor: string;
  frameThickness: number;
  frameRotation: number;
  frameSize: number;
  frameTiltX?: number;
  frameTiltY?: number;
  deviceType: DeviceType;
  children?: React.ReactNode;
  onUploadClick?: () => void;
}

const FramePreview: React.FC<FramePreviewProps> = ({
  frameColor,
  frameThickness,
  frameRotation,
  frameSize,
  frameTiltX = 0,
  frameTiltY = 0,
  deviceType = "basic",
  children,
  onUploadClick,
}) => {
  const renderDeviceFrame = () => {
    const handleUploadClick = (e: React.MouseEvent) => {
      e.preventDefault();
      onUploadClick?.();
    };

    const uploadPlaceholder = (
      <div
        className="flex h-full w-full cursor-pointer flex-col items-center justify-center bg-zinc-800/10 transition-colors hover:bg-zinc-800/20"
        onClick={handleUploadClick}
      >
        <svg
          className="h-12 w-12 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="mt-2 text-sm text-zinc-400">
          Click to upload image
        </span>
      </div>
    );

    switch (deviceType) {
      case "iphone15":
        return (
          <div className="flex items-center justify-center">
            <div className="relative h-[600px] w-72 rounded-[45px] border-8 border-zinc-900 shadow-[0_0_2px_2px_rgba(255,255,255,0.1)]" style={{ transform: `scale(${frameSize / 600})` }}>
              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-2 z-20 h-[25px] w-[90px] -translate-x-1/2 transform rounded-full bg-zinc-900"></div>

              <div className="pointer-events-none absolute -inset-[1px] rounded-[37px] border-[3px] border-zinc-700 border-opacity-40"></div>

              {/* Screen Content */}
              <div className="relative h-full w-full overflow-hidden rounded-[37px] bg-zinc-900/10">
                <div className="absolute inset-[-3px] overflow-hidden rounded-[37px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-[calc(100%_+_6px)] w-full">
                      {children ?? uploadPlaceholder}
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 h-24 w-12 -translate-x-1/2 -translate-y-1/2 bg-zinc-600 blur-[80px]"></div>
              </div>

              {/* Left Side Buttons */}
              {/* Silent Switch */}
              <div className="absolute left-[-12px] top-28 h-8 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>
              {/* Volume Up */}
              <div className="absolute left-[-12px] top-44 h-12 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>
              {/* Volume Down */}
              <div className="absolute left-[-12px] top-60 h-12 w-[6px] rounded-l-md bg-zinc-900 shadow-md"></div>
              {/* Right Side Button (Power) */}
              <div className="absolute right-[-12px] top-44 h-16 w-[6px] rounded-r-md bg-zinc-900 shadow-md"></div>
            </div>
          </div>
        );
      default:
        return (
          <div
            className="absolute"
            style={{
              border: `${frameThickness}px solid ${frameColor}`,
              width: `${frameSize}px`,
              height: `${frameSize}px`,
              left: `calc(50% - ${frameSize / 2}px)`,
              top: `calc(50% - ${frameSize / 2}px)`,
              backgroundColor: frameColor,
            }}
          >
            <div className="absolute inset-0 overflow-hidden">
              {children ?? uploadPlaceholder}
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `perspective(1000px) rotateX(${frameTiltX}deg) rotateY(${frameTiltY}deg) rotate(${frameRotation}deg)`,
      }}
    >
      {renderDeviceFrame()}
    </div>
  );
};

export default FramePreview;

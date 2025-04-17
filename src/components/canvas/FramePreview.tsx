"use client";

import React, { type Dispatch, type SetStateAction, useState } from "react";
import type { DeviceType } from "../InstaCanvas";
import getThumbnail from "./getThumbnail";
import { Button } from "../ui/button";

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
  setUploadedImage?: Dispatch<SetStateAction<string | null>>;
  setQrtext: Dispatch<SetStateAction<string>>;
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
  setUploadedImage,
  setQrtext,
}) => {
  const [ytUrl, setYtUrl] = useState("");
  const [qrtextLocal, setQrtextLocal] = useState("");
  const [ytUrlError, setYtUrlError] = useState("");
  // "https://www.youtube.com/watch?v=I2Bgi0Qcdvc"
  const handleYtSubmit = async () => {
    const ytImg = await getThumbnail(ytUrl);
    if (ytImg.success) {
      setUploadedImage?.(ytImg.payload);
    } else {
      setYtUrlError(ytImg.payload);
    }
    console.log("urlis: ", ytImg);
  };

  const handleQrSubmit = () => {
    setQrtext(qrtextLocal);
  };

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

    const ytLinkPlaceholder = (
      <div className="flex h-full w-full items-center justify-center bg-yellow-300">
        <input
          type="text"
          placeholder="paste youtube video text here"
          value={ytUrl}
          onChange={(e) => setYtUrl(e.target.value)}
        />
        <Button onClick={handleYtSubmit}>get thumbnail</Button>
        {ytUrlError && <span className="text-red-500">{ytUrlError}</span>}
      </div>
    );

    const qrTextPlaceholder = (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-yellow-300">
        <input
          type="text"
          placeholder="text for qr code"
          value={qrtextLocal}
          onChange={(e) => setQrtextLocal(e.target.value)}
        />
        <Button onClick={handleQrSubmit}>generat Qr</Button>
        {ytUrlError && <span className="text-red-500">{ytUrlError}</span>}
      </div>
    );

    switch (deviceType) {
      case "iphone15":
        return (
          <div className="flex h-full w-full items-center justify-center">
            <div
              className="relative h-[600px] w-72 rounded-[45px] border-8 border-zinc-900 shadow-[0_0_2px_2px_rgba(255,255,255,0.1)]"
              style={{ transform: `scale(${frameSize / 600})` }}
            >
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
                {/* Only show blur effect when no image is uploaded */}
                {!children && (
                  <div className="absolute left-1/2 top-1/2 h-24 w-12 -translate-x-1/2 -translate-y-1/2 bg-zinc-600 blur-[80px]"></div>
                )}
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
      case "youtube":
        return (
          <div
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
            style={{
              height: `${children ? "auto" : frameSize}px`,
              width: `${children ? "auto" : frameSize}px`,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            <div
              className="h-full w-full overflow-visible"
              style={{
                clipPath: `inset(90px 0 90px 0 round 10px)`,
              }}
            >
              {children ?? ytLinkPlaceholder}
            </div>
          </div>
        );
      case "qrcode":
        return (
          <>
            <div
              className="absolute"
              style={{
                border: `${children ? frameThickness : 0}px solid ${frameColor}`,
                width: `${frameSize}px`,
                height: `${frameSize}px`,
                left: `calc(50% - ${frameSize / 2}px)`,
                top: `calc(50% - ${frameSize / 2}px)`,
                backgroundColor: children ? frameColor : "transparent",
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                {children ?? qrTextPlaceholder}
              </div>
            </div>
          </>
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

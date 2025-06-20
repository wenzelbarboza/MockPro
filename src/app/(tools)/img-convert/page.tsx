"use client";

import React, { useState, useRef } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { toPng, toJpeg, toSvg, toBlob } from "html-to-image";
import { ArrowLeft, Download, Upload, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import DashBoardBtn from "@/components/ui/dashBoardBtn";

type ImageFormat = "png" | "jpeg" | "svg" | "webp";

const ImageConvert = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<ImageFormat>("png");
  const [quality, setQuality] = useState<number>(92);
  const [fileName, setFileName] = useState<string>("converted-image");
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { theme } = useTheme();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Set default filename based on the uploaded file
      const nameWithoutExt =
        file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
      setFileName(nameWithoutExt);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file?.type.startsWith("image/")) {
      const nameWithoutExt =
        file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
      setFileName(nameWithoutExt);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConvert = async () => {
    if (!imageContainerRef.current || !uploadedImage) return;

    setIsConverting(true);

    try {
      let dataUrl: string | Blob;
      const options = { quality: quality / 100 };

      switch (selectedFormat) {
        case "png":
          dataUrl = await toPng(imageContainerRef.current, {
            ...options,
            pixelRatio: 1,
            skipFonts: true,
            canvasWidth:
              imageContainerRef.current.querySelector("img")?.naturalWidth,
            canvasHeight:
              imageContainerRef.current.querySelector("img")?.naturalHeight,
          });
          break;
        case "jpeg":
          dataUrl = await toJpeg(imageContainerRef.current, {
            ...options,
            pixelRatio: 1,
            skipFonts: true,
            canvasWidth:
              imageContainerRef.current.querySelector("img")?.naturalWidth,
            canvasHeight:
              imageContainerRef.current.querySelector("img")?.naturalHeight,
          });
          break;
        case "svg":
          // For SVG, we need a different approach to ensure proper conversion
          const img = imageContainerRef.current.querySelector("img");
          if (img) {
            const width = img.naturalWidth || 800;
            const height = img.naturalHeight || 600;

            // Create SVG with embedded image
            const svgContent = `
              <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
                <image width="100%" height="100%" href="${uploadedImage}" preserveAspectRatio="xMidYMid meet"/>
              </svg>
            `;

            // Convert to data URL
            dataUrl =
              "data:image/svg+xml;charset=utf-8," +
              encodeURIComponent(svgContent.trim());
          } else {
            // Fallback to original method if image element not found
            dataUrl = await toSvg(imageContainerRef.current, {
              ...options,
              pixelRatio: 2,
              skipFonts: true,
              canvasWidth: 800,
              canvasHeight: 600,
              backgroundColor: "white",
            });
          }
          break;
        case "webp":
          dataUrl = (await toBlob(imageContainerRef.current, {
            ...options,
            pixelRatio: 1,
            skipFonts: true,
            type: "image/webp",
            canvasWidth:
              imageContainerRef.current.querySelector("img")?.naturalWidth,
            canvasHeight:
              imageContainerRef.current.querySelector("img")?.naturalHeight,
          }))!;
          break;
        default:
          dataUrl = await toPng(imageContainerRef.current, options);
      }

      // Create download link
      const link = document.createElement("a");

      if (dataUrl instanceof Blob) {
        link.href = URL.createObjectURL(dataUrl);
      } else {
        link.href = dataUrl;
      }

      link.download = `${fileName}.${selectedFormat === "jpeg" ? "jpg" : selectedFormat}`;
      link.click();

      // Clean up
      if (dataUrl instanceof Blob) {
        URL.revokeObjectURL(link.href);
      }
    } catch (error) {
      console.error("Error converting image:", error);
    } finally {
      setIsConverting(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 dark:from-gray-900 dark:to-gray-800 md:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        {/* <div className="mb-8 flex items-center justify-between">
          <Link href="/main">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              <span>Back to Dashboard</span>
            </Button>
          </Link>
          <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            Image Converter
          </h1>
          <div className="w-[100px]"></div> 
        </div> */}

        <div className="mt-14 grid gap-8 md:grid-cols-[1fr_300px]">
          {/* Main Content - Left Side */}
          <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
            {/* Image Preview Area */}
            <div
              className={`relative mb-6 flex min-h-[300px] items-center justify-center rounded-lg border-2 border-dashed p-4 transition-colors ${isDragging ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" : "border-gray-300 dark:border-gray-600"}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {uploadedImage ? (
                <div
                  ref={imageContainerRef}
                  className="relative inline-block"
                  style={{ background: "transparent" }}
                >
                  {selectedFormat === "svg" ? (
                    <div className="rounded-md bg-white p-2 dark:bg-gray-800">
                      <img
                        src={uploadedImage}
                        alt="Uploaded"
                        className="block"
                        style={{
                          maxWidth: "100%",
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    </div>
                  ) : (
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="block"
                      style={{ maxWidth: "100%" }}
                    />
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  <ImageIcon size={64} className="mb-4 text-gray-400" />
                  <h3 className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-300">
                    Drag & Drop your image here
                  </h3>
                  <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    or click to browse files
                  </p>
                  <Button
                    onClick={handleUploadClick}
                    className="flex items-center gap-2"
                  >
                    <Upload size={16} />
                    Upload Image
                  </Button>
                </div>
              )}
            </div>

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />

            {/* Action Buttons */}
            {uploadedImage && (
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Button
                  onClick={handleUploadClick}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Upload size={16} />
                  Change Image
                </Button>
                <Button
                  onClick={handleConvert}
                  disabled={isConverting || !uploadedImage}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  {isConverting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Converting...
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      Download {selectedFormat.toUpperCase()}
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          {/* Controls Panel - Right Side */}
          <div className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h2 className="mb-6 text-xl font-semibold text-gray-800 dark:text-white">
              Conversion Options
            </h2>

            {/* Format Selection */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Output Format
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(["png", "jpeg", "svg", "webp"] as ImageFormat[]).map(
                  (format) => (
                    <button
                      key={format}
                      onClick={() => setSelectedFormat(format)}
                      className={`rounded-md border px-4 py-2 text-sm transition-colors ${selectedFormat === format ? "border-blue-500 bg-blue-50 text-blue-600" : "border-gray-300 hover:bg-gray-50"}`}
                    >
                      {format.toUpperCase()}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Quality Slider (not applicable for SVG) */}
            {selectedFormat !== "svg" && (
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quality: {quality}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                />
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>Lower Size</span>
                  <span>Higher Quality</span>
                </div>
              </div>
            )}

            {/* Filename */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Filename
              </label>
              <div className="flex rounded-md">
                <input
                  type="text"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="Enter filename"
                />
                <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  .{selectedFormat === "jpeg" ? "jpg" : selectedFormat}
                </span>
              </div>
            </div>

            {/* Format Information */}
            <div className="rounded-md bg-gray-50 p-4 dark:bg-gray-800">
              <h3 className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                About {selectedFormat.toUpperCase()}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {selectedFormat === "png" &&
                  "PNG format supports transparency and is ideal for images with sharp details and text."}
                {selectedFormat === "jpeg" &&
                  "JPEG format is best for photographs and complex images with many colors. It doesn't support transparency."}
                {selectedFormat === "svg" &&
                  "SVG is a vector format that scales without losing quality. Best for logos, icons, and simple illustrations."}
                {selectedFormat === "webp" &&
                  "WebP offers superior compression and quality characteristics compared to PNG or JPEG, resulting in smaller file sizes."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <DashBoardBtn />
    </div>
  );
};

export default ImageConvert;

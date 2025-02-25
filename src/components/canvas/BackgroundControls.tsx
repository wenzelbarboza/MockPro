"use client";

import React from "react";

type BackgroundType = "solid" | "linear-gradient" | "radial-gradient";

interface GradientStop {
  offset: number;
  color: string;
}

interface BackgroundControlsProps {
  backgroundType: BackgroundType;
  setBackgroundType: (type: BackgroundType) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  gradientStops: GradientStop[];
  setGradientStops: (stops: GradientStop[]) => void;
  gradientAngle: number;
  setGradientAngle: (angle: number) => void;
}

const BackgroundControls: React.FC<BackgroundControlsProps> = ({
  backgroundType,
  setBackgroundType,
  backgroundColor,
  setBackgroundColor,
  gradientStops,
  setGradientStops,
  gradientAngle,
  setGradientAngle,
}) => {
  return (
    <>
      {/* Magic Gradients */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Magic Gradients</h3>
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(45);
              setGradientStops([
                { offset: 0, color: "#FF6B6B" },
                { offset: 0.5, color: "#4ECDC4" },
                { offset: 1, color: "#45B7D1" },
              ]);
            }}
            className="aspect-square rounded-lg bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#45B7D1] shadow-sm transition-transform hover:scale-105"
            title="Sunset Breeze"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(135);
              setGradientStops([
                { offset: 0, color: "#A8E6CF" },
                { offset: 0.5, color: "#DCEDC1" },
                { offset: 1, color: "#FFD3B6" },
              ]);
            }}
            className="aspect-square rounded-lg bg-gradient-to-bl from-[#A8E6CF] via-[#DCEDC1] to-[#FFD3B6] shadow-sm transition-transform hover:scale-105"
            title="Spring Morning"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(90);
              setGradientStops([
                { offset: 0, color: "#FEE140" },
                { offset: 1, color: "#FA709A" },
              ]);
            }}
            className="aspect-square rounded-lg bg-gradient-to-r from-[#FEE140] to-[#FA709A] shadow-sm transition-transform hover:scale-105"
            title="Warm Sunset"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(45);
              setGradientStops([
                { offset: 0, color: "#8EC5FC" },
                { offset: 1, color: "#E0C3FC" },
              ]);
            }}
            className="aspect-square rounded-lg bg-gradient-to-br from-[#8EC5FC] to-[#E0C3FC] shadow-sm transition-transform hover:scale-105"
            title="Lavender Sky"
          />
        </div>
      </div>

      {/* Solid Color */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Solid Color</h3>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => {
              setBackgroundType("solid");
              setBackgroundColor(e.target.value);
            }}
            className="h-8 w-8 cursor-pointer rounded border border-gray-300"
          />
          <span className="text-sm">{backgroundColor}</span>
        </div>
      </div>

      {/* Mesh Gradients */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Mesh Gradients</h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#D8B4FE" },
                { offset: 0.6, color: "#818CF8" },
                { offset: 1, color: "#38BDF8" },
              ]);
            }}
            className="aspect-square rounded-lg bg-[radial-gradient(circle_at_30%_40%,_#D8B4FE_0%,_#818CF8_60%,_#38BDF8_100%)] shadow-sm transition-transform hover:scale-105"
            title="Purple Haze"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#FDE68A" },
                { offset: 0.6, color: "#F472B6" },
                { offset: 1, color: "#7C3AED" },
              ]);
            }}
            className="aspect-square rounded-lg bg-[radial-gradient(circle_at_70%_60%,_#FDE68A_0%,_#F472B6_60%,_#7C3AED_100%)] shadow-sm transition-transform hover:scale-105"
            title="Sunset Dream"
          />
        </div>
      </div>
    </>
  );
};

export default BackgroundControls;
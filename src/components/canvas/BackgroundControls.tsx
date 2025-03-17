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
  setBackgroundType,
  backgroundColor,
  setBackgroundColor,
  setGradientStops,
  setGradientAngle,
}) => {
  const getGradientStyle = (stops: GradientStop[], angle = 0) => {
    const gradientColors = stops
      .map((stop) => `${stop.color} ${stop.offset * 100}%`)
      .join(", ");
    return `linear-gradient(${angle}deg, ${gradientColors})`;
  };

  const getRadialGradientStyle = (stops: GradientStop[]) => {
    const gradientColors = stops
      .map((stop) => `${stop.color} ${stop.offset * 100}%`)
      .join(", ");
    return `radial-gradient(circle at center, ${gradientColors})`;
  };

  return (
    <>
      {/* Magic Gradients */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Magic Gradients</h3>
        <div className="grid grid-cols-5 gap-2">
          {/* Original gradients */}
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#2E1437" },
                { offset: 0.4, color: "#1C0F26" },
                { offset: 0.6, color: "#150C1E" },
                { offset: 1, color: "#0D0912" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getRadialGradientStyle([
                { offset: 0, color: "#2E1437" },
                { offset: 0.4, color: "#1C0F26" },
                { offset: 0.6, color: "#150C1E" },
                { offset: 1, color: "#0D0912" },
              ]),
            }}
            title="Dark Nebula"
          />
          {/* New gradients */}
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#1A1A2E" },
                { offset: 0.3, color: "#16213E" },
                { offset: 0.7, color: "#0F3460" },
                { offset: 1, color: "#533483" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getRadialGradientStyle([
                { offset: 0, color: "#1A1A2E" },
                { offset: 0.3, color: "#16213E" },
                { offset: 0.7, color: "#0F3460" },
                { offset: 1, color: "#533483" },
              ]),
            }}
            title="Cosmic Vortex"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#0B0B0F" },
                { offset: 0.4, color: "#1B1B2F" },
                { offset: 0.6, color: "#272741" },
                { offset: 0.8, color: "#2C3E50" },
                { offset: 1, color: "#2E5090" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getRadialGradientStyle([
                { offset: 0, color: "#0B0B0F" },
                { offset: 0.4, color: "#1B1B2F" },
                { offset: 0.6, color: "#272741" },
                { offset: 0.8, color: "#2C3E50" },
                { offset: 1, color: "#2E5090" },
              ]),
            }}
            title="Deep Space Portal"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(45);
              setGradientStops([
                { offset: 0, color: "#434343" },
                { offset: 1, color: "#000000" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#434343" },
                  { offset: 1, color: "#000000" },
                ],
                45,
              ),
            }}
            title="Dark Slate"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(135);
              setGradientStops([
                { offset: 0, color: "#16222A" },
                { offset: 1, color: "#3A6073" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#16222A" },
                  { offset: 1, color: "#3A6073" },
                ],
                135,
              ),
            }}
            title="Steel"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(45);
              setGradientStops([
                { offset: 0, color: "#000000" },
                { offset: 0.5, color: "#434343" },
                { offset: 1, color: "#000000" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#000000" },
                  { offset: 0.5, color: "#434343" },
                  { offset: 1, color: "#000000" },
                ],
                45,
              ),
            }}
            title="Dark Matter"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(90);
              setGradientStops([
                { offset: 0, color: "#1F1C2C" },
                { offset: 0.5, color: "#928DAB" },
                { offset: 1, color: "#1F1C2C" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#1F1C2C" },
                  { offset: 0.5, color: "#928DAB" },
                  { offset: 1, color: "#1F1C2C" },
                ],
                90,
              ),
            }}
            title="Dark Mist"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(135);
              setGradientStops([
                { offset: 0, color: "#141E30" },
                { offset: 0.5, color: "#243B55" },
                { offset: 1, color: "#141E30" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#141E30" },
                  { offset: 0.5, color: "#243B55" },
                  { offset: 1, color: "#141E30" },
                ],
                135,
              ),
            }}
            title="Royal Navy"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(45);
              setGradientStops([
                { offset: 0, color: "#0F0C29" },
                { offset: 0.5, color: "#302B63" },
                { offset: 1, color: "#24243E" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#0F0C29" },
                  { offset: 0.5, color: "#302B63" },
                  { offset: 1, color: "#24243E" },
                ],
                45,
              ),
            }}
            title="Deep Space"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(90);
              setGradientStops([
                { offset: 0, color: "#232526" },
                { offset: 1, color: "#414345" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#232526" },
                  { offset: 1, color: "#414345" },
                ],
                90,
              ),
            }}
            title="Midnight"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(135);
              setGradientStops([
                { offset: 0, color: "#2C3E50" },
                { offset: 1, color: "#3498DB" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#2C3E50" },
                  { offset: 1, color: "#3498DB" },
                ],
                135,
              ),
            }}
            title="Royal Blue"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(45);
              setGradientStops([
                { offset: 0, color: "#000000" },
                { offset: 0.5, color: "#434343" },
                { offset: 1, color: "#000000" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#000000" },
                  { offset: 0.5, color: "#434343" },
                  { offset: 1, color: "#000000" },
                ],
                45,
              ),
            }}
            title="Dark Matter"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(90);
              setGradientStops([
                { offset: 0, color: "#1F1C2C" },
                { offset: 0.5, color: "#928DAB" },
                { offset: 1, color: "#1F1C2C" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#1F1C2C" },
                  { offset: 0.5, color: "#928DAB" },
                  { offset: 1, color: "#1F1C2C" },
                ],
                90,
              ),
            }}
            title="Dark Mist"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(135);
              setGradientStops([
                { offset: 0, color: "#141E30" },
                { offset: 0.5, color: "#243B55" },
                { offset: 1, color: "#141E30" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#141E30" },
                  { offset: 0.5, color: "#243B55" },
                  { offset: 1, color: "#141E30" },
                ],
                135,
              ),
            }}
            title="Royal Navy"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(45);
              setGradientStops([
                { offset: 0, color: "#0F0C29" },
                { offset: 0.5, color: "#302B63" },
                { offset: 1, color: "#24243E" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#0F0C29" },
                  { offset: 0.5, color: "#302B63" },
                  { offset: 1, color: "#24243E" },
                ],
                45,
              ),
            }}
            title="Deep Space"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(90);
              setGradientStops([
                { offset: 0, color: "#232526" },
                { offset: 1, color: "#414345" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#232526" },
                  { offset: 1, color: "#414345" },
                ],
                90,
              ),
            }}
            title="Midnight"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(135);
              setGradientStops([
                { offset: 0, color: "#2C3E50" },
                { offset: 1, color: "#3498DB" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#2C3E50" },
                  { offset: 1, color: "#3498DB" },
                ],
                135,
              ),
            }}
            title="Royal Blue"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(120);
              setGradientStops([
                { offset: 0, color: "#FF416C" },
                { offset: 1, color: "#FF4B2B" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#FF416C" },
                  { offset: 1, color: "#FF4B2B" },
                ],
                120,
              ),
            }}
            title="Sunset Fire"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(60);
              setGradientStops([
                { offset: 0, color: "#8A2387" },
                { offset: 0.5, color: "#E94057" },
                { offset: 1, color: "#F27121" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#8A2387" },
                  { offset: 0.5, color: "#E94057" },
                  { offset: 1, color: "#F27121" },
                ],
                60,
              ),
            }}
            title="Vibrant Fusion"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(150);
              setGradientStops([
                { offset: 0, color: "#00C9FF" },
                { offset: 1, color: "#92FE9D" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#00C9FF" },
                  { offset: 1, color: "#92FE9D" },
                ],
                150,
              ),
            }}
            title="Aqua Splash"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#5D4157" },
                { offset: 0.5, color: "#A8CABA" },
                { offset: 1, color: "#5D4157" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getRadialGradientStyle([
                { offset: 0, color: "#5D4157" },
                { offset: 0.5, color: "#A8CABA" },
                { offset: 1, color: "#5D4157" },
              ]),
            }}
            title="Mystic Haze"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#3A1C71" },
                { offset: 0.3, color: "#D76D77" },
                { offset: 1, color: "#FFAF7B" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getRadialGradientStyle([
                { offset: 0, color: "#3A1C71" },
                { offset: 0.3, color: "#D76D77" },
                { offset: 1, color: "#FFAF7B" },
              ]),
            }}
            title="Twilight Aura"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(135);
              setGradientStops([
                { offset: 0, color: "#6441A5" },
                { offset: 1, color: "#2a0845" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#6441A5" },
                  { offset: 1, color: "#2a0845" },
                ],
                135,
              ),
            }}
            title="Deep Violet"
          />
          <button
            onClick={() => {
              setBackgroundType("linear-gradient");
              setGradientAngle(90);
              setGradientStops([
                { offset: 0, color: "#1D976C" },
                { offset: 1, color: "#93F9B9" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#1D976C" },
                  { offset: 1, color: "#93F9B9" },
                ],
                90,
              ),
            }}
            title="Emerald Flow"
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

      {/* Modern Mesh Gradients */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Modern Mesh Gradients</h3>
        <div className="grid grid-cols-5 gap-2">
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#FF5F6D" },
                { offset: 1, color: "#FFC371" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background:
                "radial-gradient(circle at top left, #FF5F6D, transparent 70%), radial-gradient(circle at bottom right, #FFC371, transparent 70%), linear-gradient(to bottom right, #FF5F6D, #FFC371)",
            }}
            title="Sunset Mesh"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#4158D0" },
                { offset: 0.5, color: "#C850C0" },
                { offset: 1, color: "#FFCC70" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background:
                "radial-gradient(circle at top left, #4158D0, transparent 70%), radial-gradient(circle at bottom right, #FFCC70, transparent 70%), linear-gradient(to bottom right, #4158D0, #C850C0, #FFCC70)",
            }}
            title="Cosmic Fusion"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#0093E9" },
                { offset: 1, color: "#80D0C7" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #0093E9, transparent 60%), radial-gradient(circle at 70% 70%, #80D0C7, transparent 60%), linear-gradient(to bottom right, #0093E9, #80D0C7)",
            }}
            title="Azure Radiance"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#8EC5FC" },
                { offset: 1, color: "#E0C3FC" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #8EC5FC, transparent 70%), radial-gradient(circle at 80% 80%, #E0C3FC, transparent 70%), linear-gradient(to bottom right, #8EC5FC, #E0C3FC)",
            }}
            title="Lavender Haze"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#00F260" },
                { offset: 1, color: "#0575E6" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background:
                "radial-gradient(circle at 25% 25%, #00F260, transparent 60%), radial-gradient(circle at 75% 75%, #0575E6, transparent 60%), linear-gradient(to bottom right, #00F260, #0575E6)",
            }}
            title="Emerald Flow"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#FA8BFF" },
                { offset: 0.5, color: "#2BD2FF" },
                { offset: 1, color: "#2BFF88" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #FA8BFF, transparent 60%), radial-gradient(circle at 80% 80%, #2BFF88, transparent 60%), radial-gradient(circle at center, #2BD2FF, transparent 60%), linear-gradient(to bottom right, #FA8BFF, #2BD2FF, #2BFF88)",
            }}
            title="Neon Spectrum"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#FF3CAC" },
                { offset: 0.5, color: "#784BA0" },
                { offset: 1, color: "#2B86C5" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #FF3CAC, transparent 60%), radial-gradient(circle at 70% 70%, #2B86C5, transparent 60%), linear-gradient(to bottom right, #FF3CAC, #784BA0, #2B86C5)",
            }}
            title="Purple Haze"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#08AEEA" },
                { offset: 1, color: "#2AF598" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background:
                "radial-gradient(circle at 25% 25%, #08AEEA, transparent 60%), radial-gradient(circle at 75% 75%, #2AF598, transparent 60%), linear-gradient(to bottom right, #08AEEA, #2AF598)",
            }}
            title="Aqua Splash"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#FEE140" },
                { offset: 1, color: "#FA709A" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #FEE140, transparent 60%), radial-gradient(circle at 70% 70%, #FA709A, transparent 60%), linear-gradient(to bottom right, #FEE140, #FA709A)",
            }}
            title="Warm Flame"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#A9C9FF" },
                { offset: 1, color: "#FFBBEC" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #A9C9FF, transparent 70%), radial-gradient(circle at 80% 80%, #FFBBEC, transparent 70%), linear-gradient(to bottom right, #A9C9FF, #FFBBEC)",
            }}
            title="Pastel Dream"
          />
        </div>
      </div>
    </>
  );
};

export default BackgroundControls;

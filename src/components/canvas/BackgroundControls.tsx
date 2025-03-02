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
                { offset: 0, color: "#4A00E0" },
                { offset: 1, color: "#8E2DE2" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#4A00E0" },
                  { offset: 1, color: "#8E2DE2" },
                ],
                45,
              ),
            }}
            title="Dark Purple"
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
              setGradientAngle(45);
              setGradientStops([
                { offset: 0, color: "#0F2027" },
                { offset: 0.5, color: "#203A43" },
                { offset: 1, color: "#2C5364" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#0F2027" },
                  { offset: 0.5, color: "#203A43" },
                  { offset: 1, color: "#2C5364" },
                ],
                135,
              ),
            }}
            title="Deep Ocean"
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
                { offset: 0, color: "#4A00E0" },
                { offset: 1, color: "#8E2DE2" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getGradientStyle(
                [
                  { offset: 0, color: "#4A00E0" },
                  { offset: 1, color: "#8E2DE2" },
                ],
                45,
              ),
            }}
            title="Dark Purple"
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
                { offset: 0, color: "#000000" },
                { offset: 0.6, color: "#434343" },
                { offset: 1, color: "#000000" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getRadialGradientStyle([
                { offset: 0, color: "#000000" },
                { offset: 0.6, color: "#434343" },
                { offset: 1, color: "#000000" },
              ]),
            }}
            title="Dark Matter"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#1F1C2C" },
                { offset: 0.6, color: "#928DAB" },
                { offset: 1, color: "#1F1C2C" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getRadialGradientStyle([
                { offset: 0, color: "#1F1C2C" },
                { offset: 0.6, color: "#928DAB" },
                { offset: 1, color: "#1F1C2C" },
              ]),
            }}
            title="Dark Mist"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#141E30" },
                { offset: 0.6, color: "#243B55" },
                { offset: 1, color: "#141E30" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getRadialGradientStyle([
                { offset: 0, color: "#141E30" },
                { offset: 0.6, color: "#243B55" },
                { offset: 1, color: "#141E30" },
              ]),
            }}
            title="Royal Navy"
          />
          <button
            onClick={() => {
              setBackgroundType("radial-gradient");
              setGradientStops([
                { offset: 0, color: "#0F0C29" },
                { offset: 0.5, color: "#302B63" },
                { offset: 1, color: "#24243E" },
              ]);
            }}
            className="aspect-square rounded-lg shadow-sm transition-transform hover:scale-105"
            style={{
              background: getRadialGradientStyle([
                { offset: 0, color: "#0F0C29" },
                { offset: 0.5, color: "#302B63" },
                { offset: 1, color: "#24243E" },
              ]),
            }}
            title="Deep Space"
          />
        </div>
      </div>
    </>
  );
};

export default BackgroundControls;

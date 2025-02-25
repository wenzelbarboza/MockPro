"use client";

import React from "react";

interface FrameTemplate {
  id: string;
  name: string;
  size: number;
  thickness: number;
  color: string;
}

interface FrameControlsProps {
  frameColor: string;
  setFrameColor: (color: string) => void;
  frameThickness: number;
  setFrameThickness: (thickness: number) => void;
  frameRotation: number;
  setFrameRotation: (rotation: number) => void;
  frameSize: number;
  setFrameSize: (size: number) => void;
  frameTemplate: string | null;
  setFrameTemplate: (templateId: string | null) => void;
}

const frameTemplates: FrameTemplate[] = [
  { id: 'iphone-14', name: 'iPhone 14', size: 400, thickness: 20, color: '#1F2937' },
  { id: 'iphone-14-pro', name: 'iPhone 14 Pro', size: 420, thickness: 22, color: '#111827' },
  { id: 'macbook', name: 'MacBook', size: 500, thickness: 25, color: '#374151' },
  { id: 'ipad', name: 'iPad', size: 450, thickness: 18, color: '#1F2937' },
];

const FrameControls: React.FC<FrameControlsProps> = ({
  frameColor,
  setFrameColor,
  frameThickness,
  setFrameThickness,
  frameRotation,
  setFrameRotation,
  frameSize,
  setFrameSize,
  frameTemplate,
  setFrameTemplate,
}) => {
  const handleFrameTemplateSelect = (templateId: string) => {
    const template = frameTemplates.find(t => t.id === templateId);
    if (template) {
      setFrameTemplate(templateId);
      setFrameSize(template.size);
      setFrameThickness(template.thickness);
      setFrameColor(template.color);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Frame Templates</h3>
        <div className="grid grid-cols-2 gap-2">
          {frameTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleFrameTemplateSelect(template.id)}
              className={`rounded-lg border p-2 transition-colors ${frameTemplate === template.id ? 'border-primary bg-primary/10' : 'border-border hover:bg-accent'}`}
            >
              {template.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Frame Settings</h3>
        <div className="space-y-4">
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
              min="200"
              max="600"
              value={frameSize}
              onChange={(e) => setFrameSize(Number(e.target.value))}
              className="flex-1"
            />
            <span className="w-12 text-sm">{frameSize}px</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameControls;
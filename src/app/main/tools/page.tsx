import ToolCard from "@/components/ToolCard";
import React from "react";

export const metadata = {
  title: "Tools | MockPro",
  description: "",
};

const Tools = () => {
  return (
    <>
      <div className="mb-8 p-6">
        <h1 className="mb-8 text-center text-3xl font-bold">Tools</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <ToolCard />
        </div>
      </div>
    </>
  );
};

export default Tools;

"use client";
import dynamic from "next/dynamic";
import React from "react";

const InstaCanvas = dynamic(() => import("../../../components/InstaCanvas"), {
  ssr: false,
});

const Instagram = () => {
  return (
    <>
      <div className="flex h-svh w-full items-center justify-center">
        <InstaCanvas />
      </div>
    </>
  );
};

export default Instagram;

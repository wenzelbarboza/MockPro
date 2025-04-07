"use client";
import dynamic from "next/dynamic";
import React from "react";
import type { DeviceType } from "../../../../components/InstaCanvas";

const InstaCanvas = dynamic(
  () => import("../../../../components/InstaCanvas"),
  {
    ssr: false,
  },
);

const Instagram = ({ params }: { params: { type: DeviceType } }) => {
  return (
    <>
      <div className="flex h-svh w-full items-center justify-center">
        <InstaCanvas params={params} />
      </div>
    </>
  );
};

export default Instagram;

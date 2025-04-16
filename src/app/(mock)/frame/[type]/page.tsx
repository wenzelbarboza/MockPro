import React from "react";
import type { DeviceType } from "../../../../components/InstaCanvas";
import InstaCanvas from "../../../../components/InstaCanvas";

const Instagram = async ({
  params,
}: {
  params: Promise<{ type: DeviceType }>;
}) => {
  const deviceType = await params;

  return (
    <>
      <div className="flex h-svh w-full items-center justify-center">
        <InstaCanvas params={deviceType} />
      </div>
    </>
  );
};

export default Instagram;

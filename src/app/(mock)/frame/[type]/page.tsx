import type { DeviceType } from "../../../../components/InstaCanvas";
import InstaCanvas from "../../../../components/InstaCanvas";

const Instagram = async ({ params }: { params: Promise<{ type: string }> }) => {
  const deviceType = (await params).type as DeviceType;

  return (
    <div className="flex h-svh w-full items-center justify-center">
      <InstaCanvas params={{ type: deviceType }} />
    </div>
  );
};

export default Instagram;

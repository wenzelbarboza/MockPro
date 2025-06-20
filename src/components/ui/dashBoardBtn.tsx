import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";

const DashBoardBtn = () => {
  return (
    <Link href="/main">
      <Button variant={"ghost"} className="absolute left-4 top-4">
        {/* <Rocket /> */}
        <ArrowLeft size={18} />
        Back to Dashboard
      </Button>
    </Link>
  );
};

export default DashBoardBtn;

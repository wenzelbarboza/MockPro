import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { Rocket } from "lucide-react";

const DashBoardBtn = () => {
  return (
    <Link href="/main">
      <Button className="absolute left-4 top-4">
        <Rocket />
        Dashboard
      </Button>
    </Link>
  );
};

export default DashBoardBtn;

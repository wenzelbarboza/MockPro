import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cards } from "@/lib/cards";

export const metadata = {
  title: "Frames | MockPro",
  description: "",
};

const Frames = () => {
  return (
    <>
      <div className="mb-8 p-6">
        <h1 className="mb-8 text-center text-3xl font-bold">Frames</h1>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Link href={card.link}>
                    <Image
                      src={card.imageSrc || "/placeholder.svg"}
                      alt={card.title}
                      fill={true}
                      objectFit="cover"
                      className="hover:contrast-110 object-cover transition-all duration-300 hover:brightness-75"
                    />
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2 text-xl">{card.title}</CardTitle>
                <p className="text-muted-foreground">{card.content}</p>
              </CardContent>
              <CardFooter>
                {/* <Link href={card.link} className="w-full">
                  <Button className="w-full">View</Button>
                </Link> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Frames;

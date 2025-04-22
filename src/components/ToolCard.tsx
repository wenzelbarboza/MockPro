"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const ToolCard = () => {
  const router = useRouter();

  const cards = [
    {
      title: "image converter",
      link: "/img-convert",
      content: "Convert images to different formats.",
    },
  ];

  const handleNavigate = (link: string) => {
    router.push(link);
  };
  return (
    <>
      {cards.map((card, i) => {
        return (
          <Card
            key={i}
            className="overflow-hidden hover:cursor-pointer"
            onClick={() => handleNavigate(card.link)}
          >
            <CardHeader className="p-0">
              {/* <div className="relative h-48 w-full"> */}
              {/* <Link href={card.link}> */}
              {/* <Image
                src={card.imageSrc || "/placeholder.svg"}
                alt={card.title}
                fill={true}
                objectFit="cover"
                className="hover:contrast-110 object-cover transition-all duration-300 hover:brightness-75"
              /> */}
              {/* </Link> */}
              {/* </div> */}
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
        );
      })}
    </>
  );
};

export default ToolCard;

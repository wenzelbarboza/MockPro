import type React from "react";
import Layout from "../components/Layout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  const cards = [
    {
      imageSrc: "/placeholder.svg?height=200&width=300",
      title: "Frame",
      link: "/frame/basic",
      content:
        "This is a basic frame for your image. You can customize it to your liking.",
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=300",
      title: "iPhone",
      link: "frame/iphone15",
      content: "This is a basic iPhone frame for your image.",
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=300",
      title: "youtube",
      link: "frame/youtube",
      content: "This is a basic youtube frame for your image.",
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=300",
      title: "qrcode",
      link: "frame/qrcode",
      content: "Generate a QR code for your text.",
    },
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="mb-8 text-center text-3xl font-bold">
          Welcome to MockPro
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index}>
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={card.imageSrc || "/placeholder.svg"}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2 text-xl">{card.title}</CardTitle>
                <p className="text-muted-foreground">{card.content}</p>
              </CardContent>
              <CardFooter>
                <Link href={card.link} className="w-full">
                  <Button className="w-full">View</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;

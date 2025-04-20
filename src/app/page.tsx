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
      imageSrc:
        "https://res.cloudinary.com/del6v0im5/image/upload/v1745128242/basic_frame_sgxdgi.png",
      title: "Frame",
      link: "/frame/basic",
      content: "This is a basic frame for your image.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/del6v0im5/image/upload/v1745129403/iphoneImg_2_garjcz.png",
      title: "iPhone",
      link: "frame/iphone15",
      content: "This is a iPhone frame for your image.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/del6v0im5/image/upload/v1745128241/yt_frame_wzcuqb.png",
      title: "youtube",
      link: "frame/youtube",
      content: "This is a youtube frame for your image.",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/del6v0im5/image/upload/v1745128241/qr_fm8rb0.png",
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
    </Layout>
  );
};

export default Home;

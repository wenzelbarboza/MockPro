import type React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import { cards } from "@/lib/cards";

const Home: React.FC = () => {
  return (
    <div className="mb-8 p-6">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Welcome to MockPro
      </h1>
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
      <div>
        <h3 className="mb-4 text-2xl font-medium">Tools</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <ToolCard />
        </div>
      </div>
    </div>
  );
};

export default Home;

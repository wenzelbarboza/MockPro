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
    <div className="bg-grid-pattern min-h-screen px-6 pb-20 pt-10 sm:px-10">
      {/* Hero Section */}
      <div className="relative mb-16 text-center">
        <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <h1 className="text-gradient mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
          MockPro
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          The ultimate platform for creating professional mockups, frames, and
          converting images with ease.
        </p>
      </div>

      <div className="mb-20">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Main Frames</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="glass-card hover-lift hover-glow group overflow-hidden border-none"
            >
              <CardHeader className="p-0">
                <div className="relative h-56 w-full overflow-hidden">
                  <Link href={card.link}>
                    <Image
                      src={card.imageSrc || "/placeholder.svg"}
                      alt={card.title}
                      fill={true}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="font-medium text-white">
                        Click to open &rarr;
                      </span>
                    </div>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-2xl font-bold capitalize">
                  {card.title}
                </CardTitle>
                <p className="leading-relaxed text-muted-foreground">
                  {card.content}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Link
                  href={card.link}
                  className="inline-flex items-center font-semibold text-primary decoration-2 underline-offset-4 hover:underline"
                >
                  Explore Frame
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute right-0 top-0 -z-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
        <h3 className="mb-8 text-3xl font-bold tracking-tight">
          Essential Tools
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ToolCard />
        </div>
      </div>
    </div>
  );
};

export default Home;

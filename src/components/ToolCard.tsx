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

import { ImageIcon, Search, ArrowRight } from "lucide-react";

const ToolCard = () => {
  const router = useRouter();

  const cards = [
    {
      title: "Image Converter",
      link: "/img-convert",
      content: "Convert images to different formats with a single click.",
      icon: <ImageIcon className="h-6 w-6 text-blue-500" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Google Search Mock",
      link: "/google-search",
      content: "Mockup of Google search page for presentations.",
      icon: <Search className="h-6 w-6 text-purple-500" />,
      gradient: "from-purple-500/20 to-pink-500/20",
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
            className="glass-card hover-lift hover-glow group relative cursor-pointer overflow-hidden border-none"
            onClick={() => handleNavigate(card.link)}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50`}
            />
            <CardHeader className="relative p-6 pb-0">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>
            </CardHeader>
            <CardContent className="relative p-6 pt-2">
              <CardTitle className="mb-2 text-xl font-bold">
                {card.title}
              </CardTitle>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {card.content}
              </p>
            </CardContent>
            <CardFooter className="relative px-6 pb-6 pt-0">
              <div className="flex items-center text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Launch Tool <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default ToolCard;

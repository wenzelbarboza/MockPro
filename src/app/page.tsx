"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Smartphone,
  Palette,
  Layers,
  Zap,
  CheckCircle2,
  Github,
  Twitter,
  Upload,
  Sliders,
  Download,
  Mail,
  ChevronRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Components ---

const Navbar = () => (
  <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
    <div className="container mx-auto flex h-16 items-center justify-between px-6">
      <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-purple-600 text-primary-foreground shadow-lg shadow-primary/20">
          <Smartphone size={18} strokeWidth={3} />
        </div>
        MockPro
      </div>
      <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
        <a
          href="#how-it-works"
          className="transition-colors hover:text-foreground"
        >
          How it Works
        </a>
        <a href="#features" className="transition-colors hover:text-foreground">
          Features
        </a>
        <a
          href="#testimonials"
          className="transition-colors hover:text-foreground"
        >
          Reviews
        </a>
      </div>
      <div className="flex items-center gap-4">
        {/* <Link
          href="/login"
          className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:block"
        >
          Log in
        </Link> */}
        <Link href="/main">
          <Button
            size="sm"
            className="rounded-full px-5 font-semibold shadow-md shadow-primary/20"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-48">
      {/* Background Mesh Gradient */}
      <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-[1000px] w-[1000px] rounded-full bg-blue-500/20 opacity-30 mix-blend-screen blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-purple-500/20 opacity-30 mix-blend-screen blur-[120px]"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay brightness-100 contrast-150"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex cursor-default items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md transition-colors hover:bg-background/80"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          New: iPhone 15 Pro Max Frames
          <ChevronRight size={12} className="ml-1 text-muted-foreground" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 text-5xl font-black leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          Turn screenshots into <br className="hidden md:block" />
          <span className="animate-gradient bg-300% bg-gradient-to-r from-primary via-purple-500 to-blue-600 bg-clip-text text-transparent">
            viral mockups.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-12 max-w-3xl text-xl font-light leading-relaxed text-muted-foreground md:text-2xl"
        >
          Stop posting flat images. Instantly wrap your designs in premium
          device frames. The secret weapon for top-tier portfolios and
          marketing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Link href="/main">
            <Button
              size="lg"
              className="h-14 rounded-full px-10 text-lg font-semibold shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40 active:scale-95"
            >
              Start Creating Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center -space-x-4 px-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-muted"
              >
                <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-400"></div>
              </div>
            ))}
            <div className="pl-6 text-sm font-medium text-muted-foreground">
              Loved by 10k+ designers
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Hero Visual */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.4, type: "spring" }}
        className="perspective-1000 container mx-auto mt-20 px-6"
      >
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-black/5 p-2 shadow-2xl ring-1 ring-white/20 backdrop-blur-xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/5 bg-[#0f0f11] shadow-inner">
            {/* UI Mockup - Top Bar */}
            <div className="absolute left-0 right-0 top-0 flex h-14 items-center justify-between border-b border-white/5 bg-white/[0.02] px-6">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex h-8 w-64 items-center justify-center rounded-full bg-white/5">
                <div className="h-2 w-24 rounded-full bg-white/10"></div>
              </div>
              <div className="flex h-8 w-20 items-center justify-center rounded-md bg-primary/20 text-xs font-bold text-primary">
                Export
              </div>
            </div>

            {/* UI Mockup - Main Area */}
            <div className="absolute bottom-0 left-0 right-0 top-14 flex">
              {/* Sidebar */}
              <div className="hidden w-64 border-r border-white/5 p-6 md:block">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="mb-4 h-3 w-20 rounded-full bg-white/10"></div>
                    <div className="h-10 w-full rounded-lg border border-white/5 bg-white/5"></div>
                    <div className="h-10 w-full rounded-lg border border-white/5 bg-transparent"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="mb-4 h-3 w-20 rounded-full bg-white/10"></div>
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-full border border-white/5 bg-gradient-to-br from-white/5 to-white/0"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="relative flex flex-1 items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat p-12 opacity-50">
                {/* Floating Phone */}
                <div className="relative z-10 h-[400px] w-[200px] -rotate-6 transform rounded-[40px] border-[8px] border-zinc-800 bg-black shadow-2xl ring-1 ring-white/20 transition-transform duration-700 ease-out hover:rotate-0">
                  <div className="absolute left-1/2 top-2 z-20 h-6 w-20 -translate-x-1/2 rounded-b-3xl bg-black"></div>
                  <div className="h-full w-full overflow-hidden rounded-[32px] bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                      className="h-full w-full object-cover"
                      alt="Screen"
                    />
                  </div>
                </div>

                {/* Floating Laptop behind */}
                <div className="absolute right-20 top-20 h-[300px] w-[450px] rotate-3 transform rounded-lg border border-white/10 bg-zinc-900 opacity-60 shadow-2xl transition-all duration-700 hover:opacity-100">
                  <div className="relative h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-black/40 backdrop-blur-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SocialProof = () => {
  const companies = [
    "Acme",
    "Capsule",
    "Spherule",
    "GlobalBank",
    "Nietzsche",
    "Vercel",
    "Linear",
    "Stripe",
  ];
  return (
    <section className="overflow-hidden border-y border-border/40 bg-muted/20 py-10">
      <div className="relative flex">
        <div className="animate-infinite-scroll flex gap-16 whitespace-nowrap px-8">
          {[...companies, ...companies].map((name, i) => (
            <div
              key={i}
              className="flex cursor-default items-center gap-2 opacity-40 transition-opacity hover:opacity-100"
            >
              <div className="h-8 w-8 rounded-lg bg-foreground/20"></div>
              <span className="text-xl font-bold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
        <div
          className="animate-infinite-scroll flex gap-16 whitespace-nowrap px-8"
          aria-hidden="true"
        >
          {[...companies, ...companies].map((name, i) => (
            <div
              key={i}
              className="flex cursor-default items-center gap-2 opacity-40 transition-opacity hover:opacity-100"
            >
              <div className="h-8 w-8 rounded-lg bg-foreground/20"></div>
              <span className="text-xl font-bold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-6 w-6 text-blue-500" />,
      title: "1. Upload your shot",
      desc: "Drag and drop your screenshot. We support PNG, JPG, and WebP. We'll automatically detect the aspect ratio.",
      visual: (
        <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-border bg-background">
          <div className="absolute inset-0 bg-blue-500/5 transition-colors group-hover:bg-blue-500/10"></div>
          <div className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-sm transition-transform group-hover:scale-110">
              <Upload size={28} />
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              Drop image here
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Sliders className="h-6 w-6 text-purple-500" />,
      title: "2. Customize the look",
      desc: "Choose from iPhone, Pixel, or Browser frames. Tweak shadows, backgrounds, and rotation to match your brand.",
      visual: (
        <div className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-background p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold">Frame Color</div>
              <div className="flex gap-2">
                <div className="h-4 w-4 rounded-full bg-black ring-1 ring-border ring-offset-1"></div>
                <div className="h-4 w-4 rounded-full bg-zinc-500"></div>
                <div className="h-4 w-4 rounded-full bg-blue-500"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-semibold">Shadow Intensity</div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[70%] rounded-full bg-purple-500"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-semibold">Background</div>
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square rounded bg-gradient-to-tr from-pink-500 to-orange-400"></div>
                <div className="aspect-square rounded border-2 border-primary bg-gradient-to-tr from-blue-500 to-cyan-400"></div>
                <div className="aspect-square rounded bg-zinc-900"></div>
                <div className="flex aspect-square items-center justify-center rounded border border-dashed border-border text-xs">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Download className="h-6 w-6 text-emerald-500" />,
      title: "3. Export & Share",
      desc: "Download high-res PNGs instantly. No watermarks. Perfect for social media, pitch decks, and landing pages.",
      visual: (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-background">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10 mb-4 rounded-lg border border-zinc-100 bg-white p-2 shadow-xl">
            <div className="flex h-20 w-32 items-center justify-center rounded bg-zinc-100 text-xs text-muted-foreground">
              Preview
            </div>
          </div>
          <Button
            size="sm"
            className="bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-600"
          >
            Download 4K .PNG
          </Button>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Workflow that feels like magic.
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple enough for beginners, powerful enough for pros.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col gap-6">
              {/* Connecting Line (Desktop) */}
              {idx !== steps.length - 1 && (
                <div className="absolute left-[calc(50%+2rem)] top-8 hidden w-[calc(100%-4rem)] border-t-2 border-dashed border-border/60 md:block"></div>
              )}

              <div className="h-64 transform rounded-2xl border border-border/60 bg-white p-2 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                {step.visual}
              </div>
              <div className="px-4 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-background shadow-sm">
                  {step.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative overflow-hidden py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Header Card */}
          <div className="flex flex-col justify-center lg:col-span-2 lg:row-span-1">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Batteries included.
            </h2>
            <p className="max-w-md text-lg text-muted-foreground">
              Everything you need to make your screenshots look professional,
              packaged in a delightful interface.
            </p>
          </div>

          {/* Feature 1 */}
          <div className="group relative overflow-hidden rounded-3xl border border-border/40 bg-background/50 p-6 transition-all hover:bg-background hover:shadow-lg hover:shadow-primary/5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Palette size={20} />
            </div>
            <h3 className="mb-2 text-lg font-bold">Adaptive Backgrounds</h3>
            <p className="text-sm text-muted-foreground">
              Auto-extract colors from your image to create matching gradients.
            </p>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl transition-transform group-hover:scale-150"></div>
          </div>

          {/* Feature 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-border/40 bg-background/50 p-6 transition-all hover:bg-background hover:shadow-lg hover:shadow-purple-500/5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600">
              <Layers size={20} />
            </div>
            <h3 className="mb-2 text-lg font-bold">3D Tilt & Shadows</h3>
            <p className="text-sm text-muted-foreground">
              Add depth to your mockups with physically based rendering shadows.
            </p>
          </div>

          {/* Feature 3 - Tall */}
          <div className="group relative overflow-hidden rounded-3xl border border-border/40 bg-black p-8 text-white transition-all hover:shadow-xl lg:col-span-2 lg:row-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black"></div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-auto">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white">
                  <Zap size={24} />
                </div>
                <h3 className="mb-3 text-2xl font-bold">
                  Browser to Export in <br /> 5 seconds.
                </h3>
                <p className="max-w-sm text-lg text-zinc-400">
                  No loading spinners. No complex settings. Just paste, tweak,
                  and download. It's the fastest workflow on the planet.
                </p>
              </div>
              <div className="relative mt-8">
                {/* Speed visual */}
                <div className="h-2 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-[92%] animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                </div>
                <div className="mt-2 flex justify-between font-mono text-xs text-zinc-500">
                  <span>Photoshop: 5m</span>
                  <span className="text-white">MockPro: 5s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="group relative items-center gap-8 overflow-hidden rounded-3xl border border-border/40 bg-background/50 p-8 transition-all hover:bg-background hover:shadow-lg md:flex lg:col-span-2">
            <div className="flex-1">
              <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">
                <CheckCircle2 size={20} className="text-emerald-500" />
                No Watermark
              </h3>
              <p className="text-muted-foreground">
                Your work is yours. We don't plaster our logo on your hard work.
                Even on the free plan.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button variant="outline" className="rounded-full">
                Read our manifesto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="relative overflow-hidden py-24">
    <div className="container mx-auto px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900 p-8 text-center md:p-24">
        {/* Abstract Backgrounds */}
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 mix-blend-screen blur-[130px]"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 mix-blend-screen blur-[130px]"></div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-8 text-4xl font-black tracking-tight text-white md:text-6xl">
            Ready to upgrade your socials?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-zinc-400">
            Join 10,000+ creators who trust MockPro for their daily content.
            Start for free, upgrade when you scale.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/main">
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-10 text-lg font-bold text-black hover:bg-zinc-200"
              >
                Start Creating Free
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-zinc-700 bg-transparent px-10 text-lg font-bold text-white hover:bg-zinc-800"
            >
              View Examples
            </Button>
          </div>
          <p className="mt-8 text-sm font-medium text-zinc-500">
            No credit card required • Unlimited exports • 4K Quality
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border/40 bg-zinc-50 py-20 dark:bg-zinc-950">
    <div className="container mx-auto px-6">
      <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Smartphone size={18} strokeWidth={3} />
            </div>
            MockPro
          </div>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Crafted with care for designers who care about the details. Built in
            San Francisco.
          </p>
          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-black/5"
            >
              <Twitter size={18} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-black/5"
            >
              <Github size={18} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-black/5"
            >
              <Mail size={18} />
            </Button>
          </div>
        </div>

        <div>
          <h4 className="mb-6 font-bold text-foreground">Product</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Templates
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Changelog
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Download
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-bold text-foreground">Resources</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-primary">
                Brand Assets
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-bold text-foreground">Stay Updated</h4>
          <p className="mb-4 text-xs text-muted-foreground">
            Subscribe to get the latest frames and features in your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button size="sm" className="rounded-lg">
              Sub
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-6 border-t border-border/40 pt-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} MockPro Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-foreground">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-foreground">
            Terms of Service
          </a>
          <a href="#" className="hover:text-foreground">
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
        .animate-gradient {
          background-size: 300%;
          animation: animatedgradient 6s ease infinite alternate;
        }
        @keyframes animatedgradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <Navbar />
      <Hero />
      {/* <SocialProof /> */}
      <HowItWorks />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

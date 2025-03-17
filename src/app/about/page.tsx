"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      title: "Beautiful Device Frames",
      description:
        "Choose from a variety of device frames including iPhone 15 and more to showcase your images in style.",
      icon: (
        <svg
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Customizable Backgrounds",
      description:
        "Create solid colors, linear or radial gradients to perfectly complement your images.",
      icon: (
        <svg
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Advanced Frame Controls",
      description:
        "Adjust frame thickness, rotation, size, and tilt to create the perfect presentation for your content.",
      icon: (
        <svg
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "One-Click Download",
      description:
        "Export your creations in high-quality PNG format with a single click, ready to share on social media.",
      icon: (
        <svg
          className="h-10 w-10 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      ),
    },
  ];

  return (
    // <Layout>
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
        ></motion.div>
        <div className="absolute right-20 top-40 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 h-[200px] w-[200px] rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl"
          >
            Create Beautiful Device Mockups
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground"
          >
            MockPro helps you showcase your designs in stunning device frames
            with customizable backgrounds, perfect for portfolios and social
            media.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/frame/basic">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-medium shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Try Basic Frame
              </Button>
            </Link>
            <Link href="/frame/iphone15">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 px-8 py-6 text-lg font-medium shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Try iPhone Frame
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
              Powerful Features
            </h2>
            <div className="mx-auto mb-12 h-1 w-20 rounded-full bg-primary"></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-0 bg-background/50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="mb-4 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 p-4"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="relative overflow-hidden bg-muted py-24">
        <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border bg-gradient-to-br from-background to-muted shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>

              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative h-[400px] w-[250px] rounded-[35px] border-[8px] border-black bg-white shadow-lg">
                  <div className="absolute left-1/2 top-2 h-[20px] w-[80px] -translate-x-1/2 rounded-full bg-black"></div>
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[25px]">
                    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-30"></div>
                    <motion.span
                      className="absolute text-center text-lg font-medium text-white opacity-80"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Your Design Here
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="relative overflow-hidden bg-muted py-24">
        <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid items-center gap-12 md:grid-cols-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                See How It <span className="text-primary">Works</span>
              </h2>
              <div className="mb-6 h-1 w-20 rounded-full bg-primary"></div>
              <p className="mb-8 text-lg text-muted-foreground">
                MockPro makes it easy to create professional device mockups in
                seconds. Upload your image, customize your frame, and download
                the result.
              </p>
              <ul className="space-y-5">
                {[
                  "Choose from multiple device frames",
                  "Customize colors and backgrounds",
                  "Adjust frame size, rotation and tilt",
                  "Download high-quality images",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Link href="/">
                  <Button className="rounded-full px-8 py-6 text-base font-medium shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    Get Started Now
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border bg-gradient-to-br from-background to-muted shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>

              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative h-[400px] w-[250px] rounded-[35px] border-[8px] border-black bg-white shadow-lg">
                  <div className="absolute left-1/2 top-2 h-[20px] w-[80px] -translate-x-1/2 rounded-full bg-black"></div>
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[25px]">
                    <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-30"></div>
                    <motion.span
                      className="absolute text-center text-lg font-medium text-white opacity-80"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Your Design Here
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">
              What Our Users Say
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary"></div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Hear from designers and developers who use MockPro to showcase
              their work
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "UI Designer",
                content:
                  "MockPro has completely transformed how I present my designs to clients. The device frames look incredibly realistic!",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                content:
                  "The customization options are fantastic. I can match our brand colors perfectly and create consistent mockups for all our marketing materials.",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "Emma Rodriguez",
                role: "Freelance Developer",
                content:
                  "As a developer who needs to showcase apps, MockPro saves me so much time. The export quality is excellent for my portfolio.",
                avatar: "/placeholder.svg?height=40&width=40",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-muted/50 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="mr-1 inline-block h-5 w-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mb-6 italic text-muted-foreground">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary/20 font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <motion.div
          className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] bg-repeat opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div
          className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>

        <motion.div
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Ready to Create Your Own Mockups?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg opacity-90">
              Start creating beautiful device mockups for your designs today. No
              account required!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link href="/">
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full px-10 py-7 text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  Start Creating Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    // </Layout>
  );
};

export default About;

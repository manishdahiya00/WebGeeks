"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-7xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Elevate Your Business with Cutting-Edge Web Solutions </span>
          </Badge>

          <div className="max-w-3xl mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Transform Your Online Presence with
              <span className="text-transparent px-2 bg-linear-to-r from-[#D247BF] to-primary bg-clip-text">
                Our Web Services
              </span>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            {`We provide scalable, secure, and high-performance web solutions to help your business grow. From custom development to cloud-based services, we have you covered.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-300 mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
            src={
              theme === "light"
                ? "/web-services-light.webp"
                : "/web-services-dark.webp"
            }
            priority
            alt="web services"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-linear-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

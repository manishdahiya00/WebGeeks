"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Server",
    title: "Cloud Hosting",
    description:
      "Secure and scalable cloud hosting solutions tailored to your business needs.",
  },
  {
    icon: "Code",
    title: "Custom Development",
    description:
      "Get bespoke software solutions designed specifically for your business objectives.",
  },
  {
    icon: "Database",
    title: "Data Management",
    description:
      "Efficient and secure data storage, retrieval, and analysis for better decision-making.",
  },
  {
    icon: "MonitorSmartphone",
    title: "Cross-Platform Support",
    description:
      "Deliver seamless user experiences across all devices and operating systems.",
  },
  {
    icon: "ShieldAlert",
    title: "Cybersecurity",
    description:
      "Robust security measures to protect your business from online threats and data breaches.",
  },
  {
    icon: "Users",
    title: "User-Centric Design",
    description:
      "Intuitive and engaging UI/UX designs that enhance user satisfaction and conversion rates.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Sets Us Apart
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Our comprehensive suite of services ensures your business stays ahead in
        the digital landscape.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

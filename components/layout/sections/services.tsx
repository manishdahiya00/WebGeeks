"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Web Dev",
    description:
      "Crafting modern, responsive, and high-performance websites tailored to your business needs.",
  },
  {
    title: "E-Commerce",
    description:
      "Powerful and scalable e-commerce platforms to help you sell products effortlessly online.",
  },
  {
    title: "SEO & Marketing",
    description:
      "Enhance your online visibility with targeted SEO strategies and digital marketing solutions.",
  },
  {
    title: "Cloud & Security",
    description:
      "Reliable cloud hosting solutions with top-tier security to keep your data and website safe.",
  },
  {
    title: "API & Integrations",
    description:
      "Seamless API integrations to enhance functionality and connect your services effortlessly.",
  },
  {
    title: "Branding & UI",
    description:
      "Visually stunning and user-friendly designs to elevate your brand identity and user experience.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Empowering Your Digital Presence
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We provide cutting-edge web solutions to help your business thrive in
        the digital world.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-[80%] mx-auto">
        {serviceList.map(({ title, description }) => (
          <Card key={title} className="bg-muted/60 dark:bg-card h-full">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

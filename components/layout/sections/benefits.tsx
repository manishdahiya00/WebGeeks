"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "ShieldCheck",
    title: "Reliable Security",
    description:
      "Our platform ensures top-tier security for your data and transactions, giving you peace of mind.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Growth",
    description:
      "Easily scale your business with our flexible solutions designed to adapt as you grow.",
  },
  {
    icon: "Globe",
    title: "Global Reach",
    description:
      "Expand your horizons with our worldwide network, connecting you to more customers and opportunities.",
  },
  {
    icon: "Rocket",
    title: "Faster Performance",
    description:
      "Experience lightning-fast speeds and optimized performance to enhance your productivity.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our innovative solutions are designed to help you succeed by
            providing reliability, scalability, and performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

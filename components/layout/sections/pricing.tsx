"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Basic Web Package",
    popular: 0,
    price: 499,
    description:
      "Ideal for small businesses and individuals looking for a professional online presence.",
    buttonText: "Get Started",
    benefitList: [
      "Custom 5-page website",
      "Mobile responsive design",
      "1 month free support",
      "Fast & secure hosting",
    ],
  },
  {
    title: "Business Web Package",
    popular: 1,
    price: 999,
    description:
      "Perfect for businesses looking for a scalable and dynamic website with advanced features.",
    buttonText: "Choose Plan",
    benefitList: [
      "Custom 10-page website",
      "3 months free support",
      "Speed & security enhancements",
      "Fast & secure hosting",
    ],
  },
  {
    title: "Enterprise Web Solution",
    popular: 0,
    price: 2499,
    description:
      "A comprehensive solution for enterprises needing a high-performance, fully customized web platform.",
    buttonText: "Contact Us",
    benefitList: [
      "Fully custom design & development",
      "Enterprise-grade security",
      "SEO & marketing strategy",
      "Ongoing support & maintenance",
      "Custom integrations & automation",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Our Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Web Development Packages
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose the perfect plan for your business and get a stunning website
        that drives results.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /one-time</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

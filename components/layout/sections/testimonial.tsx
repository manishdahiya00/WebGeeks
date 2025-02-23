"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    name: "Ravi Sharma",
    userName: "Shop Owner",
    comment:
      "The service was excellent! My shop now has a website that attracts more customers.",
    rating: 5.0,
  },
  {
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    name: "Priya Verma",
    userName: "Teacher",
    comment:
      "I needed a simple and effective website for my tuition classes, and this service delivered beyond expectations!",
    rating: 4.8,
  },
  {
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Amit Patel",
    userName: "Restaurant Owner",
    comment:
      "Very satisfied with the website design and easy booking system. It has helped increase our reservations!",
    rating: 4.9,
  },
  {
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Neha Singh",
    userName: "Freelance Artist",
    comment:
      "Great experience! Now I have a beautiful portfolio website to showcase my artwork.",
    rating: 5.0,
  },
  {
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    name: "Vikram Rao",
    userName: "Photographer",
    comment:
      "The website is sleek and easy to navigate. My clients love the gallery section!",
    rating: 5.0,
  },
  {
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Anjali Mehta",
    userName: "Boutique Owner",
    comment:
      "The service was professional and efficient. My boutique's website looks amazing!",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.round(review.rating)
                            ? "fill-primary text-primary"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {review.name.charAt(0)}
                        {review.name.split(" ")[1]?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

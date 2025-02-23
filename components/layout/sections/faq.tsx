"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in web development, mobile app development, and UI/UX design.",
    value: "item-1",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "You can contact us through our form or email us at manishdahiya0944@gmail.com with your project details.",
    value: "item-2",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies such as React, Next.js, Flutter, and Ruby on Rails to build high-quality applications.",
    value: "item-3",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer maintenance and support packages to keep your project running smoothly.",
    value: "item-4",
  },
  {
    question: "How long does a project take to complete?",
    answer:
      "The timeline depends on the complexity and scope of the project. Contact us for an estimate.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQs
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

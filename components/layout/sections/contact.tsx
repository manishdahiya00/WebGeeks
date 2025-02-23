"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "Web Development Inquiry",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:manishdahiya0944@gmail.com?subject=${subject}&body=Hello, my name is ${name}. My email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Get in Touch
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold">
              Let&apos;s Build Something Amazing
            </h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Have a project in mind? Reach out to us and let&apos;s create an
            exceptional web experience together.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex gap-2 mb-2">
                <Building2 />
                <div className="font-bold">Our Office</div>
              </div>
              <div>Sonipat(131001), Haryana, India</div>
            </div>

            <div>
              <div className="flex gap-2 mb-2">
                <Phone />
                <div className="font-bold">Call Us</div>
              </div>
              <div>+91 9050059888</div>
              <div>+91 9817850944</div>
            </div>

            <div>
              <div className="flex gap-2 mb-2">
                <Mail />
                <div className="font-bold">Email Us</div>
              </div>
              <div>manishdahiya0944@gmail.com</div>
            </div>

            <div>
              <div className="flex gap-2 mb-2">
                <Clock />
                <div className="font-bold">Business Hours</div>
              </div>
              <div>
                <div>Monday - Friday</div>
                <div>9AM - 9PM</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl">
            Contact Form
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Web Development Inquiry"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Describe your project..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-4">Send Message</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};

"use client";

import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">YourWebDevAgency</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link
                href="mailto:manishdahiya0944@gmail.com"
                className="opacity-60 hover:opacity-100"
              >
                Email Us
              </Link>
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/in/kuldeep-rana-961659150"
                className="opacity-60 hover:opacity-100"
              >
                LinkedIn
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Services</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Web Development
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Mobile Development
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                UI/UX Design
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQs
              </Link>
            </div>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 Designed and developed by
            <Link
              target="_blank"
              href="https://yourwebdevagency.com"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              WebGeeks
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};

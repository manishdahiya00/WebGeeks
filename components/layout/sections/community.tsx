import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Globe2Icon, XIcon } from "lucide-react";
import Link from "next/link";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <div>
                  <div className="flex justify-center items-center w-full p-2">
                    <Globe className="h-10 w-10" />
                  </div>
                  <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Join Our Network
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Stay connected with us for the latest updates, insights, and
              industry trends. Follow us on our platforms and be a part of our
              journey.
            </CardContent>
            <CardFooter className="flex gap-4">
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                className="hover:opacity-80 transition-all"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="hover:opacity-80 transition-all"
              >
                <GithubIcon />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:opacity-80 transition-all"
              >
                <XIcon />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};

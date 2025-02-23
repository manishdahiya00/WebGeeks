"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl:
      "https://instagram.fixc1-3.fna.fbcdn.net/v/t51.2885-19/475963303_993375199319074_3456134594880657868_n.jpg?_nc_ht=instagram.fixc1-3.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2AG8CcN6ZH1C03sC4yW5ZLNUqlNHwGc-oAOAwhzhoLvHvYWq_wtjftwcjPkYFr8iLwRE1wkyy-xrbv4eORT6SE2T&_nc_ohc=P5sSaSjzNRYQ7kNvgFKcMj_&_nc_gid=b4deea58e0094df8956d2f1ed11fd730&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYAzL0of3jkW4o79fqWb86M3QopXW21MdOlsq8lsmF7ZIw&oe=67C0583D&_nc_sid=7d3ac5",
    firstName: "Manish",
    lastName: "Dahiya",
    positions: ["Software Developer", "Co-Owner"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manish-dahiya-99a174280/",
      },
      {
        name: "Github",
        url: "https://github.com/manishdahiya00",
      },
    ],
  },
  {
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQF1t7E5Fq3P3Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714665606492?e=1746057600&v=beta&t=yMLIW0OcqLjMlmGX8jbcKX_l66DuUyG-kPIoV5IofPk",
    firstName: "Kuldeep",
    lastName: "Rana",
    positions: ["Marketing", "Co-Owner"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kuldeep-rana-961659150",
      },
    ],
  },
];

const socialIcon = (socialName: string) => {
  switch (socialName) {
    case "LinkedIn":
      return <LinkedInIcon />;
    case "Github":
      return <GithubIcon />;
    case "X":
      return <XIcon />;
  }
};

export const TeamSection = () => {
  return (
    <section id="team" className="container lg:w-[50%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Meet Our Founders
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full hover:saturate-100 hover:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}{" "}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                </CardContent>
              ))}
              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

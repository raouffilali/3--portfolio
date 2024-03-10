import SectionTitle from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { getStatistics } from "@/constants/statistics";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import React from "react";

const AboutSection = () => {
  const { statistics } = getStatistics();

  return (
    <section id="about" className="relative">
      <Effect className="-left-32 md:-left-44 -top-12" />
      <article className="relative max-w-[50rem] mx-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6">
        <Effect
          variant="square"
          size="default"
          className="-top-4 -right-5 -z-10 rotate-12"
        />
        <SectionTitle
          title="about me"
          description="a quick introduction about me"
          className="items-start"
        />
        <p className="text-lg">
          Hey there. I'm a{" "}
          <span className="text-primary">
            <b>Software Engineer </b>
          </span>{" "}
          and{" "}
          <span className="text-primary">
            <b>Full-stack Web Developer</b>
          </span>{" "}
          with{" "}
          <span className="text-primary">
            <b>+3 years of experience. </b>
          </span>
          Holding a <b>Bachelor's in Information Systems</b> and a{" "}
          <b>Master's in Data Engineering and Web Technology</b>, I have worked
          on numerous projects for clients, businesses, and startups. Skilled in
          web design and UI/UX, I am passionate about AI and enjoy sharing tech
          knowledge through content creation on social media.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-foreground text-2xl md:text-4xl font-bold">
                +{item.value}
              </p>
              <p className="whitespace-nowrap text-sm md:text-lg">
                {item.label}
              </p>
            </div>
          ))}
          <a
            href="#skills"
            className={cn(
              buttonVariants({ size: "lg" }),
              "col-span-2 md:col-span-1"
            )}
          >
            <span>discover skills</span>
            <ArrowRightCircle className="size-4" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;

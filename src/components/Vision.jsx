import React from "react";
import {
  Lightbulb,
  Target,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

import { portfolioData } from "../mock";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const Vision = () => {
  const { vision } = portfolioData;

  const serifPhrase = "Brighter Future";
  const hasAccent = vision.title.includes(serifPhrase);
  const [titleBefore, titleAfter] = hasAccent
    ? vision.title.split(serifPhrase)
    : [vision.title, ""];

  return (
    <section id="vision" className="section-pad relative overflow-hidden scroll-mt-28 bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] rounded-full bg-teal/5 blur-[150px]"
      />

      <div className="container-xl relative z-10">
        <SectionHeading
          index="06"
          eyebrow="Future Goals"
          title="Vision & Impact"
          description="A mission focused on education, innovation, and empowering the next generation through technology."
        />

        {/* Vision statement — deep teal panel */}
        <Reveal>
          <div className="relative mb-14 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-teal via-teal-deep to-teal-dark p-8 shadow-card-lg sm:p-12 lg:p-16">
            {/* Subtle top light */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
            />
            <div
              aria-hidden
              className="bg-dots pointer-events-none absolute inset-0 opacity-40"
            />

            <div className="relative z-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md">
                <Lightbulb
                  size={26}
                  weight="fill"
                  className="text-accent"
                />
              </div>

              <h3 className="font-display text-2xl font-bold leading-tight text-subtle sm:text-3xl lg:text-4xl">
                {hasAccent ? (
                  <>
                    {titleBefore}
                    <span className="ml-2 whitespace-nowrap">
                      <span className="font-serif-accent font-normal text-white">
                        {serifPhrase}
                      </span>
                    </span>
                    {titleAfter}
                  </>
                ) : (
                  vision.title
                )}
              </h3>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
                {vision.statement}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Goals grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {vision.goals.map((goal, index) => (
            <Reveal key={goal.title} delay={(index % 2) * 0.08}>
              <div className="group card-surface relative h-full overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/20 hover:shadow-hover sm:p-8">
                <div
                  aria-hidden
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                />

                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 text-accent transition-all duration-500 group-hover:bg-teal/25">
                      <Target size={24} weight="bold" />
                    </div>

                    <ArrowUpRightIcon
                      size={22}
                      className="text-slate-500 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>

                  <h4 className="text-lg font-bold leading-snug text-subtle transition-colors duration-300 group-hover:text-accent">
                    {goal.title}
                  </h4>

                  <p className="mt-3.5 text-sm leading-relaxed text-muted">
                    {goal.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
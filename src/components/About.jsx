import React from "react";
import { portfolioData } from "../mock";
import {
  ArrowRightIcon,
  CodeIcon,
  DeviceMobileIcon,
} from "@phosphor-icons/react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="section-pad relative overflow-hidden scroll-mt-28 bg-red-500">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-48 top-24 h-[460px] w-[460px] rounded-full bg-teal/5 blur-[140px]"
      />

      <div className="container-xl relative z-10">
        <SectionHeading
          index="01"
          eyebrow="Get To Know Me"
          title="About Me"
          description="Passionate about creating modern, responsive, and user-friendly web experiences with clean UI and smooth UX."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Portrait — integrated, not boxed */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-[520px]">
              {/* Offset decorative frame */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[28px] border border-accent/10 lg:-inset-4"
              />

              <div className="relative overflow-hidden rounded-[24px] border border-line bg-surface shadow-card">
                <img
                  src="/hero.jpg"
                  alt="Gula Khan Hamdard — Web Developer & Educator"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />

                {/* Cinematic tint */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy via-navy/15 to-transparent"
                />

                {/* Teal glow accent */}
                <div
                  aria-hidden
                  className="absolute -bottom-24 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-teal/25 blur-3xl"
                />

                {/* Floating credential chip */}
                <div className="absolute bottom-5 left-4 right-4 sm:left-5 sm:right-auto">
                  <div className="inline-flex items-center gap-3 rounded-2xl border border-line bg-navy/80 px-4 py-3 shadow-card backdrop-blur-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/20 text-accent">
                      <CodeIcon size={20} weight="fill" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-subtle">
                        Frontend Developer
                      </p>
                      <p className="text-xs text-muted">
                        React / Tailwind / UI / UX
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <Reveal delay={0.12}>
            <div className="card-surface p-7 sm:p-9 lg:p-10">
              <h3 className="font-display text-2xl font-bold leading-snug tracking-tight text-subtle sm:text-3xl">
                Building Beautiful,{" "}
                <span className="font-serif-accent text-gradient-accent">
                  Functional
                </span>{" "}
                Digital Experiences
              </h3>

              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                {about.story}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="group rounded-2xl border border-line-soft bg-navy/50 p-6 transition-all duration-300 hover:border-accent/25 hover:bg-navy/70">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal/15 text-accent transition-colors duration-300 group-hover:bg-teal/25">
                    <CodeIcon size={22} weight="fill" />
                  </div>
                  <h4 className="text-base font-semibold text-subtle">
                    Clean Code
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Writing scalable and maintainable modern frontend code.
                  </p>
                </div>

                <div className="group rounded-2xl border border-line-soft bg-navy/50 p-6 transition-all duration-300 hover:border-accent/25 hover:bg-navy/70">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal/15 text-accent transition-colors duration-300 group-hover:bg-teal/25">
                    <DeviceMobileIcon size={22} weight="fill" />
                  </div>
                  <h4 className="text-base font-semibold text-subtle">
                    Responsive UI
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Creating beautiful layouts for all screen sizes.
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group mt-9 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-accent transition-all duration-300 hover:gap-3"
              >
                <span className="underline decoration-accent/30 underline-offset-8">
                  Explore My Work
                </span>
                <ArrowRightIcon
                  size={18}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
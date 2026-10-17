import React from "react";
import {
  ArrowRight,
  DownloadSimpleIcon,
  GraduationCapIcon,
  CodeIcon,
} from "@phosphor-icons/react";
import { portfolioData } from "../mock";
import RotatingText from "./TextRotation";
import Reveal from "./Reveal";
import cv from "./../assets/Gula Khan Hamdard-Web Developer CV.pdf";

const heroStats = [
  { value: "500+", label: "Students" },
  { value: "2000h+", label: "Teaching" },
  { value: "85%", label: "Placement" },
];

const Hero = () => {
  const { hero } = portfolioData;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-navy pb-24 pt-32 sm:pt-36 lg:pb-32 lg:pt-44">
      {/* Aurora atmosphere */}
      <div className="aurora pointer-events-none absolute inset-0" />

      {/* Faint engineering grid */}
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_25%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-accent/20 to-transparent"
      />

      <div className="container-xl relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          {/* Left */}
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.3em] text-accent/90 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Web Developer / Educator
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-8 font-display text-[3.4rem] font-extrabold leading-[1.02] tracking-tight text-subtle sm:text-7xl lg:text-[5.25rem]">
                Gula Khan
                <br />
                <span className="font-serif-accent text-gradient-accent">
                  Hamdard
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <RotatingText />
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-muted lg:mx-0 sm:text-lg">
                Building digital solutions that empower students, teachers, and
                communities across Afghanistan to access quality education.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <button
                  onClick={scrollToProjects}
                  className="btn-primary group w-full !px-8 !py-4 !text-base sm:w-auto"
                >
                  {hero.cta}
                  <ArrowRight
                    size={20}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

                <a
                  href={cv}
                  download
                  className="btn-ghost group w-full !px-8 !py-4 !text-base sm:w-auto"
                >
                  <span>Download CV</span>
                  <DownloadSimpleIcon
                    size={20}
                    weight="bold"
                    className="text-accent transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>

            {/* Trust strip */}
            <Reveal delay={0.36}>
              <div className="mt-12 flex items-center justify-center gap-6 lg:justify-start lg:gap-9">
                {heroStats.map((stat, i) => (
                  <React.Fragment key={stat.label}>
                    {i > 0 && (
                      <span className="h-10 w-px bg-white/10" aria-hidden />
                    )}
                    <div>
                      <div className="font-display text-2xl font-bold tabular-nums text-subtle sm:text-[1.65rem]">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                        {stat.label}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — portrait */}
          <Reveal delay={0.2} className="relative isolate">
            <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[520px]">
              {/* Soft floor light */}
              <div
                aria-hidden
                className="absolute -bottom-8 left-1/2 z-0 h-10 w-2/3 -translate-x-1/2 rounded-[100%] bg-teal/15 blur-2xl"
              />

              {/* Inner rim ring */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 z-0 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
              />

              {/* Pirouette glow core */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 -z-20 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(15,118,110,0.55),rgba(15,118,110,0.2)_45%,transparent_70%)] blur-2xl"
              />

              {/* Conic rim light */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 -z-10 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 160deg at 50% 50%, rgba(94,234,212,0.14), transparent 28%, rgba(15,118,110,0.22) 52%, transparent 78%, rgba(94,234,212,0.14))",
                }}
              />

              {/* Portrait */}
              <div className="relative z-10 animate-float">
                <img
                  src="/bgremove.png"
                  alt="Portrait of Gula Khan Hamdard"
                  className="h-auto w-full object-contain drop-shadow-[0_30px_90px_rgba(15,118,110,0.35)]"
                />
              </div>

              {/* Floating chips */}
              <div className="absolute -left-3 top-10 z-20 hidden animate-float sm:block [animation-delay:1.2s]">
                <div className="chip !px-4 !py-2.5 shadow-card backdrop-blur-xl">
                  <GraduationCapIcon
                    size={16}
                    weight="fill"
                    className="text-accent"
                  />
                  <span className="text-sm">500+ Students Mentored</span>
                </div>
              </div>

              <div className="absolute -right-3 bottom-16 z-20 hidden animate-float sm:block [animation-delay:2.4s]">
                <div className="chip !px-4 !py-2.5 shadow-card backdrop-blur-xl">
                  <CodeIcon size={16} weight="fill" className="text-accent" />
                  <span className="text-sm">React · Tailwind · JavaScript</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useRef } from "react";
import {
  HourglassIcon,
  UserPlusIcon,
  CertificateIcon,
  BriefcaseIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useSpring } from "framer-motion";
import { portfolioData } from "../mock";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const { teaching } = portfolioData;
const MotionDiv = motion.div;

const impactStats = [
  {
    title: "Students Reached",
    value: teaching.impact.studentsReached,
    icon: UserPlusIcon,
  },
  {
    title: "Courses Created",
    value: teaching.impact.coursesCreated,
    icon: CertificateIcon,
  },
  {
    title: "Teaching Hours",
    value: teaching.impact.hoursOfInstruction,
    icon: HourglassIcon,
  },
  {
    title: "Placement Rate",
    value: teaching.impact.placementRate,
    icon: BriefcaseIcon,
  },
];

const AnimatedStat = ({ value, suffix = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <span ref={ref}>
      {inView && (
        <CountUp
          end={parseInt(value)}
          duration={2}
          suffix={suffix}
          enableScrollSpy
        />
      )}
    </span>
  );
};

const Teaching = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 35%"],
  });
  const timelineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="teaching" className="section-pad relative overflow-hidden scroll-mt-28 bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-16 h-[480px] w-[480px] rounded-full bg-teal/5 blur-[150px]"
      />

      <div className="container-xl relative z-10">
        <SectionHeading
          index="04"
          eyebrow="Education Journey"
          title="Education & Teaching"
          description="Empowering future developers through modern education, mentorship, and practical learning experiences."
        />

        {/* Stats */}
        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <Reveal key={stat.title} delay={index * 0.06}>
                <div className="group card-surface relative overflow-hidden p-7 pt-9 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/20 hover:shadow-hover">
                  <div
                    aria-hidden
                    className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                  />

                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/15 text-accent transition-all duration-500 group-hover:bg-teal/25">
                    <Icon size={24} weight="regular" />
                  </div>

                  <div className="font-display text-4xl font-extrabold tabular-nums text-accent sm:text-[2.75rem]">
                    {stat.title === "Placement Rate" ? (
                      <AnimatedStat value={stat.value} suffix="%" />
                    ) : (
                      <AnimatedStat value={stat.value} />
                    )}
                  </div>

                  <p className="mt-2 text-sm font-medium text-muted transition-colors duration-500 group-hover:text-slate-300">
                    {stat.title}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Experience timeline */}
        <div ref={timelineRef} className="relative">
          {/* Base line */}
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-0 hidden w-px bg-white/8 md:block"
          />
          {/* Animated progress line */}
          <MotionDiv
            style={{ scaleY: timelineScale }}
            aria-hidden
            className="absolute bottom-0 left-4 top-0 hidden w-px origin-top bg-gradient-to-b from-accent via-accent/60 to-teal md:block"
          />

          <div className="space-y-10">
            {teaching.experience.map((exp, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div className="group relative md:pl-16">
                  {/* Timeline node */}
                  <div
                    aria-hidden
                    className="absolute left-0 top-2 hidden h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-surface shadow-glow md:flex"
                  >
                    <span className="h-3 w-3 rounded-full bg-accent/80 shadow-[0_0_12px_rgba(94,234,212,0.7)]" />
                  </div>

                  {/* Card */}
                  <div className="card-surface relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/20 hover:shadow-hover sm:p-8">
                    <div
                      aria-hidden
                      className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-teal/10 blur-2xl transition-transform duration-700 group-hover:scale-150"
                    />

                    {/* Top */}
                    <div className="relative mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="text-xl font-bold leading-snug text-subtle">
                          {exp.role}
                        </h3>
                        <p className="mt-1.5 text-sm font-medium text-accent">
                          {exp.institution}
                        </p>
                      </div>

                      <span className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="relative mb-8 text-sm leading-relaxed text-muted sm:text-base">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="relative">
                      <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Key Achievements
                      </h4>

                      <div className="space-y-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3.5">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-accent">
                              <CheckCircleIcon size={14} weight="fill" />
                            </span>
                            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
import React from "react";
import {
  HourglassIcon,
  UserPlusIcon,
  CertificateIcon,
  BriefcaseIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "../mock";

const { teaching } = portfolioData;

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
    <div ref={ref}>
      {inView && (
        <CountUp end={parseInt(value)} duration={2.5} suffix={suffix} />
      )}
    </div>
  );
};

const Teaching = () => {
  return (
    <section id="teaching" className="relative overflow-hidden py-24 bg-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-200 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-20">
            <span className="uppercase tracking-[0.2em] text-sm text-gray-500 font-semibold">
              Education Journey
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              Education & Teaching
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
              Empowering future developers through modern education, mentorship,
              and practical learning experiences.
            </p>

            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full mt-6"></div>
          </header>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-white
                    border
                    border-gray-200
                    rounded-[2rem]
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition-all
                    duration-500
                  "
                >
                  {/* Hover Background */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gray-900
                      scale-y-0
                      origin-bottom
                      group-hover:scale-y-100
                      transition-transform
                      duration-500
                    "
                  ></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-gray-100
                        flex
                        items-center
                        justify-center
                        mb-6
                        group-hover:bg-white/10
                        transition-all
                        duration-500
                      "
                    >
                      <Icon
                        size={34}
                        weight="regular"
                        className="
                          text-gray-800
                          group-hover:text-white
                          transition-colors
                          duration-500
                        "
                      />
                    </div>

                    {/* Number */}
                    <div
                      className="
                        text-4xl
                        font-black
                        text-gray-900
                        mb-3
                        group-hover:text-white
                        transition-colors
                        duration-500
                      "
                    >
                      {stat.title === "Placement Rate" ? (
                        <AnimatedStat value={stat.value} suffix="%" />
                      ) : (
                        <AnimatedStat value={stat.value} />
                      )}
                    </div>

                    {/* Title */}
                    <p
                      className="
                        text-gray-600
                        font-medium
                        group-hover:text-gray-300
                        transition-colors
                        duration-500
                      "
                    >
                      {stat.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div
              className="
                absolute
                left-4
                top-0
                bottom-0
                w-px
                bg-gray-200
                hidden
                md:block
              "
            ></div>

            <div className="space-y-10">
              {teaching.experience.map((exp, index) => (
                <div
                  key={index}
                  className="
                    relative
                    md:pl-16
                  "
                >
                  {/* Timeline Dot */}
                  <div
                    className="
                      hidden
                      md:flex
                      absolute
                      left-0
                      top-10
                      w-8
                      h-8
                      rounded-full
                      bg-black
                      items-center
                      justify-center
                      shadow-lg
                    "
                  >
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>

                  {/* Card */}
                  <div
                    className="
                      group
                      bg-white
                      border
                      border-gray-200
                      rounded-[2rem]
                      p-8
                      shadow-lg
                      hover:shadow-2xl
                      hover:-translate-y-2
                      transition-all
                      duration-500
                    "
                  >
                    {/* Top */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">
                          {exp.role}
                        </h3>

                        <p className="text-lg font-semibold text-gray-600">
                          {exp.institution}
                        </p>
                      </div>

                      {/* Period */}
                      <div
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-5
                          py-3
                          rounded-2xl
                          bg-gray-100
                          text-gray-700
                          font-medium
                          whitespace-nowrap
                        "
                      >
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
                        Key Achievements
                      </h4>

                      <div className="space-y-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="
                                flex
                                items-start
                                gap-4
                                group/item
                              "
                          >
                            {/* Icon */}
                            <div
                              className="
                                  mt-1
                                  w-8
                                  h-8
                                  rounded-full
                                  bg-gray-100
                                  flex
                                  items-center
                                  justify-center
                                  flex-shrink-0
                                  group-hover/item:bg-black
                                  transition-all
                                "
                            >
                              <ArrowUpRightIcon
                                size={16}
                                className="
                                    text-gray-700
                                    group-hover/item:text-white
                                  "
                              />
                            </div>

                            {/* Text */}
                            <p className="text-gray-600 leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;

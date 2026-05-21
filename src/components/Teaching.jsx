import React from "react";
import {
  HourglassIcon,
  UserPlusIcon,
  CertificateIcon,
  BriefcaseIcon,
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
    color: "text-[#5EEAD4]",
  },
  {
    title: "Courses Created",
    value: teaching.impact.coursesCreated,
    icon: CertificateIcon,
    color: "text-[#14B8A6]",
  },
  {
    title: "Teaching Hours",
    value: teaching.impact.hoursOfInstruction,
    icon: HourglassIcon,
    color: "text-[#5EEAD4]",
  },
  {
    title: "Placement Rate",
    value: teaching.impact.placementRate,
    icon: BriefcaseIcon,
    color: "text-[#14B8A6]",
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
        <CountUp end={parseInt(value)} duration={2.2} suffix={suffix} />
      )}
    </div>
  );
};

const Teaching = () => {
  const { teaching } = portfolioData;

  return (
    <section id="teaching" className="py-20 bg-dot-light bg-[#0B1220]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-text">
              Education & Teaching
            </h2>

            <div className="w-20 h-1 bg-[#0F766E] mx-auto mb-6"></div>

            <p className="text-lg text-muted max-w-2xl mx-auto">
              Empowering the next generation of developers and innovators
            </p>
          </header>

          {/* Impact Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    bg-[#111827]
                    border border-white/5
                    backdrop-blur-md
                    rounded-2xl
                    shadow-lg
                    p-6
                    flex flex-col
                    items-center
                    justify-center
                    text-center
                    transition-all
                    duration-300
                    hover:border-[#14B8A6]/30
                    hover:-translate-y-1
                    hover:shadow-[0_10px_30px_rgba(15,118,110,0.15)]
                  "
                >
                  <Icon
                    size={40}
                    className="
                      text-slate-300
                      mb-4
                      transition-colors
                      duration-300
                      group-hover:text-[#5EEAD4]
                    "
                    weight="thin"
                  />

                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.title === "Placement Rate" ? (
                      <AnimatedStat value={stat.value} suffix="%" />
                    ) : (
                      <AnimatedStat value={stat.value} />
                    )}
                  </div>

                  <div className="text-sm text-muted font-medium">
                    {stat.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Teaching Experience */}
          <div className="space-y-8">
            {teaching.experience.map((exp, index) => (
              <div
                key={index}
                className="
                  bg-[#111827]
                  border border-white/5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  p-8
                  rounded-xl
                  shadow-lg
                  hover:border-[#14B8A6]/20
                "
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text mb-2">
                      {exp.role}
                    </h3>

                    <p className="text-lg text-[#14B8A6] font-semibold mb-2">
                      {exp.institution}
                    </p>
                  </div>

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      bg-[#0F766E]/20
                      text-[#5EEAD4]
                      text-sm
                      font-medium
                      rounded-lg
                    "
                  >
                    {exp.period}
                  </div>
                </div>

                <p className="text-muted mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-3">
                    Key Achievements
                  </h4>

                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#14B8A6] rounded-full mt-2 flex-shrink-0"></div>

                      <p className="text-muted">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;

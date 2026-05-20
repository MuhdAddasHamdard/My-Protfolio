import React from "react";
import {
  HourglassIcon,
  UserPlusIcon,
  CertificateIcon,
  BriefcaseIcon,
} from "@phosphor-icons/react";
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
    color: "text-teal-700",
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
    color: "text-teal-700",
  },
];

const Teaching = () => {
  const { teaching } = portfolioData;

  return (
    <section id="teaching" className="py-20 bg-dot-light bg-[#0B1220] ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold  mb-4">
              Education & Teaching
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                  className="bg-[#111827]
border border-white/5 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition text-center"
                >
                  <Icon
                    size={40}
                    className="text-slate-300 group-hover:text-white transition-colors"
                    weight="thin"
                  />

                  <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                    {stat.value}
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
                className="bg-[#111827] border border-white/5  backdrop-blur-md transition  p-8 rounded-xl shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 ">
                  <div>
                    <h3 className="text-2xl font-bold text-text  mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-teal-700 font-semibold mb-2">
                      {exp.institution}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F766E]/20  text-[#5EEAD4] text-sm font-medium rounded-lg">
                    {exp.period}
                  </div>
                </div>

                <p className="text-muted mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                    Key Achievements
                  </h4>
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
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

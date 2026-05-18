import React from "react";
import {
  HourglassIcon,
  UserPlusIcon,
  CertificateIcon,
  BriefcaseIcon,
} from "@phosphor-icons/react";
import { portfolioData } from "../mock";

const Teaching = () => {
  const { teaching } = portfolioData;
  const { impact } = teaching;
  // console.log(teaching);
  console.log(impact);

  return (
    <section id="teaching" className="py-20 bg-dot-light bg-slate-100 ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold  mb-4">
              Education & Teaching
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering the next generation of developers and innovators
            </p>
          </header>

          {/* Impact Stats */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impact.map((stats) => {
             
              return (
                <>
                  <div className=" bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition text-center">
                    <UserPlusIcon size={40} color="#040102" weight="thin" />
                    <h3 className="text-3xl font-bold text-blue-900 mb-1">
                      {stats.studentsReached}
                    </h3>
                    <h3 className="text-sm text-gray-600 font-medium">
                      Students Reached
                    </h3>
                  </div>
                </>
              );
            })}

            <div className="bg-white rounded-2xl flex flex-col items-center justify-center shadow-lg p-6 80 text-center">
              <CertificateIcon size={40} color="#040102" weight="thin" />
              <div className="text-3xl font-bold text-teal-700 mb-1">
                {teaching.impact.coursesCreated}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Courses Created
              </div>
            </div>
            <div className="   bg-white /60 backdrop-blur-md   rounded-2xl shadow-lg  flex flex-col items-center justify-center p-6 transition hover:bg-white/80  text-center">
              <HourglassIcon size={40} color="#040102" weight="thin" />
              <div className="text-3xl font-bold text-blue-900 mb-1">
                {teaching.impact.hoursOfInstruction}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Teaching Hours
              </div>
            </div>
            <div className="bg-white /60 backdrop-blur-md   rounded-2xl shadow-lg p-6 transition text-center flex flex-col items-center justify-center">
              <BriefcaseIcon size={40} weight="thin" />
              <div className="text-3xl font-bold text-teal-700 mb-1">
                {teaching.impact.placementRate}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Placement Rate
              </div>
            </div>
          </div>

          {/* Teaching Experience */}
          <div className="space-y-8">
            {teaching.experience.map((exp, index) => (
              <div
                key={index}
                className="  bg-white /60 backdrop-blur-md border transition hover:bg-white/80  p-8 rounded-xl shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 ">
                  <div>
                    <h3 className="text-2xl font-bold  mb-2">{exp.role}</h3>
                    <p className="text-lg text-teal-700 font-semibold mb-2">
                      {exp.institution}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-200  text-blue-900 text-sm font-medium rounded-lg">
                    {/* < className="w-4 h-4" /> */}
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                    Key Achievements
                  </h4>
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{achievement}</p>
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

import React from "react";
import { Calendar, Award, Users, BarChart3 } from "lucide-react";
import { portfolioData } from "../mock";

const Teaching = () => {
  const { teaching } = portfolioData;

  return (
    <section
      id="teaching"
      className="py-20 bg-dot-light bg-slate-100 dark:bg-dot-dark dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-gray-400 mb-4">
              Education & Teaching
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Empowering the next generation of developers and innovators
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <iv className="dark:bg-gray-900 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-white/20 dark:border-gray-700/40 rounded-2xl shadow-lg p-6 transition hover:bg-white/80 dark:hover:bg-gray-900/80   text-center">
              <Users className="w-8 h-8 text-blue-900 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-900 mb-1">
                {teaching.impact.studentsReached}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Students Reached
              </div>
            </iv>
            <div className="dark:bg-gray-900  bg-white dark:bg-gray-900/60 backdrop-blur-md border-white/20 dark:border-gray-700/40 rounded-2xl shadow-lg p-6 dark:hover:bg-gray-900 80 text-center">
              <Award className="w-8 h-8 text-teal-700 mx-auto mb-3" />
              <div className="text-3xl font-bold text-teal-700 mb-1">
                {teaching.impact.coursesCreated}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Courses Created
              </div>
            </div>
            <div className="dark:bg-gray-900   bg-white dark:bg-gray-900/60 backdrop-blur-md border-white/20 dark:border-gray-700/40 rounded-2xl shadow-lg  p-6 transition hover:bg-white/80 dark:hover:bg-gray-900/80 text-center">
              <Calendar className="w-8 h-8 text-blue-900 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-900 mb-1">
                {teaching.impact.hoursOfInstruction}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Teaching Hours
              </div>
            </div>
            <div
              className="dark:bg-gray-900    bg-white dark:bg-gray-900/60
  backdrop-blur-md
   border-white/20 dark:border-gray-700/40
  rounded-2xl
  shadow-lg
  p-6
  transition
  hover:bg-white/80 dark:hover:bg-gray-900/80  text-center"
            >
              <BarChart3 className="w-8 h-8 text-teal-700 mx-auto mb-3" />
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
                className="  bg-white dark:bg-gray-900/60
  backdrop-blur-md
  border border-white/20 dark:border-gray-700/40
  
  transition
  hover:bg-white/80 dark:hover:bg-gray-900/80
                p-8 rounded-xl shadow-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 ">
                  <div>
                    <h3 className="text-2xl font-bold dark:text-gray-400 mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-teal-700 font-semibold mb-2">
                      {exp.institution}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-200 dark:bg-blue-500 text-blue-900 text-sm font-medium rounded-lg">
                    <Calendar className="w-4 h-4" />
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

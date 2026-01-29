import React from "react";
import { Target, Lightbulb } from "lucide-react";
import { portfolioData } from "../mock";

const Vision = () => {
  const { vision } = portfolioData;

  return (
    <section
      id="vision"
      className="py-20 bg-dot-light dark:bg-dot-dark  dark:bg-gray-900 "
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-gray-400 mb-4">
              Vision & Impact
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
          </div>

          {/* Vision Statement */}
          <div className="bg-gradient-to-br from-cyan-800 to-teal-400 p-12 rounded-2xl text-white mb-16 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-10 h-10" />
              <h3 className="text-3xl font-bold">{vision.title}</h3>
            </div>
            <p className="text-lg leading-relaxed opacity-95">
              {vision.statement}
            </p>
          </div>

          {/* Goals Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {vision.goals.map((goal, index) => (
              <div
                key={index}
                className="dark:bg-gray-900  bg-white/60 dark:bg-gray-900/60
  backdrop-blur-md
   border-white/20 dark:border-gray-700/40
  
  shadow-lg
  
  
  hover:bg-white/80 dark:hover:bg-gray-900/80 p-8 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="flex  items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold dark:text-gray-400 mb-3">
                      {goal.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

import React from "react";
import { portfolioData } from "../mock";

const About = () => {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      className="py-20 bg-dot-light dark:bg-dot-dark dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-gray-400 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div>
              <p className="text-lg text-gray-700  bg-white dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-700/40 rounded-2xl shadow-lg p-6 transition dark:hover:bg-gray-900/80 leading-relaxed">
                {about.story}
              </p>
            </div>

            {/* picture for about section */}
            <img className="rounded-lg shadow-lg " src="/about.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

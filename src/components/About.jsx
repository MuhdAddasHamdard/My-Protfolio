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

          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Story */}
            <div className="h-full text-lg border dark:hover:border-[#0f766e] shadow-lg dark:text-gray-400 bg-white dark:bg-[#111827] p-6 rounded-2xl transition-all">
              <p className="leading-relaxed">{about.story}</p>
            </div>

            {/* picture for about section */}
            <div className="">
              <img
                className="rounded-lg w-full shadow-lg "
                src="/about.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { portfolioData } from "../mock";

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-dot-light bg-[#0F172A] ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Story */}
            <div className="h-full text-lg  border border-[#0f766e]  hover:border-[#07514a] shadow-lg text-gray-400 bg-[#111827] p-6 rounded-2xl transition-all ease-in ">
              <p className="leading-relaxed">{about.story}</p>
            </div>

            {/* picture for about section */}
            <div className="transition-all dark:hover:border-[#0f766e]">
              <img
                className=" rounded-lg w-full shadow-lg "
                src="/hero.jpg"
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

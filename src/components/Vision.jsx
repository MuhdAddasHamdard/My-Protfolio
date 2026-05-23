import React from "react";
import { Target, Lightbulb, ArrowUpRightIcon } from "@phosphor-icons/react";

import { portfolioData } from "../mock";

const Vision = () => {
  const { vision } = portfolioData;

  return (
    <section id="vision" className="relative overflow-hidden py-16 md:py-20 bg-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-200 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="uppercase tracking-[0.2em] text-sm text-gray-500 font-semibold">
              Future Goals
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              Vision & Impact
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
              A mission focused on education, innovation, and empowering the
              next generation through technology.
            </p>

            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Vision Statement */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              bg-gray-900
              text-white
              p-6
              sm:p-10
              md:p-16
              shadow-2xl
              mb-12
              md:mb-16
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                top-0
                right-0
                w-72
                h-72
                bg-white/10
                blur-3xl
                rounded-full
              "
            ></div>

            <div className="relative z-10">
              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  rounded-3xl
                  bg-white/10
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  mb-8
                "
              >
                <Lightbulb
                  size={40}
                  weight="fill"
                  className="text-yellow-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-8">
                {vision.title}
              </h3>

              {/* Statement */}
              <p
                className="
                  text-lg
                  md:text-xl
                  text-gray-300
                  leading-relaxed
                  max-w-4xl
                "
              >
                {vision.statement}
              </p>
            </div>
          </div>

          {/* Goals Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {vision.goals.map((goal, index) => (
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
                  p-6
                  sm:p-8
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

                {/* Content */}
                <div className="relative z-10">
                  {/* Top */}
                  <div className="flex items-start justify-between gap-4 mb-6">
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
                        group-hover:bg-white/10
                        transition-all
                        duration-500
                      "
                    >
                      <Target
                        size={30}
                        weight="bold"
                        className="
                          text-gray-800
                          group-hover:text-white
                          transition-colors
                          duration-500
                        "
                      />
                    </div>

                    {/* Arrow */}
                    <ArrowUpRightIcon
                      size={24}
                      className="
                        text-gray-400
                        group-hover:text-white
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        transition-all
                        duration-500
                      "
                    />
                  </div>

                  {/* Title */}
                  <h4
                    className="
                      text-2xl
                      font-bold
                      text-gray-900
                      mb-4
                      group-hover:text-white
                      transition-colors
                      duration-500
                    "
                  >
                    {goal.title}
                  </h4>

                  {/* Description */}
                  <p
                    className="
                      text-gray-600
                      leading-relaxed
                      group-hover:text-gray-300
                      transition-colors
                      duration-500
                    "
                  >
                    {goal.description}
                  </p>
                </div>

                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-gradient-to-br
                    from-white/5
                    to-transparent
                  "
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

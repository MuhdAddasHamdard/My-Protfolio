// Skills.jsx

import { motion } from "framer-motion";
import skills from "../skills";

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-24 bg-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-200 blur-3xl rounded-full"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20 px-6">
          <span className="uppercase tracking-[0.2em] text-sm text-gray-500 font-semibold">
            My Expertise
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
            Skills & Technologies
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
            Technologies and tools I use to build modern, responsive, and
            high-performance web applications.
          </p>

          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-20"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-20"></div>

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    justify-center
                    w-40
                    h-40
                    rounded-[2rem]
                    bg-white
                    border
                    border-gray-200
                    shadow-md
                    hover:shadow-2xl
                    hover:-translate-y-3
                    transition-all
                    duration-500
                  "
                >
                  {/* Icon Wrapper */}
                  <div
                    className="
                      mb-4
                      p-4
                      rounded-2xl
                      bg-gray-50
                      transition-all
                      duration-500
                    "
                  >
                    {/* Colored Icon */}
                    <Icon
                      className="
                        text-5xl
                        transition-all
                        duration-500
                        group-hover:scale-110
                      "
                      style={{
                        color: skill.color,
                      }}
                    />
                  </div>

                  {/* Text */}
                  <p
                    className="
                      text-base
                      font-semibold
                      text-gray-800
                    "
                  >
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

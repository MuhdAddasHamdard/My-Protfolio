import { motion } from "framer-motion";

import skills from "../skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-20 overflow-hidden bg-[#0F172A] transition-colors"
    >
      {/* Title only */}
      <h2 className="text-center mb-12 text-3xl md:text-4xl font-bold text-white">
        Skills & Technologies
      </h2>

      {/* Animated row */}
      <div className="relative">
        <motion.div
          className="flex gap-8 w-max p-0"
          animate={{ x: ["0%", "-40%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="
                  flex items-center flex-col py-1 justify-center w-36 h-36 rounded-2xl bg-[#111827]
                  shadow-sm hover:shadow-2xl transition-all
                "
              >
                {/* <Icon className={`text-5xl  ${skill.color}`} />  */}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

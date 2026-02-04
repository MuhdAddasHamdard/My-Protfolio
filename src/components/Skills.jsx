import { motion } from "framer-motion";

import skills from "../skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-20 overflow-hidden dark:bg-dot-dark bg-slate-100  dark:bg-[#111827] transition-colors"
    >
      {/* Title only */}
      <h2 className="text-center mb-12 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
        Skills & Technologies
      </h2>

      {/* Animated row */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 w-max p-0"
          animate={{ x: ["0%", "-50%"] }}
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
                  flex items-center flex-col justify-center w-36 h-36 rounded-2xl bg-white/70 dark:bg-black/30 backdrop-blur-md border-[#0f766e] dark:border-white/10
                  shadow-sm hover:shadow-lg transition-all
                "
              >
                <Icon className={`text-5xl ${skill.color}`} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

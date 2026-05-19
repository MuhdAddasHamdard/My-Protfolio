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
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center w-36 h-36 rounded-2xl bg-[#111827] border border-white/5 transition-all duration-300 hover:border-[#0F766E]/40 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(15,118,110,0.18)]"
              >
                <Icon className="text-5xl mb-3 text-slate-300 group-hover:text-[#14B8A6] transition-colors duration-300" />
                <p className="text-text"> {skill.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

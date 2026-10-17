import skills from "../skills";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div
      className="group mx-2.5 flex h-32 w-28 shrink-0 flex-col items-center justify-center rounded-[18px] border border-line-soft bg-surface shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-accent/25 hover:shadow-glow sm:h-36 sm:w-32"
    >
      <div className="mb-3.5 flex items-center justify-center">
        <Icon
          className="text-4xl transition-transform duration-500 group-hover:scale-110 sm:text-5xl"
          style={{ color: skill.color, opacity: 0.88 }}
        />
      </div>

      <p className="text-xs font-semibold text-slate-300 transition-colors duration-300 group-hover:text-subtle sm:text-sm">
        {skill.name}
      </p>
    </div>
  );
};

const Skills = () => {
  const doubled = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="section-pad relative overflow-hidden scroll-mt-28 bg-navy"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-44 top-10 h-[440px] w-[440px] rounded-full bg-teal/5 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-44 bottom-0 h-[380px] w-[380px] rounded-full bg-teal/5 blur-[140px]"
      />

      <div className="relative z-10">
        <div className="container-xl">
          <SectionHeading
            index="02"
            eyebrow="My Expertise"
            title="Skills & Technologies"
            description="Technologies and tools I use to build modern, responsive, and high-performance web applications."
          />
        </div>

        {/* Horizontal animated marquee — full-bleed */}
        <Reveal>
          <div className="marquee-paused relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent sm:w-40" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent sm:w-40" />

            <div className="overflow-hidden py-4">
              <div className="flex w-max animate-marquee">
                {doubled.map((skill, index) => (
                  <SkillCard key={`${skill.name}-${index}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
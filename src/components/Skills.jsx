import skills from "../skills";

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;

  return (
    <div
      className="
        group
        flex
        flex-col
        items-center
        justify-center
        h-36
        w-36
        lg:h-40
        lg:w-40
        rounded-[2rem]
        bg-white
        border
        border-gray-200
        shadow-md
        hover:shadow-2xl
        lg:hover:-translate-y-3
        transition-all
        duration-500
        flex-shrink-0
        mx-3
      "
    >
      {/* Icon */}
      <div className="mb-4 p-4 rounded-2xl bg-gray-50">
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
      <p className="text-base font-semibold text-gray-800">{skill.name}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 md:py-20 bg-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-200 blur-3xl rounded-full" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-6">
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

          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full mt-6" />
        </div>

        {/* Mobile Marquee */}
        <div className="lg:hidden overflow-hidden w-full py-4">
          <div className="flex w-max animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <SkillCard key={`${skill.name}-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-6 lg:px-12">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

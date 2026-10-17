import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, index, description, align = "center" }) => {
  const alignClasses =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <Reveal className={`flex flex-col ${alignClasses} mb-14 lg:mb-20`}>
      <span className="eyebrow flex items-center gap-2.5">
        {index && (
          <span className="text-accent/50 tabular-nums">{index}</span>
        )}
        {index && <span className="h-1 w-1 rounded-full bg-accent/60" />}
        {eyebrow}
      </span>

      <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-subtle sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}

      <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </Reveal>
  );
};

export default SectionHeading;
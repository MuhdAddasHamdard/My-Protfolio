import { QuotesIcon } from "@phosphor-icons/react";
import { portfolioData } from "../mock";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const Testimonials = () => {
  const { testimonials } = portfolioData;

  return (
    <section className="section-pad relative overflow-hidden scroll-mt-28 bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-teal/5 blur-[150px]"
      />

      <div className="container-xl relative z-10">
        <SectionHeading
          index="05"
          eyebrow="Student Feedback"
          title="Testimonials"
          description="A few words that show the teaching, mentoring, and practical learning experience behind the work."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="group card-surface relative flex h-full flex-col p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/20 hover:shadow-hover">
                <div
                  aria-hidden
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                />

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-teal/15 text-accent transition-colors duration-500 group-hover:bg-teal/25">
                  <QuotesIcon size={22} weight="fill" />
                </div>

                <p className="mb-8 flex-1 text-base leading-relaxed text-slate-300">
                  "{item.quote}"
                </p>

                <div className="border-t border-line pt-5">
                  <h3 className="text-base font-semibold text-subtle">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
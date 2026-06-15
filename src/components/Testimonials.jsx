import { QuotesIcon } from "@phosphor-icons/react";
import { portfolioData } from "../mock";

const Testimonials = () => {
  const { testimonials } = portfolioData;

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gray-100 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gray-200 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 text-center md:mb-16">
            <span className="text-base font-semibold uppercase tracking-[0.2em] text-gray-500">
              Student Feedback
            </span>
            <h2 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl">
              Testimonials
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-600 sm:text-2xl lg:text-3xl">
              A few words that show the teaching, mentoring, and practical
              learning experience behind the work.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gray-900"></div>
          </header>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="group rounded-[2rem] border border-gray-200 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-7 lg:p-6"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                  <QuotesIcon size={24} weight="fill" />
                </div>
                <p className="mb-8 text-xl leading-relaxed text-gray-600 sm:text-2xl lg:text-lg">
                  "{item.quote}"
                </p>
                <div>
                  <h3 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-xl">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-lg text-gray-500 sm:text-xl lg:text-sm">
                    {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

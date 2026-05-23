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
          <header className="mb-12 md:mb-16 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Student Feedback
            </span>
            <h2 className="mt-4 text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl">
              Testimonials
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              A few words that show the teaching, mentoring, and practical
              learning experience behind the work.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gray-900"></div>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="group rounded-[2rem] border border-gray-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-900 text-white">
                  <QuotesIcon size={24} weight="fill" />
                </div>
                <p className="mb-8 leading-relaxed text-gray-600">
                  "{item.quote}"
                </p>
                <div>
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
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

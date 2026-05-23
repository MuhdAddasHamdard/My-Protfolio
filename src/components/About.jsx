import React from "react";
import { portfolioData } from "../mock";
import { ArrowRightIcon } from "@phosphor-icons/react";

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="relative overflow-hidden py-16 md:py-20 bg-white">
      {/* Soft Background Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-100 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-gray-500 uppercase tracking-[0.2em] text-sm font-semibold">
              Get To Know Me
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              About Me
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
              Passionate about creating modern, responsive, and user-friendly
              web experiences with clean UI and smooth UX.
            </p>

            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image Side */}
            <div className="relative group">
              {/* Decorative Border */}
              <div className="absolute -inset-1 bg-gray-300 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
                <img
                  src="/hero.jpg"
                  alt="Gula Khan Hamdard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-gray-200 px-5 py-3 rounded-xl shadow-lg">
                  <p className="text-gray-900 font-semibold">
                    Frontend Developer
                  </p>
                  <p className="text-sm text-gray-500">
                    React / Tailwind / UI/UX
                  </p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Building Beautiful &
                  <span className="text-gray-700"> Functional</span> Digital
                  Experiences
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {about.story}
                </p>

                {/* Small Info Cards */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition">
                    <h4 className="text-gray-900 font-semibold mb-2">
                      Clean Code
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Writing scalable and maintainable modern frontend code.
                    </p>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition">
                    <h4 className="text-gray-900 font-semibold mb-2">
                      Responsive UI
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Creating beautiful layouts for all screen sizes.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-black transition-all duration-300 text-white px-6 py-3 rounded-xl font-medium shadow-lg"
                >
                  Learn More
                  <ArrowRightIcon
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

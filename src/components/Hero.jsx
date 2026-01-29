import React from "react";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "../mock";
import RotatingText from "./TextRotation";
const Hero = () => {
  const { hero } = portfolioData;

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-centerbg-gray-50 dark:bg-gray-900 bg-dot-light dark:bg-dot-dark pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-light dark:bg-dot-dark" />
      <div className="absolute inset-0 hero-bg-image" />
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen max-w-4xl mx-auto  items-center justify-center px-6">
        {/* Hero content here */}
        <div className="container text-center mx-auto px-2 lg:px-12 py-20">
          <div className="max-w-4xl mx-auto ">
            {/* Name */}
            <h1 className="text-5xl lg:text-7xl font-bold dark:text-gray-400 mb-4">
              {hero.name}
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl text-[#0F766E]">
              <RotatingText />
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-xl font-bold mb-10 max-w-3xl mx-auto leading-relaxed">
              {hero.description}
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {hero.cta}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

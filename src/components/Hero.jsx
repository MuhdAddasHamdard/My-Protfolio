import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { portfolioData } from "../mock";
import RotatingText from "./TextRotation";

const Hero = () => {
  const { hero } = portfolioData;
  const { contact } = portfolioData;

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className=" flex flex-col bg-[#0b1220] justify-center ">
      {/* Content */}
      <div className=" min-h-screen bg-dot-light hero-bg-image container mx-auto">
        {/* Hero content here */}

        <div className="flex flex-col justify-end  items-center h-screen pt-28 lg:justify-center text-center lg:w-1/2">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-[#5EEAD4] font-semibold mb-4 tracking-wide">
            <RotatingText />
          </h2>
          {/* Name */}
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#F8FAFC] mb-6 tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]">
            {hero.name}
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-slate-300 font-normal mb-10 max-w-3xl  leading-relaxed">
            {" "}
            {hero.description}
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0F766E] text-white font-semibold rounded-xl hover:bg-[#115E59] hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(15,118,110,0.25)]"
          >
            {hero.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

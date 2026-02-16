import React from "react";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "../mock";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
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
    <section className="min-h-screen relative overflow-hidden flex items-center flex-col justify-center pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dot-light dark:bg-dot-dark" />
      <div className="absolute inset-0 hero-bg-image" />
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen max-w-4xl mx-auto  items-center justify-center px-6">
        {/* Hero content here */}
        <div className="container text-center mx-auto px-2 lg:px-12 py-20">
          <div className="max-w-4xl mx-auto ">
            {/* Title */}
            <h2 className="text-2xl md:text-3xl text-[#0F766E]">
              <RotatingText />
            </h2>
            {/* Name */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-4">{hero.name}</h1>

            {/* Description */}
            <p className="text-lg lg:text-xl  font-bold mb-10 max-w-3xl mx-auto leading-relaxed">
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
      <div className=" z-50  bg-red-300 px-6 rounded flex flex-wrap justify-center gap-3 items-center">
        <div className="flex flex-col justify-center items-center">
          <a
            href={`mailto:${contact.email}`}
            className="text-blue-900 hover:text-blue-700 transition-colors"
          >
            <div className="w-10 h-10 bg-[#14B8A6] rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-900" />
            </div>
          </a>
          <p>Email</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-700 transition-colors"
          >
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <Github className="w-6 h-6 text-white" />
            </div>
          </a>
          <p>GitHub</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-700 transition-colors"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
          </a>
          <p>LinkedIn</p>
        </div>

        <div className=" bg-teal-100 h-10 w-10 rounded-lg flex items-center flex-col justify-center">
          <div className="w-10 h-10  rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-teal-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

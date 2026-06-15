import React from "react";
import { ArrowRight, DownloadSimpleIcon } from "@phosphor-icons/react";
import { portfolioData } from "../mock";
import RotatingText from "./TextRotation";
import cv from "./../assets/Gula Khan Hamdard-Web Developer CV.pdf";

const Hero = () => {
  const { hero } = portfolioData;

  const scrollToProjects = () => {
    const element = document.getElementById("projects");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        flex
        items-center
        bg-white
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-200 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-100 blur-3xl rounded-full"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-40"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-24">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Small Heading */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

              <h2 className="text-sm md:text-base font-medium text-gray-700">
                <RotatingText />
              </h2>
            </div>

            {/* Main Heading */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                text-gray-900
                leading-tight
                tracking-tight
                mb-6
              "
            >
              {hero.name}
            </h1>

            {/* Description */}
            <p
              className="
                text-3xl
                text-gray-600
                leading-relaxed
                max-w-2xl
                mb-10
              "
            >
              {hero.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row flex-wrap  items-center justify-center lg:justify-start gap-4 [&>*]:w-full sm:[&>*]:w-auto">
              {/* Main Button */}
              <button
                onClick={scrollToProjects}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  text-2xl
                  px-8
                  py-4
                  bg-gray-900
                  hover:bg-black
                  text-white
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                  shadow-xl
                "
              >
                {hero.cta}

                <ArrowRight
                  size={30}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              {/* Secondary Button */}
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  text-2xl
                  py-4
                  border
                  border-gray-300
                  hover:border-gray-900
                  rounded-2xl
                  text-gray-700
                  hover:text-black
                  font-semibold
                  transition-all
                  duration-300
                  bg-white
                "
              >
                Contact Me
              </a>

              <a
                href={cv}
                download
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-8
                  text-2xl

                  py-4
                  border
                  border-gray-300
                  hover:border-gray-900
                  rounded-2xl
                  text-gray-700
                  hover:text-black
                  font-semibold
                  transition-all
                  duration-300
                  bg-white
                "
              >
                Download CV
                <DownloadSimpleIcon size={30} />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative text-3xl hidden lg:flex justify-center">
            {/* Glow */}
            <div className="absolute w-[450px] h-[450px] bg-gray-200 rounded-full blur-3xl opacity-60"></div>

            {/* Main Card */}
            <div
              className="
                relative
                bg-white/80
                backdrop-blur-xl
                border
                border-gray-200
                rounded-[2rem]
                p-8
                shadow-2xl
                w-full
                max-w-md
              "
            >
              {/* Top Dots */}
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              {/* Fake Code UI */}
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                <div className="h-4 bg-gray-100 rounded-full w-2/3"></div>

                <div className="pt-6">
                  <div className="bg-gray-900 text-green-400 p-5 rounded-2xl font-mono text-sm shadow-inner">
                    <p>const developer = "Creative";</p>
                    <p>const ui = "Modern";</p>
                    <p>const ux = "Smooth";</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div
                className="
                  absolute
                  -bottom-6
                  -right-6
                  bg-black
                  text-white
                  px-6
                  py-4
                  rounded-2xl
                  shadow-2xl
                "
              >
                <p className="text-sm text-gray-400">Experience</p>
                <h3 className="text-2xl font-bold">Frontend Dev</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

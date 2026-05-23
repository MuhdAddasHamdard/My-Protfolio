import React from "react";
import {
  GithubLogoIcon,
  EyeIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

import { portfolioData } from "../mock";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative overflow-hidden py-24 bg-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-200 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-20">
            <span className="uppercase tracking-[0.2em] text-sm text-gray-500 font-semibold">
              My Work
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              Featured Projects
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
              A collection of modern, responsive, and impactful projects built
              with clean UI and smooth user experience.
            </p>

            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full mt-6"></div>
          </header>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-white
                  border
                  border-gray-200
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                "
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      h-72
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-black/10
                      to-transparent
                    "
                  ></div>

                  {/* Floating Buttons */}
                  <div
                    className="
                      absolute
                      top-5
                      right-5
                      flex
                      gap-3
                      opacity-0
                      translate-y-4
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-500
                    "
                  >
                    {/* Live Demo */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-white/90
                        backdrop-blur-md
                        flex
                        items-center
                        justify-center
                        text-gray-900
                        hover:bg-black
                        hover:text-white
                        transition-all
                        duration-300
                        shadow-lg
                      "
                    >
                      <EyeIcon size={22} weight="bold" />
                    </a>

                    {/* Github */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Github repository of ${project.title}`}
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-white/90
                        backdrop-blur-md
                        flex
                        items-center
                        justify-center
                        text-gray-900
                        hover:bg-black
                        hover:text-white
                        transition-all
                        duration-300
                        shadow-lg
                      "
                    >
                      <GithubLogoIcon size={22} weight="bold" />
                    </a>
                  </div>

                  {/* Bottom Badge */}
                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      bg-white/90
                      backdrop-blur-md
                      border
                      border-white/30
                      px-4
                      py-2
                      rounded-xl
                      shadow-lg
                    "
                  >
                    <p className="text-sm font-medium text-gray-800">
                      Featured Project
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {project.description ||
                          "Modern responsive project with clean design and user-friendly experience."}
                      </p>
                    </div>

                    <ArrowUpRightIcon
                      size={24}
                      className="
                        text-gray-400
                        group-hover:text-black
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        transition-all
                        duration-300
                        hidden
                        md:block
                      "
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-8">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="
                            px-3
                            py-1.5
                            rounded-full
                            bg-gray-100
                            text-gray-700
                            text-sm
                            font-medium
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Icons */}
                    <div className="flex items-center gap-3 md:hidden">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          w-11
                          h-11
                          rounded-xl
                          bg-gray-100
                          flex
                          items-center
                          justify-center
                          text-gray-700
                        "
                      >
                        <EyeIcon size={20} weight="bold" />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          w-11
                          h-11
                          rounded-xl
                          bg-gray-100
                          flex
                          items-center
                          justify-center
                          text-gray-700
                        "
                      >
                        <GithubLogoIcon size={20} weight="bold" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

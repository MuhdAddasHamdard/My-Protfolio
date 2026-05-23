import React from "react";
import { GithubLogoIcon, EyeIcon } from "@phosphor-icons/react";
import { portfolioData } from "../mock";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="py-20 bg-dot-light dark:bg-dot-dark dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-4">
              Featured Projects
            </h2>

            <div className="w-20 h-1 bg-[#0F766E] mx-auto mb-6 rounded-full" />

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Education-focused projects making a real impact in Afghanistan
            </p>
          </header>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/90 backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#0F766E]/50 hover:shadow-2xl"
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hidden md:block" />

                  {/* Desktop Hover Icons */}
                  <div className="absolute inset-0 hidden items-center justify-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100 md:flex">
                    {/* Live Preview */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className="rounded-full bg-white p-3 text-black shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#0F766E] hover:text-white"
                    >
                      <EyeIcon size={22} weight="bold" />
                    </a>

                    {/* Github */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Github repository of ${project.title}`}
                      className="rounded-full bg-white p-3 text-black shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#0F766E] hover:text-white"
                    >
                      <GithubLogoIcon size={22} weight="bold" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex justify-between items-center">
                  <h3 className=" text-xl font-bold text-slate-100">
                    {project.title}
                  </h3>

                  {/* Mobile Footer Icons */}
                  <div className="flex items-center gap-4 md:hidden">
                    {/* Live Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                      className="flex items-center justify-center rounded-lg bg-[#172033] p-3 text-white transition-colors duration-300 hover:bg-[#0F766E]"
                    >
                      <EyeIcon size={20} weight="bold" />
                    </a>

                    {/* Github */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Github repository of ${project.title}`}
                      className="flex items-center justify-center rounded-lg bg-[#172033] p-3 text-white transition-colors duration-300 hover:bg-[#0F766E]"
                    >
                      <GithubLogoIcon size={20} weight="bold" />
                    </a>
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

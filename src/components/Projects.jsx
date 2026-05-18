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
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-gray-400 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Education-focused projects making a real impact in Afghanistan
            </p>
          </header>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white  backdrop-blur-md border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icons centered on hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      target="_blank"
                      href={project.link}
                      className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
                    >
                      <EyeIcon size={24} color="#040102" weight="thin" />
                    </a>

                    <a
                      target="_blank"
                      href={project.github}
                      className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
                    >
                      <GithubLogoIcon size={24} color="#040102" weight="thin" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl text-black  font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className=" text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

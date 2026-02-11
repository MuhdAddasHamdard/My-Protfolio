import React from "react";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
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
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold dark:text-gray-400 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Education-focused projects making a real impact in Afghanistan
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="dark:bg-gray-900  bg-white dark:bg-gray-900/60 backdrop-blur-md border-white/20 dark:border-gray-700/40 shadow-lg p-2 hover:bg-white/80 dark:hover:bg-gray-900/80 border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold dark:text-gray-400 mb-3 group-hover:text-blue-900 transition-colors">
                    {project.title}
                  </h3>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-900 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm font-medium dark:text-gray-300 hover:dark:text-gray-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
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

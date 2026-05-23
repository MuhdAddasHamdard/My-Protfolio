import React, { useState } from "react";
import {
  GithubLogoIcon,
  EyeIcon,
  ArrowUpRightIcon,
  XIcon,
} from "@phosphor-icons/react";

import { portfolioData } from "../mock";

const Projects = () => {
  const { projects } = portfolioData;
  const hasLink = (href) => href && href !== "#";
  const [selectedProject, setSelectedProject] = useState(null);

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
                  {(hasLink(project.link) || hasLink(project.github)) && (
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
                      {hasLink(project.link) && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
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
                      )}

                      {hasLink(project.github) && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository of ${project.title}`}
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
                      )}
                    </div>
                  )}

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

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.title}`}
                      className="hidden rounded-xl bg-gray-100 p-3 text-gray-500 transition-all duration-300 hover:bg-gray-900 hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 md:block"
                    >
                      <ArrowUpRightIcon size={20} />
                    </button>
                  </div>

                  {project.impact && (
                    <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                        Impact
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-700">
                        {project.impact}
                      </p>
                    </div>
                  )}

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
                      {hasLink(project.link) && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
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
                      )}

                      {hasLink(project.github) && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository of ${project.title}`}
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
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/40 px-4 py-8 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Project Details
                </p>
                <h3 className="mt-2 text-3xl font-black text-gray-900">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="rounded-xl bg-gray-100 p-3 text-gray-700 transition hover:bg-gray-900 hover:text-white"
              >
                <XIcon size={20} weight="bold" />
              </button>
            </div>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="mb-6 h-64 w-full rounded-3xl object-cover"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900">Role</h4>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {selectedProject.role}
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5">
                <h4 className="font-bold text-gray-900">Result</h4>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {selectedProject.impact}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="mb-3 font-bold text-gray-900">Highlights</h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.features?.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {hasLink(selectedProject.link) && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-black"
                >
                  Live Project
                  <EyeIcon size={18} weight="bold" />
                </a>
              )}
              {hasLink(selectedProject.github) && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition hover:border-gray-900"
                >
                  GitHub
                  <GithubLogoIcon size={18} weight="bold" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

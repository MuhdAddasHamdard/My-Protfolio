import React, { useEffect, useState } from "react";
import {
  GithubLogoIcon,
  EyeIcon,
  ArrowUpRightIcon,
  XIcon,
} from "@phosphor-icons/react";

import { portfolioData } from "../mock";

const Projects = () => {
  const { projects } = portfolioData;

  const [selectedProject, setSelectedProject] = useState(null);

  const hasLink = (href) => href && href !== "#";

  // Lock body scroll when modal opens
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  // Close modal on ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-gray-100 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gray-200 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <header className="mb-12 text-center md:mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              My Work
            </span>

            <h2 className="mt-4 text-4xl font-black text-gray-900 sm:text-5xl lg:text-6xl">
              Featured Projects
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              A collection of modern, responsive, and impactful projects built
              with clean UI and smooth user experience.
            </p>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gray-900" />
          </header>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="
                  group
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-gray-200
                  bg-white
                  shadow-lg
                  transition-all
                  duration-500
                  lg:hover:-translate-y-3
                  lg:hover:shadow-2xl
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="
                      h-56
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      sm:h-72
                      lg:group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Desktop Floating Actions */}
                  {(hasLink(project.link) || hasLink(project.github)) && (
                    <div
                      className="
                        absolute
                        top-5
                        right-5
                        hidden
                        translate-y-4
                        gap-3
                        opacity-0
                        transition-all
                        duration-500
                        lg:flex
                        lg:group-hover:translate-y-0
                        lg:group-hover:opacity-100
                      "
                    >
                      {hasLink(project.link) && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-white/90
                            text-gray-900
                            shadow-lg
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:bg-black
                            hover:text-white
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
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-white/90
                            text-gray-900
                            shadow-lg
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:bg-black
                            hover:text-white
                          "
                        >
                          <GithubLogoIcon size={22} weight="bold" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Badge */}
                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      rounded-xl
                      border
                      border-white/30
                      bg-white/90
                      px-4
                      py-2
                      shadow-lg
                      backdrop-blur-md
                    "
                  >
                    <p className="text-xs font-semibold text-gray-800 sm:text-sm">
                      Featured Project
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  {/* Title */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                        {project.description ||
                          "Modern responsive project with clean design and user-friendly experience."}
                      </p>
                    </div>

                    {/* Desktop Details Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.title}`}
                      className="
                        hidden
                        rounded-xl
                        bg-gray-100
                        p-3
                        text-gray-500
                        transition-all
                        duration-300
                        hover:bg-gray-900
                        hover:text-white
                        lg:block
                      "
                    >
                      <ArrowUpRightIcon size={20} />
                    </button>
                  </div>

                  {/* Impact */}
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
                  <div className="mt-6 flex flex-col gap-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            bg-gray-100
                            px-3
                            py-1
                            text-xs
                            font-medium
                            text-gray-700
                            sm:text-sm
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-3 lg:hidden">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="
                          inline-flex
                          flex-1
                          items-center
                          justify-center
                          rounded-xl
                          bg-gray-900
                          px-4
                          py-3
                          text-sm
                          font-semibold
                          text-white
                        "
                      >
                        View Details
                      </button>

                      {hasLink(project.link) && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-gray-100
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
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-gray-100
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

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="
            fixed
            inset-0
            z-[80]
            flex
            items-center
            justify-center
            bg-black/50
            px-4
            py-6
            backdrop-blur-sm
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[90vh]
              w-full
              max-w-3xl
              overflow-y-auto
              rounded-[2rem]
              border
              border-gray-200
              bg-white
              p-5
              shadow-2xl
              sm:p-6
              md:p-8
            "
          >
            {/* Modal Header */}
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Project Details
                </p>

                <h3 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="
                  rounded-xl
                  bg-gray-100
                  p-3
                  text-gray-700
                  transition
                  hover:bg-gray-900
                  hover:text-white
                "
              >
                <XIcon size={20} weight="bold" />
              </button>
            </div>

            {/* Modal Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="
                mb-6
                h-48
                w-full
                rounded-3xl
                object-cover
                sm:h-64
              "
            />

            {/* Info */}
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

            {/* Features */}
            <div className="mt-6">
              <h4 className="mb-3 font-bold text-gray-900">Highlights</h4>

              <div className="flex flex-wrap gap-3">
                {selectedProject.features?.map((feature) => (
                  <span
                    key={feature}
                    className="
                      rounded-full
                      bg-gray-100
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                    "
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {hasLink(selectedProject.link) && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    bg-gray-900
                    px-5
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-black
                  "
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
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-gray-300
                    px-5
                    py-3
                    font-semibold
                    text-gray-800
                    transition
                    hover:border-gray-900
                  "
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

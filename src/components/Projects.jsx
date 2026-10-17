import React, { useEffect, useState } from "react";
import {
  GithubLogoIcon,
  EyeIcon,
  ArrowUpRightIcon,
  XIcon,
} from "@phosphor-icons/react";

import { portfolioData } from "../mock";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

const MotionDiv = motion.div;

const hasLink = (href) => href && href !== "#";

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  // Close modal on ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section id="projects" className="section-pad relative overflow-hidden scroll-mt-28 bg-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-teal/5 blur-[160px]"
      />

      <div className="container-xl relative z-10">
        <SectionHeading
          index="03"
          eyebrow="My Work"
          title="Featured Projects"
          description="A collection of modern, responsive, and impactful projects built with clean UI and smooth user experience."
        />

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 0.08}>
              <article className="group card-surface h-full overflow-hidden !rounded-[22px] transition-all duration-500 hover:-translate-y-2 hover:border-accent/20 hover:shadow-hover">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </div>

                  {/* Cinematic hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent opacity-90 transition-opacity duration-500" />

                  {/* Floating actions on hover */}
                  {(hasLink(project.link) || hasLink(project.github)) && (
                    <div className="absolute right-4 top-4 flex translate-y-2 gap-2.5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {hasLink(project.link) && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-subtle backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-accent hover:text-navy"
                        >
                          <EyeIcon size={18} weight="bold" />
                        </a>
                      )}

                      {hasLink(project.github) && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository of ${project.title}`}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-subtle backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-accent hover:text-navy"
                        >
                          <GithubLogoIcon size={18} weight="bold" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Featured badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="chip !border-accent/25 !bg-navy/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Featured Project
                    </span>
                  </div>

                  {/* Watermark number */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-6 right-3 font-display text-[7rem] font-extrabold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-accent/[0.07]"
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent/70">
                        Case Study · 0{index + 1}
                      </span>

                      <h3 className="mt-2.5 text-xl font-bold leading-snug text-subtle transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                        {project.description ||
                          "Modern responsive project with clean design and user-friendly experience."}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.title}`}
                      className="hidden shrink-0 rounded-full border border-line bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:border-accent/30 hover:bg-teal/10 hover:text-accent lg:block"
                    >
                      <ArrowUpRightIcon size={18} weight="bold" />
                    </button>
                  </div>

                  {/* Impact */}
                  {project.impact && (
                    <div className="mt-6 rounded-2xl border border-line-soft bg-navy/50 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                        Impact
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {project.impact}
                      </p>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech?.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Mobile actions */}
                    <div className="flex items-center gap-3 lg:hidden">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex flex-1 items-center justify-center rounded-full bg-teal px-4 py-3 text-sm font-semibold text-subtle transition-colors duration-300 hover:bg-teal-deep"
                      >
                        View Details
                      </button>

                      {hasLink(project.link) && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white/5 text-slate-300 transition-colors hover:text-accent"
                        >
                          <EyeIcon size={18} weight="bold" />
                        </a>
                      )}

                      {hasLink(project.github) && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository of ${project.title}`}
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white/5 text-slate-300 transition-colors hover:text-accent"
                        >
                          <GithubLogoIcon size={18} weight="bold" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} details`}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/80 px-4 py-6 backdrop-blur-sm"
          >
            <MotionDiv
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[24px] border border-white/10 bg-surface p-6 shadow-card-lg sm:p-8"
            >
              {/* Header */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    Project Details
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-subtle sm:text-3xl">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="rounded-full border border-line bg-white/5 p-3 text-slate-300 transition-colors hover:border-accent/30 hover:text-accent"
                >
                  <XIcon size={18} weight="bold" />
                </button>
              </div>

              {/* Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="mb-6 h-48 w-full rounded-2xl border border-line object-cover sm:h-64"
              />

              {/* Info */}
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-line-soft bg-navy/50 p-5">
                  <h4 className="text-sm font-semibold text-subtle">Role</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {selectedProject.role}
                  </p>
                </div>

                <div className="rounded-2xl border border-line-soft bg-navy/50 p-5">
                  <h4 className="text-sm font-semibold text-subtle">Result</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {selectedProject.impact}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-subtle">
                  Highlights
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {selectedProject.features?.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-line bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300"
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
                    className="btn-primary"
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
                    className="btn-ghost"
                  >
                    GitHub
                    <GithubLogoIcon size={18} weight="bold" />
                  </a>
                )}
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
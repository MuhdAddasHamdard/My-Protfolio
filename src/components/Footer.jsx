import React from "react";
import {
  HeartIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

import { portfolioData } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: EnvelopeSimpleIcon,
      href: `mailto:${portfolioData.contact.email}`,
      label: "Email",
    },
    {
      icon: GithubLogoIcon,
      href: portfolioData.contact.github,
      label: "GitHub",
    },
    {
      icon: LinkedinLogoIcon,
      href: portfolioData.contact.linkedin,
      label: "LinkedIn",
    },
    {
      icon: WhatsappLogoIcon,
      href: portfolioData.contact.whatsApp,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-navy">
      {/* Oversized watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[58%] select-none font-display text-[24vw] font-extrabold leading-none tracking-tighter text-white/[0.02] lg:block"
      >
        GKH
      </span>

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container-xl relative z-10">
        <div className="flex flex-col items-center justify-between gap-10 py-14 lg:flex-row lg:gap-0 lg:py-16">
          {/* Brand */}
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-gradient-accent font-display text-2xl font-extrabold tracking-tight">
              Gula Khan Hamdard
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              Web Developer & Educator passionate about building modern,
              responsive, and user-friendly digital experiences.
            </p>
          </div>

          {/* Socials — unified dark icon buttons */}
          <nav className="flex items-center gap-3" aria-label="Social links">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-teal hover:bg-teal hover:shadow-glow-soft"
                >
                  <Icon
                    size={22}
                    weight="regular"
                    className="transition-colors duration-300 group-hover:text-accent"
                  />

                  <span
                    aria-hidden
                    className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-surface border border-line opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <ArrowUpRightIcon size={10} className="text-accent" />
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-7 text-center md:flex-row">
          <p className="text-sm text-muted">
            © {currentYear} Gula Khan Hamdard. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-muted">
            Built with
            <HeartIcon
              size={14}
              weight="fill"
              className="text-accent"
            />
            for education in Afghanistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
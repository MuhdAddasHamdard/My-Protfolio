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
    <footer className="relative overflow-hidden bg-white border-t border-gray-200">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-100 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-200 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto py-12 md:py-16">
          {/* Main Footer */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Brand */}
            <div className="text-center lg:text-left max-w-md">
              <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
                Gula Khan Hamdard
              </h2>

              <p className="text-gray-600 text-xl lg:text-lg leading-relaxed">
                Frontend Developer & Educator passionate about building modern,
                responsive, and user-friendly digital experiences.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="
                      group
                      relative
                      w-14
                      h-14
                      sm:w-16
                      sm:h-16
                      rounded-2xl
                      bg-gray-50
                      border
                      border-gray-200
                      flex
                      items-center
                      justify-center
                      shadow-sm
                      hover:shadow-xl
                      hover:-translate-y-2
                      transition-all
                      duration-300
                      overflow-hidden
                    "
                  >
                    {/* Hover Background */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gray-900
                        scale-0
                        group-hover:scale-100
                        transition-transform
                        duration-300
                        rounded-2xl
                      "
                    ></div>

                    {/* Icon */}
                    <Icon
                      size={30}
                      weight="regular"
                      className="
                        relative
                        z-10
                        text-gray-700
                        group-hover:text-white
                        transition-colors
                        duration-300
                      "
                    />

                    {/* Small Arrow */}
                    <ArrowUpRightIcon
                      size={14}
                      className="
                        absolute
                        top-2
                        right-2
                        text-gray-400
                        opacity-0
                        group-hover:opacity-100
                        group-hover:text-white
                        transition-all
                        duration-300
                      "
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-10"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-gray-500 text-lg">
              © {currentYear} Gula Khan Hamdard. All rights reserved.
            </p>

            <p className="flex items-center gap-2 text-lg  text-gray-500">
              Built with
              <HeartIcon size={30} weight="fill" className="text-red-500" />
              for education in Afghanistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

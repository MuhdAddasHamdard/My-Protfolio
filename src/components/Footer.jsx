import React from "react";
import {
  HeartIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import { portfolioData } from "../mock";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1220] backdrop-blur-md border-t border-white/5 text-center text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Gula Khan Hamdard</h3>
              <p className="text-slate-400 text-sm">Web Developer & Educator</p>
            </div>

            {/* links */}
            <div className=" z-50  p-2 rounded flex flex-wrap justify-center gap-3 items-center">
              <div className="flex flex-col hover:text-red-300 justify-center items-center">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-blue-900 hover:text-blue-700 transition-colors"
                >
                  <div
                    className="w-12 h-12 bg-[#111827] border border-white/5 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#0F766E] hover:border-[#14B8A6]/30 hover:-translate-y-1
"
                  >
                    <EnvelopeSimpleIcon
                      size={34}
                      weight="thin"
                      className="text-slate-300 group-hover:text-white transition-colors"
                    />
                  </div>
                </a>
              </div>

              <div className="flex flex-col items-center justify-center">
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#111827] border border-white/5 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#0F766E] hover:border-[#14B8A6]/30 hover:-translate-y-1">
                    <GithubLogoIcon
                      size={34}
                      weight="thin"
                      className="text-slate-300 group-hover:text-white transition-colors"
                    />
                  </div>
                </a>
              </div>

              <div className="flex flex-col items-center justify-center">
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#111827] border border-white/5 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#0F766E] hover:border-[#14B8A6]/30 hover:-translate-y-1">
                    <LinkedinLogoIcon
                      size={34}
                      weight="thin"
                      className="text-slate-300 group-hover:text-white transition-colors"
                    />
                  </div>
                </a>
              </div>

              <div className="w-10 rounded-lg flex flex-col items-center justify-center">
                <a
                  href={portfolioData.contact.whatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 bg-[#111827] border border-white/5 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#0F766E] hover:border-[#14B8A6]/30 hover:-translate-y-1"
                >
                  <WhatsappLogoIcon
                    size={46}
                    weight="thin"
                    className="text-slate-300 group-hover:text-white transition-colors"
                  />
                </a>
              </div>
            </div>
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
                © {currentYear} Gula Khan Hamdard. Built with
                <HeartIcon className=" text-red-500" />
                for education in Afghanistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

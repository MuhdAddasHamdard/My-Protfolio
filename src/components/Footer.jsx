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
    <footer className="bg-gray-900 text-center text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Gula Khan Hamdard</h3>
              <p className="text-gray-400 text-sm">Web Developer & Educator</p>
            </div>

            {/* links */}
            <div className=" z-50  p-6 rounded flex flex-wrap justify-center gap-3 items-center">
              <div className="flex flex-col hover:text-red-300 justify-center items-center">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-blue-900 hover:text-blue-700 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#14B8A6] rounded-lg flex items-center justify-center">
                    <EnvelopeSimpleIcon size={32} weight="thin" />
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
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <GithubLogoIcon size={32} weight="thin" />
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
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <LinkedinLogoIcon size={32} weight="thin" />
                  </div>
                </a>
              </div>

              <div className="  h-10 w-10 rounded-lg flex items-center flex-col justify-center">
                <div className="w-10 h-10  rounded-lg flex flex-col items-center justify-center">
                  <a
                    href={portfolioData.contact.whatsApp}
                    target="_blank"
                    // rel="noopener noreferrer"
                    className=" hover:text-blue-700 transition-colors"
                  >
                    <WhatsappLogoIcon
                      size={32}
                      className="text-#25D366"
                      weight="thin"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
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

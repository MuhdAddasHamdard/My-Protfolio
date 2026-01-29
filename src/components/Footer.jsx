import React from "react";
import { Heart } from "lucide-react";

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

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                © {currentYear} Gula Khan Hamdard. Built with
                <Heart className=" text-red-500" />
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

import React, { useState, useEffect } from "react";
import { ListIcon, XIcon, ArrowUpRightIcon } from "@phosphor-icons/react";

import { motion, AnimatePresence } from "framer-motion";

const MotionDiv = motion.div;
const MotionButton = motion.button;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Teaching", id: "teaching" },
    { label: "Vision", id: "vision" },
    { label: "Contact", id: "contact" },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },

    exit: {
      opacity: 0,
      y: -20,

      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <header
        className={` fixed top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 lg:left-10 lg:right-10 z-50 transition-all duration-300 rounded-2xl border
          ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border-gray-200 shadow-xl"
              : "bg-white/60 backdrop-blur-lg border-gray-100"
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex h-16 items-center justify-between sm:h-20">
            {/* Logo */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className=" text-4xl sm:text-6xl font-black tracking-tight text-gray-900 hover:opacity-80 transition
              "
            >
              GKH
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative px-5 py-2.5 rounded-xl text-gray-700 hover:text-black hover:bg-gray-100 font-medium text-2xl transition-all duration-300
                  "
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="hidden lg:inline-flex items-center gap-2 px-5 py-3 bg-gray-900 hover:bg-black text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg
                "
              >
                Let's Talk
                <ArrowUpRightIcon size={18} />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="lg:hidden w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-900
                "
              >
                {isMobileMenuOpen ? (
                  <XIcon size={40} weight="bold" />
                ) : (
                  <ListIcon size={40} weight="bold" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  fixed
                  inset-0
                  bg-black/20
                  backdrop-blur-sm
                  z-40
                  lg:hidden
                "
              />

              {/* Menu */}
              <MotionDiv
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="
                  absolute
                  top-[110%]
                  left-0
                  w-full
                  z-50
                  lg:hidden
                  bg-white/95
                  backdrop-blur-2xl
                  border
                  border-gray-200
                  rounded-2xl
                  shadow-2xl
                  overflow-hidden
                "
              >
                <div className="flex flex-col p-4">
                  {navLinks.map((link) => (
                    <MotionButton
                      key={link.id}
                      variants={itemVariants}
                      onClick={() => scrollToSection(link.id)}
                      className="
                        w-full
                        text-left
                        px-5
                        py-4
                        rounded-xl
                        text-gray-700
                        hover:bg-gray-100
                        hover:text-black
                        font-medium
                        transition-all
                      "
                    >
                      {link.label}
                    </MotionButton>
                  ))}

                  {/* Mobile CTA */}
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="
                      mt-3
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-5
                      py-4
                      rounded-xl
                      bg-gray-900
                      text-white
                      font-medium
                    "
                  >
                    Let's Talk
                    <ArrowUpRightIcon size={18} />
                  </button>
                </div>
              </MotionDiv>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;

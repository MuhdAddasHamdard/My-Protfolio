import React, { useState, useEffect } from "react";
import {
  ListIcon,
  XIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

import { motion, AnimatePresence } from "framer-motion";

const MotionDiv = motion.div;
const MotionButton = motion.button;

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Teaching", id: "teaching" },
  { label: "Vision", id: "vision" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrollspy — highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMobileMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.06 },
    },
    exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
  };

  const surfaces = isScrolled
    ? "bg-navy/85 border-white/10 shadow-card-lg"
    : "bg-navy/55 border-line backdrop-blur-xl";

  return (
    <header className="fixed inset-x-4 top-3 z-50 sm:inset-x-6 sm:top-5 lg:inset-x-10">
      <div
        className={`relative z-50 mx-auto max-w-[1200px] rounded-full border backdrop-blur-2xl transition-all duration-500 ${surfaces}`}
      >
        <div className="flex h-14 items-center justify-between gap-4 sm:h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Gula Khan Hamdard — back to top"
            className="group flex items-center gap-2.5 pl-3 sm:pl-4"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-accent to-teal font-display text-sm font-extrabold text-navy shadow-glow transition-transform duration-500 group-hover:-rotate-6">
              G
            </span>

            <span className="flex flex-col items-start leading-none">
              <span className="font-display text-lg font-extrabold tracking-[0.14em] text-subtle">
                KH
              </span>
              <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.3em] text-slate-500">
                Portfolio
              </span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative z-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-accent"
                    : "text-nav-link hover:bg-white/5 hover:text-accent"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", duration: 0.55 }}
                    className="absolute inset-0 -z-10 rounded-full border border-accent/20 bg-teal/10"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden items-center gap-1.5 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-subtle transition-all duration-300 hover:bg-teal-deep hover:shadow-glow-soft lg:inline-flex"
            >
              Let's Talk
              <ArrowUpRightIcon size={16} weight="bold" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/5 text-slate-200 transition hover:border-accent/30 hover:text-accent lg:hidden"
            >
              {isMobileMenuOpen ? (
                <XIcon size={22} weight="bold" />
              ) : (
                <ListIcon size={22} weight="bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-navy-deep/70 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MotionDiv
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-50 mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-3xl border border-white/10 bg-navy/95 p-3 shadow-card-lg backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <MotionButton
                  key={link.id}
                  variants={itemVariants}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full rounded-2xl px-5 py-3.5 text-left text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-teal/10 text-accent"
                      : "text-slate-200 hover:bg-white/5 hover:text-accent"
                  }`}
                >
                  {link.label}
                </MotionButton>
              ))}

              <MotionButton
                variants={itemVariants}
                onClick={() => scrollToSection("contact")}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-teal px-5 py-3.5 text-base font-semibold text-subtle transition hover:bg-teal-deep"
              >
                Let's Talk
                <ArrowUpRightIcon size={18} weight="bold" />
              </MotionButton>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
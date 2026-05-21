import React, { useState, useEffect } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Teaching", id: "teaching" },
    { label: "Vision", id: "vision" },
    { label: "Let's Chat", id: "contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className="
  fixed top-3 left-3 right-3 lg:left-12 lg:right-12
  rounded-2xl z-50 transition-all duration-300
  bg-[#0B1220]/75
  backdrop-blur-xl
  border border-white/5
  shadow-[0_8px_30px_rgba(0,0,0,0.35)]
"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
text-lg text-slate-300
hover:text-[#5EEAD4]
transition-colors duration-300
"
          >
            GKH
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="text-lg text hover:text-[#5EEAD4] text-slate-300  transition-all"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden  p-2"
            >
              {isMobileMenuOpen ? (
                <XIcon size={24} color="#E5E7EB" weight="thin" />
              ) : (
                <ListIcon size={24} color="#E5E7EB" weight="thin" />
              )}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* BACKGROUND BLUR OVERLAY */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
          fixed inset-0 z-30
          backdrop-blur-2xl backdrop-saturate-150
           rounded bg-transparent
        "
              />

              {/* APPLE GLASS MENU */}
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="
          md:hidden absolute top-full left-0 w-full z-40
          backdrop-blur-xl backdrop-saturate-150
        bg-[#111827]/95
border border-white/5
          shadow-2xl rounded-xl
        "
              >
                <div className="flex flex-col py-4 text-slate-200">
                  {navLinks.map((l) => (
                    <motion.button
                      key={l.id}
                      variants={itemVariants}
                      onClick={() => scrollToSection(l.id)}
                      className="
                w-full px-6 py-3 text-left
              hover:bg-[#0F766E]/20
                transition-colors
              "
                    >
                      {l.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    <nav
      className="fixed top-2 left-12 right-12 rounded-xl z-50 transition-all
       bg-transparent backdrop-blur shadow-md"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-3xl font-bold text-[#0F766E]"
          >
            GKH
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="text-lg text-gray-900 dark:text-gray-200"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden dark:text-gray-400 p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
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
           dark:bg-black/30 rounded bg-transparent
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
          bg-white/60 dark:bg-neutral-900/60
          border border-white/30 dark:border-white/10
          shadow-2xl rounded-xl
        "
              >
                <div className="flex flex-col py-4 text-gray-900 dark:text-white">
                  {navLinks.map((l) => (
                    <motion.button
                      key={l.id}
                      variants={itemVariants}
                      onClick={() => scrollToSection(l.id)}
                      className="
                w-full px-6 py-3 text-left
                hover:bg-white/30 dark:hover:bg-white/10
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
    </nav>
  );
};

export default Navbar;

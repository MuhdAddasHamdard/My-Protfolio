import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Web Developer", "Educator", "Creative", "Intelligent"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // change every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[40px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block text-primary font-semibold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

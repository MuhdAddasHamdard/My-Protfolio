import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MotionSpan = motion.span;

const words = [
  "Frontend Developer",
  "UI/UX Designer",
  "Educator",
  "Creative Thinker",
  "React Developer",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start">
      <span
        aria-hidden
        className="h-px w-12 shrink-0 bg-gradient-to-r from-accent/70 to-transparent sm:w-16"
      />

      <div className="relative h-11 overflow-hidden text-center font-display text-xl font-semibold tracking-tight text-accent sm:h-12 sm:text-2xl lg:text-left">
        <AnimatePresence mode="wait">
          <MotionSpan
            key={words[index]}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block whitespace-nowrap"
          >
            {words[index]}
          </MotionSpan>
        </AnimatePresence>
      </div>
    </div>
  );
}
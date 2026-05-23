import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MotionDiv = motion.div;

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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center lg:justify-start h-14 overflow-hidden">
      {/* Glow Background */}
      <div
        className="
          absolute
          inset-0
          bg-gray-100
          blur-2xl
          opacity-70
          rounded-full
        "
      ></div>

      {/* Rotating Text */}
      <AnimatePresence mode="wait">
        <MotionDiv
          key={words[index]}
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -30,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            relative
            inline-flex
            items-center
            gap-3
            px-6
            py-3
            rounded-2xl
            border
            border-gray-200
            bg-white/80
            backdrop-blur-xl
            shadow-lg
          "
        >
          {/* Animated Dot */}
          <MotionDiv
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="w-3 h-3 rounded-full bg-green-500"
          />

          {/* Text */}
          <span
            className="
              text-base
              md:text-lg
              font-semibold
              tracking-wide
              text-gray-800
            "
          >
            {words[index]}
          </span>
        </MotionDiv>
      </AnimatePresence>
    </div>
  );
}

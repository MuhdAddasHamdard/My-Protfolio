// CursorDot.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-3 h-3 bg-[#0F766E] rounded-full pointer-events-none z-50"
      animate={{ x: position.x - 6, y: position.y - 6 }} // subtract half of width/height to center dot
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CursorDot;

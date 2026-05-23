// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const CursorDot = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     const handleMouseOver = (e) => {
//       const target = e.target;

//       if (
//         target.closest(
//           "button, a, input, textarea, [role='button'], .cursor-hover",
//         )
//       ) {
//         setIsHovering(true);
//       } else {
//         setIsHovering(false);
//       }
//     };

//     window.addEventListener("mousemove", moveCursor);
//     window.addEventListener("mouseover", handleMouseOver);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       window.removeEventListener("mouseover", handleMouseOver);
//     };
//   }, []);

//   return (
//     <>
//       {/* Outer Ring */}
//       <motion.div
//         className="
//           fixed
//           top-0
//           left-0
//           w-10
//           h-10
//           rounded-full
//           border
//           border-gray-400/50
//           bg-black/5
//           backdrop-blur-sm
//           pointer-events-none
//           z-[9999]
//           hidden md:block
//         "
//         animate={{
//           x: position.x - 20,
//           y: position.y - 20,
//           scale: isHovering ? 1.6 : 1,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 300,
//           damping: 25,
//           mass: 0.5,
//         }}
//       />

//       {/* Inner Dot */}
//       <motion.div
//         className="
//           fixed
//           top-0
//           left-0
//           w-3
//           h-3
//           rounded-full
//           bg-black
//           pointer-events-none
//           z-[9999]
//           hidden md:block
//         "
//         animate={{
//           x: position.x - 6,
//           y: position.y - 6,
//           scale: isHovering ? 0.5 : 1,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 28,
//         }}
//       />
//     </>
//   );
// };

// export default CursorDot;

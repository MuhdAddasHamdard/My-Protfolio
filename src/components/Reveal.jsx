import { motion } from "framer-motion";

const MotionDiv = motion.div;

const Reveal = ({ children, delay = 0, y = 28, className = "" }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

export default Reveal;
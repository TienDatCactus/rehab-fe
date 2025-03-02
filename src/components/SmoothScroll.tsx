import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Smooth scrolling effect
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  // Transform scroll to smoothly affect y position
  const y = useTransform(smoothScroll, [0, 1], ["0%", "-30%"]);

  return (
    <div ref={scrollRef} className="relative overflow-hidden h-screen w-full">
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full">
        {children}
      </motion.div>
    </div>
  );
};

export default SmoothScroll;
import style from "antd/es/affix/style";

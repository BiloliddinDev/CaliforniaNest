"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    const handleScroll = () => {
      // Show progress bar after scrolling a bit
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  return (
    <>
      {/* Fixed progress bar at top of screen - only visible when scrolled */}
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-custom-blue z-[100] origin-left"
          style={{ scaleX }}
          transition={{ opacity: { duration: 0.3 } }}
        />
      )}
      
      {/* Circular progress indicator - simplified on mobile */}
      {isMobile ? (
        // Simple button for mobile without animations
        isVisible && (
          <button
            className="fixed bottom-6 right-6 w-10 h-10 bg-white rounded-full shadow-md z-[100] flex items-center justify-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-custom-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )
      ) : (
        // Full animated version for desktop
        <motion.div
          className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg z-[100] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
          style={{ opacity: isVisible ? 1 : 0 }}
          transition={{ opacity: { duration: 0.3 } }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-8 h-8" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-custom-light/50 fill-none stroke-[8px]"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-custom-blue fill-none stroke-[8px]"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: isVisible ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-custom-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ScrollProgress;
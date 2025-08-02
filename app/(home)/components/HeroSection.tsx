"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Typewriter effect for the slogan
  const [text] = useTypewriter({
    words: ['We Design Homes That Feel Like Home'],
    loop: 1,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Memoized button handler
  const handleConsultationClick = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        paddingTop: '80px', // Space for navbar
      }}
    >
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-custom-dark/40 z-10"></div>
        
        {/* Manga-style Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/manga/manga-hero.svg')",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
      </div>
      
      {/* Background Elements with Parallax Effect */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div 
          className="absolute top-1/4 left-1/10 w-64 h-64 bg-custom-blue/20 rounded-full blur-3xl animate-blob"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px)` 
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/10 w-64 h-64 bg-custom-light/30 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{ 
            transform: `translateY(${scrollY * -0.05}px)` 
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-custom-blue/10 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})` 
          }}
        />
      </div>

      {/* Content Container */}
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30"
        style={{
          opacity: Math.max(0, 1 - scrollY * 0.002),
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-light text-white">Welcome to</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-2 drop-shadow-lg">
              HomeDesign Agency
            </h1>
          </motion.div>

          {/* Slogan with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="min-h-[60px] flex items-center justify-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white drop-shadow-md">
              {text}
              <Cursor cursorStyle="|" />
            </h3>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <button
              onClick={handleConsultationClick}
              className="group px-10 py-5 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-custom-blue hover:bg-custom-blue/90 animate-pulse-glow flex items-center justify-center gap-3 text-lg"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
            onClick={handleScrollToAbout}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-white text-sm mb-2 font-medium tracking-wider">Scroll to explore</span>
            <div className="w-8 h-14 border-2 border-white/50 rounded-full flex justify-center p-1 backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce-gentle" />
            </div>
            <motion.div 
              className="mt-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 text-white transform rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import {
  Home,
  ArrowRight,
  Sparkles,
  Palette,
  Users,
  Clock,
  Gem,
  Heart,
} from "lucide-react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Typewriter effect for the slogan
  const [text] = useTypewriter({
    words: [
      'Right brand to the right audience',
      'Get quality of service as you desire',
      'Your choice is always matters'
    ],
    loop: Infinity,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  // Handle scroll for parallax and fade effects - optimized for mobile
  useEffect(() => {
    // Skip intensive parallax effects on mobile
    if (isMobile) {
      // Less frequent updates on mobile
      const handleScroll = () => {
        // Use requestAnimationFrame to limit updates
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
        });
      };
      
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Full parallax on desktop
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  // Scroll to About section
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
      {/* Fullscreen Background Video with Image Fallback */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-custom-dark/40 z-10"></div>
        
        {/* Video Background - Will only play if file exists */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          onError={(e) => {
            // Hide video element if error occurs (file not found)
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
          }}
        >
          <source src="/videos/luxury-interior.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
      </div>
      
  
      {/* Decorative elements - simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {isMobile ? (
          // Static decorative elements for mobile - no animations
          <>
            <div 
              className="absolute top-1/4 left-1/10 w-64 h-64 bg-custom-blue/20 rounded-full blur-3xl"
            />
            <div 
              className="absolute bottom-1/4 right-1/10 w-64 h-64 bg-custom-light/30 rounded-full blur-3xl"
            />
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-custom-blue/10 rounded-full blur-3xl"
            />
          </>
        ) : (
          // Full animated version for desktop
          <>
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
          </>
        )}
      </div>

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30"
        style={{
          opacity: Math.max(0, 1 - scrollY * (isMobile ? 0.001 : 0.002)),
          transform: isMobile ? 
            // Less intensive transform on mobile
            `translateY(${scrollY * 0.1}px)` : 
            `translateY(${scrollY * 0.3}px)`
        }}
      >
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.4 : 0.6 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-light text-white">Welcome to</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-2 drop-shadow-lg">
              HomeDesign Agency
            </h1>
          </motion.div>

          {/* Slogan with Typewriter Effect - simplified on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.1 : 0.3 }}
            className="min-h-[60px] flex items-center justify-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white drop-shadow-md">
              {text}
              <Cursor cursorStyle="|" />
            </h3>
          </motion.div>

          {/* CTA Button - simplified on mobile */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 15 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.2 : 0.6 }}
            className="mb-16"
          >
            <button
              onClick={handleConsultationClick}
              className={`group px-10 py-5 text-white font-semibold rounded-full transition-all duration-300 bg-custom-blue ${
                isMobile ? 
                  // Simplified button for mobile - no animations
                  "w-full sm:w-auto flex items-center justify-center gap-3 text-lg" : 
                  // Full animated version for desktop
                  "hover:-translate-y-2 hover:shadow-xl hover:bg-custom-blue/90 animate-pulse-glow flex items-center justify-center gap-3 text-lg"
              }`}
            >
              <span>Start Your Project</span>
              <ArrowRight className={`w-6 h-6 ${!isMobile && "group-hover:translate-x-2 transition-transform"}`} />
            </button>
          </motion.div>

          {/* Scroll Indicator - simplified or hidden on mobile */}
          {!isMobile && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

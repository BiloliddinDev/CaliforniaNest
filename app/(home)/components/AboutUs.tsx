"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Palette, Clock, Gem, Users } from "lucide-react";

const AboutUs = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use once: true on mobile to prevent repeated animations
  const isInView = useInView(aboutRef, { 
    once: isMobile, 
    amount: isMobile ? 0.1 : 0.3 
  });
  
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
  
  // Animation variants - simplified for mobile
  const fadeInUp = {
    hidden: { opacity: 0, y: isMobile ? 20 : 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.6 }
    }
  };

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-custom-light/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-custom-blue/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">About Us</h2>
          <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.6, delay: 0.2 }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-semibold text-custom-blue mb-6">
              We create spaces that inspire
            </h3>
            <p className="text-custom-dark/80 mb-6 leading-relaxed">
              At HomeDesign Agency, we believe your home should be a reflection of your personality and lifestyle. 
              Our team of passionate designers works closely with you to create spaces that are not just beautiful, 
              but also functional and uniquely yours.
            </p>
            <p className="text-custom-dark/80 mb-8 leading-relaxed">
              What sets us apart is our attention to detail and our commitment to sustainable design practices. 
              We blend aesthetics with practicality to deliver homes that stand the test of time.
            </p>
            
            <div className="flex items-center gap-2 text-custom-blue">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Designed with love and precision</span>
            </div>
          </motion.div>
          
          {/* Animated illustration - simplified for mobile */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: isMobile ? 0.95 : 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: isMobile ? 0.3 : 0.6, 
                  delay: isMobile ? 0.1 : 0.4,
                  type: isMobile ? "tween" : "spring",
                  stiffness: isMobile ? undefined : 100
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative bg-custom-lightest p-6 rounded-2xl shadow-lg border border-custom-light/30">
              {!isMobile && (
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-custom-blue/10 rounded-full blur-xl animate-pulse" />
              )}
              
              <div className="grid grid-cols-2 gap-6">
                {/* Icon cards - simplified for mobile */}
                <div className={`bg-white p-5 rounded-xl shadow-sm border border-custom-light/20 ${!isMobile && "transform hover:-translate-y-1 transition-transform duration-300"}`}>
                  <Palette className={`w-10 h-10 text-custom-blue mb-3 ${!isMobile && "animate-float"}`} />
                  <h4 className="font-medium text-custom-dark">Creative Design</h4>
                </div>
                
                <div className={`bg-white p-5 rounded-xl shadow-sm border border-custom-light/20 ${!isMobile && "transform hover:-translate-y-1 transition-transform duration-300"}`}>
                  <Clock className={`w-10 h-10 text-custom-blue mb-3 ${!isMobile && "animate-float animation-delay-500"}`} />
                  <h4 className="font-medium text-custom-dark">Fast Delivery</h4>
                </div>
                
                <div className={`bg-white p-5 rounded-xl shadow-sm border border-custom-light/20 ${!isMobile && "transform hover:-translate-y-1 transition-transform duration-300"}`}>
                  <Gem className={`w-10 h-10 text-custom-blue mb-3 ${!isMobile && "animate-float animation-delay-700"}`} />
                  <h4 className="font-medium text-custom-dark">Premium Quality</h4>
                </div>
                
                <div className={`bg-white p-5 rounded-xl shadow-sm border border-custom-light/20 ${!isMobile && "transform hover:-translate-y-1 transition-transform duration-300"}`}>
                  <Users className={`w-10 h-10 text-custom-blue mb-3 ${!isMobile && "animate-float animation-delay-300"}`} />
                  <h4 className="font-medium text-custom-dark">Expert Team</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
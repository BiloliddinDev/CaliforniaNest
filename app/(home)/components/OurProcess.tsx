"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OurProcess = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use once: true on mobile to prevent repeated animations
  const isInView = useInView(processRef, { 
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
      id="process" 
      ref={processRef}
      className="py-24 bg-gradient-to-b from-white to-custom-light/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-20 left-1/4 w-64 h-64 bg-custom-blue/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">Our Process</h2>
          <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-custom-dark/70 max-w-2xl mx-auto">
            We follow a streamlined process to bring your vision to life, ensuring every detail is 
            considered and every expectation is exceeded.
          </p>
        </motion.div>
        
        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-custom-light hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1: Plan */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: isMobile ? 15 : 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: isMobile ? 0.3 : 0.6, 
                    delay: isMobile ? 0.05 : 0.1 
                  }
                }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
            >
              <div className={`bg-white rounded-2xl p-8 shadow-lg border border-custom-light/30 h-full ${
                !isMobile && "hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform"
              }`}>
                <div className="w-16 h-16 bg-custom-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <div className="w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center text-white">
                    <span className="text-xl font-bold">1</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-custom-dark mb-4 text-center md:text-left">Plan</h3>
                <p className="text-custom-dark/70 text-center md:text-left">
                  We start by understanding your vision, preferences, and requirements through detailed consultations.
                </p>
                
                <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-custom-blue">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-medium">Initial Consultation</span>
                </div>
              </div>
            </motion.div>
            
            {/* Step 2: Design */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: isMobile ? 15 : 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: isMobile ? 0.3 : 0.6, 
                    delay: isMobile ? 0.1 : 0.3 
                  }
                }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
            >
              <div className={`bg-white rounded-2xl p-8 shadow-lg border border-custom-light/30 h-full ${
                !isMobile && "hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform"
              }`}>
                <div className="w-16 h-16 bg-custom-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <div className="w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center text-white">
                    <span className="text-xl font-bold">2</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-custom-dark mb-4 text-center md:text-left">Design</h3>
                <p className="text-custom-dark/70 text-center md:text-left">
                  Our creative team develops detailed design concepts and 3D visualizations for your approval.
                </p>
                
                <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-custom-blue">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-medium">Concept Development</span>
                </div>
              </div>
            </motion.div>
            
            {/* Step 3: Deliver */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: isMobile ? 15 : 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: isMobile ? 0.3 : 0.6, 
                    delay: isMobile ? 0.15 : 0.5 
                  }
                }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
            >
              <div className={`bg-white rounded-2xl p-8 shadow-lg border border-custom-light/30 h-full ${
                !isMobile && "hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform"
              }`}>
                <div className="w-16 h-16 bg-custom-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <div className="w-12 h-12 bg-custom-blue rounded-full flex items-center justify-center text-white">
                    <span className="text-xl font-bold">3</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-custom-dark mb-4 text-center md:text-left">Deliver</h3>
                <p className="text-custom-dark/70 text-center md:text-left">
                  We execute the approved design with precision, ensuring quality at every step of implementation.
                </p>
                
                <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-custom-blue">
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-sm font-medium">Final Implementation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
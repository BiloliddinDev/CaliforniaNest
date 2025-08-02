"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const WhatWeBelieve = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const isInView = useInView(sectionRef, { 
    once: isMobile, 
    amount: isMobile ? 0.1 : 0.3 
  });
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
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

  // Value cards data
  const valueCards = [
    {
      id: 1,
      title: "Excellence in Every Detail",
      description: "We believe that true luxury lies in the meticulous attention to every element of design, creating spaces that are both visually stunning and functionally perfect.",
      color: "from-custom-blue to-custom-dark",
      icon: "✧",
      delay: 0.1
    },
    {
      id: 2,
      title: "Client-First Philosophy",
      description: "Your vision and satisfaction are our highest priorities. We build lasting partnerships through transparent communication and a deeply collaborative approach.",
      color: "from-custom-dark to-custom-blue",
      icon: "♢",
      delay: 0.2
    },
    {
      id: 3,
      title: "Design That Endures",
      description: "We create timeless spaces that transcend trends, combining innovative techniques with classic principles to deliver designs that remain relevant for years to come.",
      color: "from-custom-blue to-custom-dark",
      icon: "✦",
      delay: 0.3
    }
  ];

  return (
    <section 
      id="beliefs" 
      ref={sectionRef}
      className="py-28 bg-gradient-to-b from-custom-light/30 to-custom-lightest relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-custom-light/30 to-transparent" />
      <div className="absolute top-20 left-1/3 w-72 h-72 bg-custom-blue/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-custom-dark/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-10 left-1/4 w-64 h-64 bg-custom-blue/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">What We Believe</h2>
          <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-custom-dark/80 max-w-2xl mx-auto text-lg leading-relaxed">
            We believe that exceptional design is born from a perfect balance of artistry and purpose. 
            Our approach combines innovative thinking with timeless principles to create spaces that 
            inspire, function flawlessly, and reflect the unique character of each client.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueCards.map((card) => (
            isMobile ? (
              <motion.div
                key={card.id}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.3 }
                  }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-gradient-to-br from-custom-lightest to-white rounded-xl overflow-hidden shadow-md p-6 border-l-4 border-custom-blue hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-5">
                  <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center text-white text-xl animate-pulse-glow shadow-md`}>
                    {card.icon}
                  </div>
                  <div className="h-0.5 flex-grow ml-4 bg-gradient-to-r from-custom-blue/30 to-transparent rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-bold text-custom-dark mb-3">{card.title}</h3>
                
                <p className="text-custom-dark/80">
                  {card.description}
                </p>
              </motion.div>
            ) : (
              // Full animation version for desktop
              <motion.div
                key={card.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: card.delay }
                  }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-gradient-to-br from-custom-lightest to-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-custom-blue transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center text-primary text-2xl animate-pulse-glow shadow-md`}>
                    {card.icon}
                  </div>
                  <div className="h-0.5 flex-grow ml-5 bg-gradient-to-r from-custom-blue/40 to-transparent rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-custom-dark mb-4">{card.title}</h3>
                
                <p className="text-custom-dark/80 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            )
          ))}
        </div>
        
        {/* Final Quote Section */}
       
      </div>
    </section>
  );
};

export default WhatWeBelieve;
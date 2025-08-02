"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const FutureTeam = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use once: true on mobile to prevent repeated animations
  const isInView = useInView(teamRef, { 
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

  // Career opportunities data
  const opportunities = [
    {
      id: 1,
      title: "Interior Designer",
      description: "Join us to create beautiful, functional spaces that transform how people live and work.",
      skills: ["Creativity", "Technical Knowledge", "Client Communication"],
      color: "from-purple-500 to-indigo-600",
      delay: 0.1
    },
    {
      id: 2,
      title: "Architectural Consultant",
      description: "Help shape our architectural vision with innovative ideas and technical expertise.",
      skills: ["Spatial Planning", "3D Modeling", "Sustainable Design"],
      color: "from-emerald-500 to-teal-600",
      delay: 0.2
    },
    {
      id: 3,
      title: "Project Manager",
      description: "Coordinate our design projects from concept to completion with attention to detail.",
      skills: ["Organization", "Leadership", "Problem Solving"],
      color: "from-amber-500 to-orange-600",
      delay: 0.3
    },
    {
      id: 4,
      title: "Marketing Specialist",
      description: "Help us share our design vision with the world through compelling storytelling.",
      skills: ["Digital Marketing", "Content Creation", "Brand Strategy"],
      color: "from-blue-500 to-cyan-600",
      delay: 0.4
    }
  ];

  return (
    <section 
      id="team" 
      ref={teamRef}
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">Join Our Future Team</h2>
          <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-custom-dark/70 max-w-2xl mx-auto">
            We&apos;re building a team of passionate designers and creative thinkers. Explore future opportunities to be part of our journey.
          </p>
        </motion.div>
        
        {/* Career Opportunities Grid - Mobile Friendly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {opportunities.map((opportunity, index) => (
            isMobile ? (
              // Simplified version for mobile - no staggered delays
              <motion.div
                key={opportunity.id}
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
                className="bg-white rounded-xl overflow-hidden shadow-md p-6"
              >
                <div className={`h-2 bg-gradient-to-r ${opportunity.color} rounded-full mb-6`}></div>
                
                <h3 className="text-xl font-bold text-custom-dark mb-3">{opportunity.title}</h3>
                
                <p className="text-custom-dark/70 mb-4">
                  {opportunity.description}
                </p>
                
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-2 text-custom-blue">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-custom-light rounded-full text-custom-dark/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              // Full animation version for desktop
              <motion.div
                key={opportunity.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: opportunity.delay }
                  }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className={`h-2 bg-gradient-to-r ${opportunity.color} rounded-full mb-6`}></div>
                
                <h3 className="text-xl font-bold text-custom-dark mb-3">{opportunity.title}</h3>
                
                <p className="text-custom-dark/70 mb-4">
                  {opportunity.description}
                </p>
                
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-2 text-custom-blue">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-custom-light rounded-full text-custom-dark/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FutureTeam;
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ShowcaseGallery = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use once: true on mobile to prevent repeated animations
  const isInView = useInView(showcaseRef, { 
    once: isMobile, 
    amount: isMobile ? 0.1 : 0.2 
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

  // Featured projects - only 3 static images
  const featuredProjects = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      alt: "Lifestyle influencer content strategy",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop",
      alt: "Premium personal brand identity",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1964&auto=format&fit=crop",
      alt: "Visual storytelling campaign",
    },
  ];

  return (
    <section
      id="showcase"
      ref={showcaseRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-custom-light/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-custom-blue/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">Our Brand Transformations</h2>
          <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-custom-dark/70 max-w-2xl mx-auto">
            Explore our portfolio of captivating personal brands that elevate digital presence and audience engagement.
            Each project showcases authentic storytelling and strategic content creation tailored to the influencer&apos;s unique voice and goals.
          </p>
        </motion.div>
        
        {/* Featured Projects - 3 Static Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: isMobile ? 20 : 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: isMobile ? 0.3 : 0.5, 
                    delay: isMobile ? 0.1 : index * 0.2 
                  }
                }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`rounded-xl overflow-hidden shadow-lg ${!isMobile && 'hover:shadow-xl transition-shadow duration-300'}`}
              {...(!isMobile && { whileHover: { scale: 1.02 } })}
              transition={{ duration: isMobile ? 0.2 : 0.3 }}
            >
              <div className="relative h-80 w-full">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover"
                />
                {isMobile ? (
                  // Always visible caption on mobile
                  <div className="absolute inset-0 bg-gradient-to-t from-custom-dark/50 to-transparent flex items-end p-4">
                    <p className="text-white font-medium">{project.alt}</p>
                  </div>
                ) : (
                  // Hover effect only on desktop
                  <div className="absolute inset-0 bg-gradient-to-t from-custom-dark/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-medium">{project.alt}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: isMobile ? 15 : 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: isMobile ? 0.3 : 0.6, 
                delay: isMobile ? 0.2 : 0.5 
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          {isMobile ? (
            // Simplified button for mobile - no hover effects
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-custom-blue text-white font-medium rounded-full transition-colors duration-300 w-full sm:w-auto"
            >
              <span>Transform Your Brand</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          ) : (
            // Full animated version for desktop
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-custom-blue text-white font-medium rounded-full hover:bg-custom-blue/90 transition-colors duration-300 hover:shadow-lg"
            >
              <span>Transform Your Brand</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseGallery;
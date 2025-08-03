"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Gem, Palette, Users, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const whyUsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use once: true on mobile to prevent repeated animations
  const isInView = useInView(whyUsRef, { 
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
      id="why-us" 
      ref={whyUsRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-custom-light/20 to-transparent" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-custom-blue/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-custom-dark/70 max-w-2xl mx-auto">
            We&apos;re committed to excellence in every aspect of our service, providing you with 
            a premium branding experience that elevates your digital presence and captivates your audience.
          </p>
        </motion.div>
        
        {/* Core Values Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Fast Turnaround */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: isMobile ? 15 : 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: isMobile ? 0.3 : 0.5, 
                  delay: isMobile ? 0.05 : 0.1 
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            {...(!isMobile && { whileHover: { y: -10, transition: { duration: 0.2 } } })}
            className={`bg-white rounded-xl shadow-lg border border-custom-light/30 p-6 ${
              !isMobile && "hover:shadow-xl transition-all duration-300"
            } group`}
          >
            <div className={`w-14 h-14 bg-custom-blue/10 rounded-lg flex items-center justify-center mb-6 ${
              !isMobile && "group-hover:bg-custom-blue/20 transition-colors duration-300"
            }`}>
              <Clock className="w-8 h-8 text-custom-blue" />
            </div>
            
            <h3 className="text-lg font-bold text-custom-dark mb-3">Strategic Approach</h3>
            <p className="text-custom-dark/70 text-sm">
              We develop data-driven strategies that align with your unique voice and audience to maximize engagement and growth.
            </p>
            
            {!isMobile ? (
              <div className="w-0 h-1 bg-custom-blue rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
            ) : (
              <div className="w-1/4 h-1 bg-custom-blue rounded-full mt-6"></div>
            )}
          </motion.div>
          
          {/* Affordable Pricing */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: isMobile ? 15 : 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: isMobile ? 0.3 : 0.5, 
                  delay: isMobile ? 0.1 : 0.2 
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            {...(!isMobile && { whileHover: { y: -10, transition: { duration: 0.2 } } })}
            className={`bg-white rounded-xl shadow-lg border border-custom-light/30 p-6 ${
              !isMobile && "hover:shadow-xl transition-all duration-300"
            } group`}
          >
            <div className={`w-14 h-14 bg-custom-blue/10 rounded-lg flex items-center justify-center mb-6 ${
              !isMobile && "group-hover:bg-custom-blue/20 transition-colors duration-300"
            }`}>
              <Gem className="w-8 h-8 text-custom-blue" />
            </div>
            
            <h3 className="text-lg font-bold text-custom-dark mb-3">Premium Quality</h3>
            <p className="text-custom-dark/70 text-sm">
              Exceptional content and visual assets that reflect the luxury standard your audience expects from influential brands.
            </p>
            
            {!isMobile ? (
              <div className="w-0 h-1 bg-custom-blue rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
            ) : (
              <div className="w-1/4 h-1 bg-custom-blue rounded-full mt-6"></div>
            )}
          </motion.div>
          
          {/* Personalized Designs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: isMobile ? 15 : 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: isMobile ? 0.3 : 0.5, 
                  delay: isMobile ? 0.15 : 0.3 
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            {...(!isMobile && { whileHover: { y: -10, transition: { duration: 0.2 } } })}
            className={`bg-white rounded-xl shadow-lg border border-custom-light/30 p-6 ${
              !isMobile && "hover:shadow-xl transition-all duration-300"
            } group`}
          >
            <div className={`w-14 h-14 bg-custom-blue/10 rounded-lg flex items-center justify-center mb-6 ${
              !isMobile && "group-hover:bg-custom-blue/20 transition-colors duration-300"
            }`}>
              <Palette className="w-8 h-8 text-custom-blue" />
            </div>
            
            <h3 className="text-lg font-bold text-custom-dark mb-3">Authentic Storytelling</h3>
            <p className="text-custom-dark/70 text-sm">
              We craft compelling narratives that showcase your authentic self while strategically positioning your personal brand.
            </p>
            
            {!isMobile ? (
              <div className="w-0 h-1 bg-custom-blue rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
            ) : (
              <div className="w-1/4 h-1 bg-custom-blue rounded-full mt-6"></div>
            )}
          </motion.div>
          
          {/* Friendly Team */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: isMobile ? 15 : 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: isMobile ? 0.3 : 0.5, 
                  delay: isMobile ? 0.2 : 0.4 
                }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            {...(!isMobile && { whileHover: { y: -10, transition: { duration: 0.2 } } })}
            className={`bg-white rounded-xl shadow-lg border border-custom-light/30 p-6 ${
              !isMobile && "hover:shadow-xl transition-all duration-300"
            } group`}
          >
            <div className={`w-14 h-14 bg-custom-blue/10 rounded-lg flex items-center justify-center mb-6 ${
              !isMobile && "group-hover:bg-custom-blue/20 transition-colors duration-300"
            }`}>
              <Users className="w-8 h-8 text-custom-blue" />
            </div>
            
            <h3 className="text-lg font-bold text-custom-dark mb-3">Industry Expertise</h3>
            <p className="text-custom-dark/70 text-sm">
              Our team of specialists understands the nuances of digital influence and stays ahead of platform algorithms and audience trends.
            </p>
            
            {!isMobile ? (
              <div className="w-0 h-1 bg-custom-blue rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
            ) : (
              <div className="w-1/4 h-1 bg-custom-blue rounded-full mt-6"></div>
            )}
          </motion.div>
        </div>
        
        {/* Testimonial or Trust Indicator */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { duration: 0.8, delay: 0.6 }
            }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 text-custom-blue">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Trusted by influential creators and premium brands worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const OurTeam = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(teamRef, { once: false, amount: 0.3 });
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="team" 
      ref={teamRef}
      className="py-24 bg-gradient-to-b from-white to-custom-light/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -top-20 right-1/4 w-64 h-64 bg-custom-blue/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-custom-dark/70 max-w-2xl mx-auto">
            Meet the talented professionals behind our beautiful designs.
          </p>
        </motion.div>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: 0.1 }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-custom-blue/10 flex items-center justify-center relative">
              <Image 
                src="/images/team1.jpg" 
                alt="Sarah Johnson" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-custom-dark">Sarah Johnson</h3>
              <p className="text-custom-blue text-sm">Lead Designer</p>
            </div>
          </motion.div>
          
          {/* Team Member 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: 0.2 }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-custom-blue/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-custom-blue flex items-center justify-center text-white text-2xl font-bold">
                DM
              </div>
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-custom-dark">David Miller</h3>
              <p className="text-custom-blue text-sm">Interior Architect</p>
            </div>
          </motion.div>
          
          {/* Team Member 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: 0.3 }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-custom-blue/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-custom-blue flex items-center justify-center text-white text-2xl font-bold">
                AT
              </div>
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-custom-dark">Anna Thompson</h3>
              <p className="text-custom-blue text-sm">Project Manager</p>
            </div>
          </motion.div>
          
          {/* Team Member 4 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: 0.4 }
              }
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-custom-blue/10 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-custom-blue flex items-center justify-center text-white text-2xl font-bold">
                JL
              </div>
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-custom-dark">James Lee</h3>
              <p className="text-custom-blue text-sm">3D Visualization</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CreativeShowcase = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(showcaseRef, { once: false, amount: 0.3 });
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Creative showcase projects data
  const projects = [
    {
      id: 1,
      title: "Harmony Haven",
      category: "Residential Design",
      description: "A perfect blend of modern aesthetics and natural elements creating a peaceful sanctuary.",
      image: "/image/about-image.png",
      color: "bg-emerald-500",
      delay: 0.1
    },
    {
      id: 2,
      title: "Urban Oasis",
      category: "Interior Transformation",
      description: "Transforming compact urban spaces into breathable, functional works of art.",
      image: "/image/profile-image.png",
      color: "bg-indigo-500",
      delay: 0.2
    },
    {
      id: 3,
      title: "Coastal Retreat",
      category: "Luxury Living",
      description: "Capturing the essence of coastal living with panoramic views and seamless indoor-outdoor flow.",
      image: "/image/about-image.png",
      color: "bg-amber-500",
      delay: 0.3
    },
    {
      id: 4,
      title: "Innovative Workspace",
      category: "Commercial Design",
      description: "Reimagining the workplace as a hub of creativity, collaboration, and productivity.",
      image: "/image/profile-image.png",
      color: "bg-rose-500",
      delay: 0.4
    }
  ];

  return (
    <section 
      id="showcase" 
      ref={showcaseRef}
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
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">Creative Showcase</h2>
          <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-custom-dark/70 max-w-2xl mx-auto">
            Explore our design journey through these transformative projects that redefine living spaces.
          </p>
        </motion.div>
        
        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: project.delay }
                }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-80 overflow-hidden rounded-xl">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay that appears on hover */}
                <motion.div 
                  className={`absolute inset-0 ${project.color}/80 flex flex-col justify-end p-8 text-white`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="text-sm font-medium mb-2 opacity-90"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: activeProject === project.id ? 0 : 20, opacity: activeProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {project.category}
                  </motion.span>
                  
                  <motion.h3 
                    className="text-2xl font-bold mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: activeProject === project.id ? 0 : 20, opacity: activeProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-sm opacity-90"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: activeProject === project.id ? 0 : 20, opacity: activeProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.button
                    className="mt-4 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-medium self-start"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: activeProject === project.id ? 0 : 20, opacity: activeProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    Explore Project
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Title visible when not hovered */}
              <AnimatePresence>
                {activeProject !== project.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.category}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <button className="px-8 py-3 bg-custom-blue text-white rounded-full hover:bg-custom-blue/90 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 transition-all">
            Explore All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeShowcase;
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(portfolioRef, { once: false, amount: 0.3 });
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Villa",
      category: "Residential",
      image: "/images/showcase1.jpg",
      delay: 0.1
    },
    {
      id: 2,
      title: "Urban Apartment Redesign",
      category: "Interior",
      image: "/images/showcase2.jpg",
      delay: 0.2
    },
    {
      id: 3,
      title: "Luxury Penthouse",
      category: "Residential",
      image: "/images/showcase3.jpg",
      delay: 0.3
    },
    {
      id: 4,
      title: "Corporate Office Space",
      category: "Commercial",
      image: "/images/showcase4.jpg",
      delay: 0.4
    }
  ];

  return (
    <section 
      id="portfolio" 
      ref={portfolioRef}
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
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-custom-dark/70 max-w-2xl mx-auto">
            Explore our latest design projects and see how we transform spaces into beautiful homes.
          </p>
        </motion.div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
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
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-64 relative overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-custom-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-white/90 rounded-md text-custom-dark font-medium">View Project</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-custom-blue text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-custom-dark mt-2">{project.title}</h3>
              </div>
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
          <button className="px-8 py-3 bg-custom-blue text-white rounded-full hover:bg-custom-blue/90 transition-colors duration-300 font-medium">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
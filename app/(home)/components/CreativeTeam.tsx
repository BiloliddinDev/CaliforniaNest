"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CreativeTeam = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(teamRef, { once: false, amount: 0.3 });
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Creative Director",
      bio: "With over 15 years of experience in interior design, Sarah brings a unique perspective to every project, blending functionality with artistic vision.",
      skills: ["Spatial Planning", "Color Theory", "Client Communication"],
      image: "/image/profile-image.png",
      color: "from-purple-500 to-indigo-600",
      delay: 0.1
    },
    {
      id: 2,
      name: "David Miller",
      role: "Lead Architect",
      bio: "David specializes in sustainable architecture, creating spaces that are both environmentally conscious and aesthetically stunning.",
      skills: ["Sustainable Design", "3D Modeling", "Technical Drawing"],
      image: "",
      color: "from-emerald-500 to-teal-600",
      delay: 0.2
    },
    {
      id: 3,
      name: "Anna Thompson",
      role: "Interior Designer",
      bio: "Anna has a passion for transforming ordinary spaces into extraordinary experiences, with a keen eye for detail and texture.",
      skills: ["Material Selection", "Lighting Design", "Space Optimization"],
      image: "",
      color: "from-amber-500 to-orange-600",
      delay: 0.3
    },
    {
      id: 4,
      name: "James Lee",
      role: "Project Manager",
      bio: "James ensures that every project runs smoothly from concept to completion, with a focus on timeline management and client satisfaction.",
      skills: ["Project Planning", "Budget Management", "Team Coordination"],
      image: "",
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
          <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">Creative Minds</h2>
          <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-custom-dark/70 max-w-2xl mx-auto">
            Meet the innovative thinkers behind our exceptional designs and transformative spaces.
          </p>
        </motion.div>
        
        {/* Interactive Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: member.delay }
                }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative group cursor-pointer h-96 rounded-xl overflow-hidden shadow-lg"
              onMouseEnter={() => setActiveTeamMember(member.id)}
              onMouseLeave={() => setActiveTeamMember(null)}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${member.color} opacity-80 z-10`}></div>
              
              {/* Member image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={member.image || `/images/placeholder-team.jpg`} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content container */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                {/* Basic info always visible */}
                <motion.h3 
                  className="text-2xl font-bold mb-1"
                  initial={{ y: 0 }}
                  animate={{ y: activeTeamMember === member.id ? -30 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {member.name}
                </motion.h3>
                
                <motion.p 
                  className="text-white/90 text-sm font-medium"
                  initial={{ y: 0 }}
                  animate={{ y: activeTeamMember === member.id ? -30 : 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                >
                  {member.role}
                </motion.p>
                
                {/* Extended info visible on hover */}
                <AnimatePresence>
                  {activeTeamMember === member.id && (
                    <motion.div 
                      className="mt-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p 
                        className="text-sm mb-3 text-white/90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {member.bio}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <h4 className="text-xs font-semibold uppercase tracking-wider mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, index) => (
                            <span 
                              key={index} 
                              className="text-xs px-2 py-1 bg-white/20 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Team Collaboration Message */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <p className="text-custom-dark/70 max-w-2xl mx-auto mb-8">
            Our team collaborates closely with clients to bring visions to life, combining technical expertise with creative innovation.
          </p>
          <button className="px-8 py-3 bg-custom-blue text-white rounded-full hover:bg-custom-blue/90 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 transition-all">
            Work With Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeTeam;
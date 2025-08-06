"use client";

import {useEffect, useRef, useState} from "react";
import {motion, useInView} from "framer-motion";
import Image from "next/image";
import OurMissingIMage from '@/public/image/laptop-with.jpg'

const VisionAndGoals = () => {
    const visionRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
  
    // Use once: true on mobile to prevent repeated animations
    const isInView = useInView(visionRef, {
        once: isMobile,
        amount: isMobile ? 0.1 : 0.3
    });

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
        hidden: {opacity: 0, y: isMobile ? 20 : 60},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: isMobile ? 0.3 : 0.6}
        }
    };

    const visionCards = [
        {
            id: 1,
            title: "Authentic Expression",
            description: "We believe in creating brands that authentically represent your unique voice and vision, focusing on genuine connection with your audience.",
            icon: "✦",
            color: "bg-custom-blue",
            delay: 0.1
        },
        {
            id: 2,
            title: "Strategic Growth",
            description: "Our approach combines creative storytelling with data-driven strategies to build sustainable influence and measurable audience growth.",
            icon: "♲",
            color: "bg-custom-dark",
            delay: 0.2
        },
        {
            id: 3,
            title: "Creator-Centered Process",
            description: "Your personal brand drives our creativity. We collaborate closely to transform your vision into compelling digital narratives.",
            icon: "♡",
            color: "bg-custom-blue",
            delay: 0.3
        },
        {
            id: 4,
            title: "Digital Innovation",
            description: "We continuously explore new platforms and content trends to ensure your brand stays ahead in the digital landscape.",
            icon: "✧",
            color: "bg-custom-dark",
            delay: 0.4
        }
    ];

    return (
        <section
            id="vision"
            ref={visionRef}
            className="py-24 bg-gradient-to-b from-custom-lightest to-custom-light/30 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-custom-lightest to-transparent"/>
            <div
                className="absolute -top-20 right-1/4 w-64 h-64 bg-custom-blue/10 rounded-full blur-3xl animate-pulse-glow"/>
            <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-custom-dark/5 rounded-full blur-3xl animate-blob"/>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">Our Vision & Goals</h2>
                    <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>
                    <p className="text-custom-dark/70 max-w-2xl mx-auto">
                        As a forward-thinking creative agency, we&apos;re driven by a clear vision and ambitious goals
                        to transform digital presence into influential brands.
                    </p>
                </motion.div>

                {/* Vision Cards Grid - Mobile Friendly */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {visionCards.map((card, index) => (
                        isMobile ? (
                            // Simplified version for mobile - no staggered delays
                            <motion.div
                                key={card.id}
                                variants={{
                                    hidden: {opacity: 0, y: 10},
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {duration: 0.3}
                                    }
                                }}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="bg-gradient-to-br from-custom-lightest to-white rounded-xl overflow-hidden shadow-md p-6 border-l-4 border-custom-blue hover:shadow-lg transition-all duration-300"
                            >
                                <div
                                    className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center text-white text-xl mb-4 animate-pulse-glow`}>
                                    {card.icon}
                                </div>

                                <h3 className="text-xl font-bold text-custom-dark mb-3 gradient-text">{card.title}</h3>

                                <p className="text-custom-dark/80">
                                    {card.description}
                                </p>
                            </motion.div>
                        ) : (
                            // Full animation version for desktop
                            <motion.div
                                key={card.id}
                                variants={{
                                    hidden: {opacity: 0, y: 30},
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {duration: 0.5, delay: card.delay}
                                    }
                                }}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="bg-gradient-to-br from-custom-lightest to-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-custom-blue transform hover:-translate-y-1"
                            >
                                <div
                                    className={`w-14 h-14 ${card.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4 animate-pulse-glow`}>
                                    {card.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-custom-dark mb-3 gradient-text">{card.title}</h3>

                                <p className="text-custom-dark/80 leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        )
                    ))}
                </div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-16 bg-gradient-to-br from-custom-blue/15 to-custom-light/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 shadow-lg border border-custom-light/50"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">
                        <div className="w-full md:w-1/3 relative h-64 md:h-80">
                            <div
                                className="relative w-full h-full rounded-xl overflow-hidden shadow-md transform hover:scale-[1.02] transition-all duration-500">
                                <div className="absolute inset-0 bg-custom-blue/20 mix-blend-overlay z-10"></div>
                                <Image
                                    src={OurMissingIMage}
                                    alt="Our Mission"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <h3 className="text-3xl font-bold gradient-text mb-5">Our Mission</h3>
                            <p className="text-custom-dark/80 mb-4 leading-relaxed">
                                We&apos;re on a mission to redefine personal branding by creating authentic, strategic
                                digital presences that resonate with audiences. As a forward-thinking agency, we bring
                                innovative approaches and creative vision to every influencer we partner with.
                            </p>
                            <p className="text-custom-dark/80 mb-5 leading-relaxed">
                                Our goal is to elevate creators to their fullest potential, building lasting
                                partnerships while crafting brands that inspire and engage. Our passion for digital
                                storytelling and commitment to measurable results drive everything we do.
                            </p>
                            {/*<button*/}
                            {/*    className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-custom-blue text-white rounded-lg hover:bg-custom-dark transition-colors duration-300 font-medium mt-4 text-sm sm:text-base flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all">*/}
                            {/*    <span>Learn More About Us</span>*/}
                            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20"*/}
                            {/*         fill="currentColor">*/}
                            {/*        <path fillRule="evenodd"*/}
                            {/*              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"*/}
                            {/*              clipRule="evenodd"/>*/}
                            {/*    </svg>*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VisionAndGoals;
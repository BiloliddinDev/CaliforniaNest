"use client";

import {useEffect, useRef, useState} from "react";
import {motion, useInView} from "framer-motion";
import {BarChart3, ChartPie, Globe, MessageSquare, Target, Users} from "lucide-react";

/**
 * ServicesSection Component
 *
 * A responsive section showcasing the company's services with animated cards.
 * Features:
 * - Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
 * - Animated entrance with staggered card reveals
 * - Interactive hover animations on service cards and icons
 * - Decorative elements with scroll-triggered animations
 * - Character-by-character animated title
 */
const ServicesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [showAllCards, setShowAllCards] = useState(false);

    const isInView = useInView(sectionRef, {
        once: isMobile,
        amount: isMobile ? 0.1 : 0.3
    });

    useEffect(() => {
        const checkMobile = () => {
            const isMobileView = window.innerWidth < 768;
            setIsMobile(isMobileView);
            // Reset to show all cards on desktop
            if (!isMobileView) {
                setShowAllCards(true);
            }
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Function to navigate to next card
    const nextCard = () => {
        setActiveCardIndex((prev) => (prev + 1) % services.length);
    };

    // Function to navigate to previous card
    const prevCard = () => {
        setActiveCardIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    // Toggle between showing one card or all cards on mobile
    const toggleShowAllCards = () => {
        setShowAllCards(prev => !prev);
    };

    const fadeInUp = {
        hidden: {opacity: 0, y: isMobile ? 20 : 60},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: isMobile ? 0.3 : 0.6}
        }
    };

    const fadeInLeft = {
        hidden: {opacity: 0, x: -60},
        visible: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.6, ease: "easeOut"}
        }
    };

    const fadeInRight = {
        hidden: {opacity: 0, x: 60},
        visible: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.6, ease: "easeOut"}
        }
    };

    const staggerContainer = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: isMobile ? 0.1 : 0.15,
                delayChildren: 0.3,
                when: "beforeChildren"
            }
        }
    };

    const serviceCardVariants = {
        hidden: {opacity: 0, y: 20, scale: 0.95},
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.4
            }
        },
        hover: {
            y: -12,
            scale: 1.05,
            boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)",
            background: "linear-gradient(to bottom right, white, rgba(240, 249, 255, 0.8))",
            borderColor: "rgba(59, 130, 246, 0.3)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 8
            }
        }
    };

    const services = [
        {
            icon: <Users className="w-12 h-12 text-custom-blue mb-4"/>,
            title: "Influencer Matchmaking",
            description: "We connect your brand with the most relevant and impactful influencers."
        },
        {
            icon: <Target className="w-12 h-12 text-custom-blue mb-4"/>,
            title: "Marketing Strategy",
            description: "Tailored strategies designed to boost your brand's visibility and growth."
        },
        {
            icon: <ChartPie className="w-12 h-12 text-custom-blue mb-4"/>,
            title: "Audience Analysis",
            description: "Understand your audience and market trends through data-driven insights."
        },
        {
            icon: <Globe className="w-12 h-12 text-custom-blue mb-4"/>,
            title: "Campaign Management",
            description: "We plan, manage, and optimize your influencer campaigns from start to finish."
        },
        {
            icon: <MessageSquare className="w-12 h-12 text-custom-blue mb-4"/>,
            title: "Content Creation",
            description: "We help produce content that tells your story and engages your audience."
        },
        {
            icon: <BarChart3 className="w-12 h-12 text-custom-blue mb-4"/>,
            title: "Performance Analytics",
            description: "Track and analyze your campaign results to continuously improve your ROI."
        }
    ];

    return (
        <section
            id="services"
            ref={sectionRef}
            className="py-24 bg-white relative overflow-hidden"
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-20 relative"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">
                        Our Services
                    </h2>

                    <div className="w-20 h-1 bg-custom-blue mx-auto mb-8 rounded-full"></div>

                    <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
                        We build and nurture authentic relationships between influencers and their audience to maximize
                        impact.
                    </p>
                </motion.div>

                {/* Desktop view - grid layout */}
                {!isMobile && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white text-center p-8 rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                            >
                                <div
                                    className="bg-blue-50  p-5 rounded-xl inline-block mb-5 transition-transform duration-300 group-hover:scale-105">
                                    <div className="text-blue-500">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Mobile view - simple grid */}
                {isMobile && (
                    <div className="grid grid-cols-1 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-md border border-gray-200 active:scale-95 transition-transform"
                            >
                                <div className="bg-blue-50 p-5 rounded-xl inline-block mb-5">
                                    <div className="text-blue-500">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ServicesSection;
"use client";

import {useCallback, useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ArrowRight} from "lucide-react";

// --- TEXTS TO DISPLAY ---
const phrases = [
    "Empowering Brands to Accelerate Growth",
    "We Help To Grow Brands",
    "Smart Growth for Modern Brands",
    "Take the Journey to Success and Victory",
    // "Start Your Journey Toward Success and Growth",
    "Your Journey to Success Starts Here",
    "Success Begins With Action"
];

// --- DISPERSE ANIMATION FUNCTION ---
const generateDisperseAnimation = () => {
    const angle = Math.random() * 2 * Math.PI;
    const distance = 100 + Math.random() * 100;
    return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        rotate: Math.random() * 360,
        scale: 0.3 + Math.random() * 0.5,
        opacity: 0,
        transition: {duration: 1, ease: "easeInOut"},
    } as never;
};


const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({behavior: "smooth"});
        }
    };

    const handleConsultationClick = useCallback(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({behavior: "smooth"});
        }
    }, []);

    // --- TYPING STATE ---
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(true);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (show) {
            let i = 0;
            timeout = setInterval(() => {
                setCurrentText(phrases[index].slice(0, i + 1));
                i++;
                if (i === phrases[index].length) {
                    clearInterval(timeout);
                    setTimeout(() => setShow(false), 3000);
                }
            }, 50);
        } else {
            setTimeout(() => {
                setCurrentText("");
                setIndex((prev) => (prev + 1) % phrases.length);
                setShow(true);
            }, 1000);
        }
        return () => clearInterval(timeout);
    }, [show, index]);

    return (
        <section
            ref={heroRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{paddingTop: "80px"}}
        >
            {/* Background video and overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-custom-dark/40 z-10"></div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover bg-custom-dark/90"
                    poster="https://upload.wikimedia.org/wikipedia/commons/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg"
                    onError={(e) => {
                        const target = e.target as HTMLVideoElement;
                        target.style.display = "none";
                    }}
                >
                    <source src="/videos/luxury-interior.mp4" type="video/mp4"/>
                </video>

                <div
                    className="absolute inset-0 bg-cover bg-center bg-custom-dark/90 z-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)),
              url('https://upload.wikimedia.org/wikipedia/commons/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg')
            `,
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                />
            </div>

            {/* Content */}
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30"
                style={{
                    opacity: Math.max(0, 1 - scrollY * (isMobile ? 0.001 : 0.002)),
                    transform: isMobile
                        ? `translateY(${scrollY * 0.1}px)`
                        : `translateY(${scrollY * 0.3}px)`
                }}
            >
                <div className="text-center max-w-5xl mx-auto">
                    {/* Title */}
                    <motion.div
                        initial={{opacity: 0, y: isMobile ? 10 : 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: isMobile ? 0.4 : 0.6}}
                        className="mb-6"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-5xl text-white mt-2 drop-shadow-lg">
                            We deliver top-tier services to bridge the gap between content creators and business owners.
                        </h1>
                    </motion.div>

                    {/* Particle Typing Effect */}
                    <div className="min-h-[60px] flex flex-wrap justify-center items-center gap-[2px] mb-12">
                        <AnimatePresence mode="wait">
                            {currentText.split("").map((char, i) => (
                                // Har bir harf animatsiyalanadi
                                <motion.span
                                    key={`${index}-${i}-${char}`}
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{
                                        opacity: 0,
                                        scale: [1, 1.3, 0.5],
                                        y: -20,
                                        filter: "blur(2px)",
                                        transition: {duration: 1, ease: "easeInOut"}
                                    }}
                                    transition={{delay: i * 0.02}}
                                    className="relative text-white text-[clamp(1.5rem,4vw,2.5rem)] font-medium inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                    {/* Dust particles - optional visual sprinkle effect */}
                                    <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                       {[...Array(3)].map((_, j) => (
                                           <motion.span
                                               key={j}
                                               className="absolute w-[2px] h-[2px] bg-white rounded-full"
                                               initial={{x: 0, y: 0, opacity: 1}}
                                               animate={{
                                                   x: (Math.random() - 0.5) * 20,
                                                   y: (Math.random() - 0.5) * 20,
                                                   opacity: 0,
                                               }}
                                               transition={{
                                                   duration: 1,
                                                   delay: 0.1 + j * 0.05,
                                                   ease: "easeOut",
                                               }}
                                           />
                                       ))}
                                    </span>
                                </motion.span>

                            ))}
                        </AnimatePresence>

                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{opacity: 0, y: isMobile ? 15 : 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: isMobile ? 0.3 : 0.6, delay: 0.6}}
                        className="mb-16"
                    >
                        <button
                            onClick={handleConsultationClick}
                            className={`group px-10 py-5 text-white font-semibold rounded-full transition-all duration-300 bg-custom-blue ${
                                isMobile
                                    ? "w-full sm:w-auto flex items-center justify-center gap-3 text-lg"
                                    : "hover:-translate-y-2 hover:shadow-xl hover:bg-custom-blue/90 animate-pulse-glow flex items-center justify-center gap-3 text-lg"
                            }`}
                        >
                            <span>Get Started</span>
                            <ArrowRight
                                className={`w-6 h-6 ${
                                    !isMobile && "group-hover:translate-x-2 transition-transform"
                                }`}
                            />
                        </button>
                    </motion.div>

                    {/* Scroll Arrow */}
                    {!isMobile && (
                        <div
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
                            onClick={handleScrollToAbout}
                        >
              <span className="text-white text-sm mb-2 font-medium tracking-wider">
                Scroll to explore
              </span>
                            <div
                                className="w-10 h-14 border-2 border-white/50 rounded-full flex justify-center items-center backdrop-blur-sm">
                                <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce"/>
                            </div>
                            <motion.div
                                className="mt-3"
                                animate={{y: [0, 5, 0]}}
                                transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}}
                            >
                                <ArrowRight className="w-5 h-5 text-white transform rotate-90"/>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
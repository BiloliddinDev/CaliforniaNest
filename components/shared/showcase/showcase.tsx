"use client";

import {useCallback, useEffect, useRef, useState} from "react";
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import {motion} from "framer-motion";
import {ArrowRight,} from "lucide-react";

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();

        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const [text] = useTypewriter({
        words: [
            'Empowering Brands to Accelerate Growth',
            'We Help To Grow Brands',
            "Smart Growth for Modern Brands",
            "Take the Journey to Success and Victory",
            "Start Your Journey Toward Success and Growth",
            "Your Journey to Success Starts Here",
            "Success Begins With Action"
        ],
        loop: Infinity,
        typeSpeed: 80,
        deleteSpeed: 50,
    });

    useEffect(() => {
        if (isMobile) {
            const handleScroll = () => {
                requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                });
            };

            window.addEventListener("scroll", handleScroll, {passive: true});
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            const handleScroll = () => {
                setScrollY(window.scrollY);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [isMobile]);

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    const handleConsultationClick = useCallback(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth'});
        }
    }, []);

    return (
        <section
            ref={heroRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{
                paddingTop: '80px',
            }}
        >
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-custom-dark/40 z-10"></div>

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover bacraund-filter bg-custom-dark/90"
                    poster="https://upload.wikimedia.org/wikipedia/commons/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg"
                    onError={(e) => {
                        const target = e.target as HTMLVideoElement;
                        target.style.display = 'none';
                    }}
                >
                    <source src="/videos/luxury-interior.mp4" type="video/mp4"/>
                </video>

                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bacraund-filter bg-custom-dark/90 z-0"
                    style={{
                        backgroundImage: `
      linear-gradient(
        rgba(0, 0, 0, 0.2), 
        rgba(0, 0, 0, 0.5)
      ), 
      url('https://upload.wikimedia.org/wikipedia/commons/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg')
    `,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                />
            </div>


            <div className="absolute inset-0 pointer-events-none z-20">
                {isMobile ? (
                    <>
                        <div
                            className="absolute top-1/4 left-1/10 w-64 h-64 bg-custom-blue/20 rounded-full blur-3xl"
                        />
                        <div
                            className="absolute bottom-1/4 right-1/10 w-64 h-64 bg-custom-light/30 rounded-full blur-3xl"
                        />
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-custom-blue/10 rounded-full blur-3xl"
                        />
                    </>
                ) : (
                    <>
                        <div
                            className="absolute top-1/4 left-1/10 w-64 h-64 bg-custom-blue/20 rounded-full blur-3xl animate-blob"
                            style={{
                                transform: `translateY(${scrollY * 0.1}px)`
                            }}
                        />
                        <div
                            className="absolute bottom-1/4 right-1/10 w-64 h-64 bg-custom-light/30 rounded-full blur-3xl animate-blob animation-delay-2000"
                            style={{
                                transform: `translateY(${scrollY * -0.05}px)`
                            }}
                        />
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-custom-blue/10 rounded-full blur-3xl animate-pulse"
                            style={{
                                transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0005})`
                            }}
                        />
                    </>
                )}
            </div>

            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30"
                style={{
                    opacity: Math.max(0, 1 - scrollY * (isMobile ? 0.001 : 0.002)),
                    transform: isMobile ?
                        `translateY(${scrollY * 0.1}px)` :
                        `translateY(${scrollY * 0.3}px)`
                }}
            >
                <div className="text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: isMobile ? 10 : 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: isMobile ? 0.4 : 0.6}}
                        className="mb-6"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-5xl text-white mt-2 drop-shadow-lg">
                            We provide quality of service between influencers and brands
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.1 : 0.3}}
                        className="min-h-[60px] flex items-center justify-center mb-12"
                    >
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white drop-shadow-md">
                            {text}
                            <Cursor cursorStyle="|"/>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: isMobile ? 15 : 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0.2 : 0.6}}
                        className="mb-16"
                    >
                        <button
                            onClick={handleConsultationClick}
                            className={`group px-10 py-5 text-white font-semibold rounded-full transition-all duration-300 bg-custom-blue ${
                                isMobile ?
                                    "w-full sm:w-auto flex items-center justify-center gap-3 text-lg" :
                                    "hover:-translate-y-2 hover:shadow-xl hover:bg-custom-blue/90 animate-pulse-glow flex items-center justify-center gap-3 text-lg"
                            }`}
                        >
                            <span>Get Started</span>
                            <ArrowRight
                                className={`w-6 h-6 ${!isMobile && "group-hover:translate-x-2 transition-transform"}`}/>
                        </button>
                    </motion.div>

                    {!isMobile && (
                        <div
                            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
                            onClick={handleScrollToAbout}
                        >
                            <span
                                className="text-white text-sm mb-2 font-medium tracking-wider">Scroll to explore</span>
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
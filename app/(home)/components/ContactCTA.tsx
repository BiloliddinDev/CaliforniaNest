"use client";

import {useEffect, useRef, useState} from "react";
import {motion, useInView} from "framer-motion";

const ContactCTA = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Use once: true on mobile to prevent repeated animations
    const isInView = useInView(contactRef, {
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

    return (
        <section
            id="contact"
            ref={contactRef}
            className="py-24 bg-white relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-custom-blue/5 rounded-full blur-3xl"/>
            <div className="absolute top-20 right-20 w-64 h-64 bg-custom-light/30 rounded-full blur-3xl"/>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div
                    className="bg-gradient-to-r from-custom-blue/10 to-custom-light/30 rounded-3xl p-12 md:p-16 shadow-xl border border-custom-light/30 overflow-hidden relative">
                    {/* Background image */}


                    {/* Decorative elements */}
                    <div
                        className="absolute top-0 right-0 w-40 h-40 bg-custom-blue/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"/>
                    <div
                        className="absolute bottom-0 left-0 w-40 h-40 bg-custom-blue/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"/>

                    <div className="relative z-10">
                        <motion.div
                            variants={{
                                hidden: {opacity: 0, y: isMobile ? 15 : 30},
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {duration: isMobile ? 0.3 : 0.6}
                                }
                            }}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="text-center mb-10"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-dark mb-6">
                                Let&apos;s Elevate Your Digital Presence
                            </h2>
                            <p className="text-custom-dark/70 max-w-2xl mx-auto text-lg">
                                Ready to transform your personal brand into a powerful platform that captivates your
                                audience and opens new opportunities?
                                Our creative team is just a message away.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: {opacity: 0, scale: isMobile ? 0.95 : 0.9},
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: isMobile ? 0.3 : 0.5,
                                        delay: isMobile ? 0.1 : 0.3
                                    }
                                }
                            }}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        >
                            {isMobile ? (
                                // Simplified buttons for mobile - no hover animations
                                <a
                                    href="mailto:shavkat.shomansurov@calinest.com"
                                    className="px-8 py-4 bg-custom-blue text-white font-semibold rounded-full transition-colors duration-300 flex items-center gap-2 shadow-md w-full justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path
                                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                    </svg>
                                    <span>Contact via Email</span>
                                </a>
                            ) : (
                                // Full animated version for desktop
                                <a
                                    href="mailto:shavkat.shomansurov@calinest.com"
                                    className="px-8 py-4 bg-custom-blue text-white font-semibold rounded-full hover:bg-custom-blue/90 transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path
                                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                    </svg>
                                    <span>Contact via Email</span>
                                </a>
                            )}

                            {/*{isMobile ? (*/}
                            {/*    // Simplified buttons for mobile - no hover animations*/}
                            {/*    <a*/}
                            {/*        href="https://wa.me/qr/CLOD2UWPWBHSP1"*/}
                            {/*        className="px-8 py-4 bg-white text-custom-dark font-semibold rounded-full border-2 border-custom-blue/30 transition-colors duration-300 flex items-center gap-2 shadow-md w-full justify-center"*/}
                            {/*    >*/}
                            {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500"*/}
                            {/*             viewBox="0 0 20 20" fill="currentColor">*/}
                            {/*            <path fillRule="evenodd"*/}
                            {/*                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"*/}
                            {/*                  clipRule="evenodd"/>*/}
                            {/*        </svg>*/}
                            {/*        <span>WhatsApp</span>*/}
                            {/*    </a>*/}
                            {/*) : (*/}
                            {/*    // Full animated version for desktop*/}
                            {/*    <a*/}
                            {/*        href="https://wa.me/qr/CLOD2UWPWBHSP1"*/}
                            {/*        className="px-8 py-4 bg-white text-custom-dark font-semibold rounded-full border-2 border-custom-blue/30 hover:border-custom-blue transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"*/}
                            {/*    >*/}
                            {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500"*/}
                            {/*             viewBox="0 0 20 20" fill="currentColor">*/}
                            {/*            <path fillRule="evenodd"*/}
                            {/*                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"*/}
                            {/*                  clipRule="evenodd"/>*/}
                            {/*        </svg>*/}
                            {/*        <span>WhatsApp</span>*/}
                            {/*    </a>*/}
                            {/*)}*/}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
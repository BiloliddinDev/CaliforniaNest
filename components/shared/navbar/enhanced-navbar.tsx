"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {Menu, X} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import logo from "@/public/image/californianest-high-resolution-logo-transparent.png";

const sectionIds = ["about", "services", "vision", "contact"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 120; // Adjust based on navbar height

            setScrolled(window.scrollY > 50);

            for (let i = 0; i < sectionIds.length; i++) {
                const id = sectionIds[i];
                const el = document.getElementById(id);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY;
                    const bottom = top + el.offsetHeight;

                    if (scrollPos >= top && scrollPos < bottom) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        handleScroll(); // Run once on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.nav
            initial={{y: 0}}
            animate={{y: 0}}
            transition={{duration: 0.5, ease: "easeOut"}}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md shadow-lg py-4`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <div className="relative w-[140px] h-[70px]">
                                <Image
                                    src={logo}
                                    alt="Californianest Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center ml-10">
                        <NavLink href="#about" label="About" isActive={activeSection === "about"}/>
                        <NavLink href="#services" label="Services" isActive={activeSection === "services"}/>
                        <NavLink href="#vision" label="Our Vision" isActive={activeSection === "vision"}/>
                        <NavLink href="#contact" label="Contact" isActive={activeSection === "contact"}/>
                        <Link
                            href="#contact"
                            className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 bg-custom-blue text-white hover:bg-custom-blue/90 hover:shadow-lg"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-custom-dark hover:bg-custom-light/20 focus:outline-none transition-colors duration-300"
                        >
                            {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                        className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <MobileNavLink href="#about" label="About" onClick={toggleMenu}
                                           isActive={activeSection === "about"}/>
                            <MobileNavLink href="#services" label="Services" onClick={toggleMenu}
                                           isActive={activeSection === "services"}/>
                            <MobileNavLink href="#vision" label="Our Vision" onClick={toggleMenu}
                                           isActive={activeSection === "vision"}/>
                            <MobileNavLink href="#contact" label="Contact" onClick={toggleMenu}
                                           isActive={activeSection === "contact"} isButton/>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

const NavLink = ({
                     href,
                     label,
                     isActive
                 }: {
    href: string;
    label: string;
    isActive: boolean;
}) => (
    <Link
        href={href}
        className="text-sm font-medium relative group text-custom-dark transition-colors duration-300"
    >
        {label}
        <span
            className={`absolute bottom-0 left-0 h-0.5 bg-custom-blue transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
        />
    </Link>
);

const MobileNavLink = ({
                           href,
                           label,
                           onClick,
                           isButton = false,
                           isActive = false
                       }: {
    href: string;
    label: string;
    onClick: () => void;
    isButton?: boolean;
    isActive?: boolean;
}) => (
    <Link
        href={href}
        onClick={onClick}
        className={`block px-3 py-4 rounded-md text-base font-medium transition-all duration-300 ${
            isButton
                ? "bg-custom-blue text-white hover:bg-custom-blue/90 text-center mt-4"
                : `text-custom-dark hover:bg-custom-light/20 border-b border-custom-light/30 ${
                    isActive ? "border-l-4 border-l-custom-blue pl-4" : ""
                }`
        }`}
    >
        {label}
    </Link>
);

export default Navbar;

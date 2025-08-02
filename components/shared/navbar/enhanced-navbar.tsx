"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import  logo from  "@/public/image/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      const sections = ["home", "about", "process", "showcase", "why-us", "portfolio", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src={logo} 
                width={180} 
                height={60}
                alt="Californianest Logo" 
                className="h-10 mr-2" 
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#about" label="About" scrolled={scrolled} isActive={activeSection === "about"} />
              <NavLink href="#process" label="Our Process" scrolled={scrolled} isActive={activeSection === "process"} />
              <NavLink href="#showcase" label="Our Work" scrolled={scrolled} isActive={activeSection === "showcase"} />
              <NavLink href="#why-us" label="Why Us" scrolled={scrolled} isActive={activeSection === "why-us"} />
              <NavLink href="#portfolio" label="Portfolio" scrolled={scrolled} isActive={activeSection === "portfolio"} />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 
                  ${
                    scrolled
                      ? "bg-custom-blue text-white hover:bg-custom-blue/90"
                      : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                  } hover:shadow-lg`}
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? "text-custom-dark hover:bg-custom-light/20" : "text-black hover:bg-white/10"
              } focus:outline-none transition-colors duration-300`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="#about" label="About" onClick={toggleMenu} isActive={activeSection === "about"} />
              <MobileNavLink href="#process" label="Our Process" onClick={toggleMenu} isActive={activeSection === "process"} />
              <MobileNavLink href="#showcase" label="Our Work" onClick={toggleMenu} isActive={activeSection === "showcase"} />
              <MobileNavLink href="#why-us" label="Why Choose Us" onClick={toggleMenu} isActive={activeSection === "why-us"} />
              <MobileNavLink href="#portfolio" label="Portfolio" onClick={toggleMenu} isActive={activeSection === "portfolio"} />
              <MobileNavLink href="#contact" label="Contact Us" onClick={toggleMenu} isButton isActive={activeSection === "contact"} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Removed duplicate scroll progress indicator */}
    </motion.nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ 
  href, 
  label, 
  scrolled,
  isActive
}: { 
  href: string; 
  label: string; 
  scrolled: boolean;
  isActive: boolean;
}) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className={`text-sm font-medium navbar-glow relative group ${
          scrolled ? "text-custom-dark" : "text-black"
        } transition-colors duration-300`}
      >
        {label}
        <span 
          className={`absolute bottom-0 left-0 h-0.5 bg-custom-blue transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    </motion.div>
  );
};

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
}) => {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
    >
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
    </motion.div>
  );
};

export default Navbar;
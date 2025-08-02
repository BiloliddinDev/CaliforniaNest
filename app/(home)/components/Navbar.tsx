"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className={`text-2xl font-bold ${scrolled ? "text-custom-blue" : "text-white"} transition-colors duration-300`}>
                HomeDesign
              </span>
              <span className={`ml-1 text-2xl font-light ${scrolled ? "text-custom-dark" : "text-white/80"} transition-colors duration-300`}>
                Agency
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <NavLink href="#about" label="About" scrolled={scrolled} />
              <NavLink href="#process" label="Our Process" scrolled={scrolled} />
              <NavLink href="#why-us" label="Why Choose Us" scrolled={scrolled} />
              <NavLink href="#vision" label="Our Vision & Goals" scrolled={scrolled} />
              <NavLink href="#team" label="Join Our Team" scrolled={scrolled} />
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
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? "text-custom-dark hover:bg-custom-light/20" : "text-white hover:bg-white/10"
              } focus:outline-none transition-colors duration-300`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
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
              <MobileNavLink href="#about" label="About" onClick={toggleMenu} />
              <MobileNavLink href="#process" label="Our Process" onClick={toggleMenu} />
              <MobileNavLink href="#why-us" label="Why Choose Us" onClick={toggleMenu} />
              <MobileNavLink href="#vision" label="Our Vision & Goals" onClick={toggleMenu} />
              <MobileNavLink href="#team" label="Join Our Team" onClick={toggleMenu} />
              <MobileNavLink href="#contact" label="Contact Us" onClick={toggleMenu} isButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ href, label, scrolled }: { href: string; label: string; scrolled: boolean }) => {
  return (
    <Link
      href={href}
      className={`text-sm font-medium navbar-glow relative group ${
        scrolled ? "text-custom-dark" : "text-white"
      } transition-colors duration-300`}
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom-blue transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ 
  href, 
  label, 
  onClick,
  isButton = false
}: { 
  href: string; 
  label: string; 
  onClick: () => void;
  isButton?: boolean;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-3 py-4 rounded-md text-base font-medium transition-all duration-300 ${
        isButton 
          ? "bg-custom-blue text-white hover:bg-custom-blue/90 text-center mt-4" 
          : "text-custom-dark hover:bg-custom-light/20 border-b border-custom-light/30"
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
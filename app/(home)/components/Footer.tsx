"use client";

import Link from "next/link";
import { Home, Mail, Phone, Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-custom-dark text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5" />
      <div className="absolute -top-40 right-20 w-80 h-80 bg-custom-blue/10 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                HomeDesign
              </span>
              <span className="ml-1 text-2xl font-light text-white/80">
                Agency
              </span>
            </Link>
            <p className="text-custom-light/80 mb-6">
              Creating beautiful, functional spaces that reflect your unique style and personality.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-custom-light hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-custom-light hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-custom-light hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-custom-light/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-custom-light/80 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-custom-light/80 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-custom-light/80 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-custom-light/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-custom-light/80">Interior Design</li>
              <li className="text-custom-light/80">Space Planning</li>
              <li className="text-custom-light/80">Color Consultation</li>
              <li className="text-custom-light/80">Furniture Selection</li>
              <li className="text-custom-light/80">3D Visualization</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Home className="w-5 h-5 text-custom-blue mt-1" />
                <span className="text-custom-light/80">
                  123 Design Street, Creative City, 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-custom-blue" />
                <span className="text-custom-light/80">
                  (123) 456-7890
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-custom-blue" />
                <span className="text-custom-light/80">
                  contact@homedesignagency.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-custom-light/20 mb-8"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-custom-light/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HomeDesign Agency. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-custom-light hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import Link from "next/link";
import {ArrowUp, Home, Mail, Phone} from "lucide-react";
import Image from "next/image";
import Logo from "@/public/image/footer-logo.png"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-custom-dark text-white pt-16 pb-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5"/>
            <div className="absolute -top-40 right-20 w-80 h-80 bg-custom-blue/10 rounded-full blur-3xl opacity-20"/>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="flex items-center mb-8">
                            <Image
                                width={180}
                                height={80}
                                src={Logo}
                                alt="Website Logo"
                                className=""
                            />
                        </Link>
                        <p className="text-custom-light/80 mb-6">
                            Creating beautiful, functional spaces that reflect your unique style and personality.
                        </p>
                        {/*<div className="flex items-center gap-4">*/}
                        {/*    <a href="#" className="text-custom-light hover:text-white transition-colors">*/}
                        {/*        <Facebook className="w-5 h-5"/>*/}
                        {/*    </a>*/}
                        {/*    <a href="#" className="text-custom-light hover:text-white transition-colors">*/}
                        {/*        <Instagram className="w-5 h-5"/>*/}
                        {/*    </a>*/}
                        {/*    <a href="#" className="text-custom-light hover:text-white transition-colors">*/}
                        {/*        <Twitter className="w-5 h-5"/>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>

                    {/* Quick Links */}
                    <div className={'md:ml-20 ml-0'}>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#about" className="text-custom-light/80 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#services"
                                      className="text-custom-light/80 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#vision"
                                      className="text-custom-light/80 hover:text-white transition-colors">
                                    Our Vision
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact"
                                      className="text-custom-light/80 hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={""}>
                        <h3 className="text-lg font-bold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li className="text-custom-light/80">Influencer Matchmaking</li>
                            <li className="text-custom-light/80">Marketing Strategy</li>
                            <li className="text-custom-light/80">Audience Analysis</li>
                            <li className="text-custom-light/80"> Campaign Management</li>
                            <li className="text-custom-light/80">Content Creation</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            {/*<li className="flex items-center gap-3 w-[500px] ">*/}
                            {/*    <Home className="w-6 h-6 text-custom-blue"/>*/}
                            {/*    <span*/}
                            {/*        className="text-custom-light/80 mt-2"> 3950 constitution ave North Highlands,CA 95660   </span>*/}
                            {/*</li>*/}

                            <li className="flex items-center gap-3">
                                <a className={"flex items-center gap-3"} href="mailto:shavkat.shomansurov@calinest.com">
                                    <Mail className="w-5 h-5 text-custom-blue"/>
                                    <span className="text-custom-light/80">
                                shavkat.shomansurov@calinest.com
                                 </span>
                                </a>
                            </li>


                {/*            <li className="flex items-center gap-3">*/}
                {/*                <Phone className="w-5 h-5 text-custom-blue"/>*/}
                {/*                <a href="tel:+12792027267">*/}
                {/*   <span className="text-custom-light/80">*/}
                {/*  +1 279 202 72 67*/}
                {/*</span>*/}
                {/*                </a>*/}
                {/*            </li>*/}


                            {/*<li className="flex items-center gap-3">*/}
                            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500"*/}
                            {/*         viewBox="0 0 20 20" fill="currentColor">*/}
                            {/*        <path fillRule="evenodd"*/}
                            {/*              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"*/}
                            {/*              clipRule="evenodd"/>*/}
                            {/*    </svg>*/}
                            {/*    <a href="https://wa.me/qr/CLOD2UWPWBHSP1">*/}
                            {/*    <span className="text-custom-light/80">*/}
                            {/*       +1 279 202 72 67*/}
                            {/*     </span>*/}
                            {/*    </a>*/}
                            {/*</li>*/}


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
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform"/>
                    </button>
                </div>
            </div>
        </footer>
    );
}

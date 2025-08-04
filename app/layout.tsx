import type {Metadata} from "next";
import "./globals.css";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/enhanced-navbar";
import ScrollProgress from "@/components/shared/scroll-progress";
import GsapLoader from "@/components/shared/gsap-loader";
import {geistMono, geistSans} from "@/lib/fonts";
import React from "react";
import {Analytics} from "@vercel/analytics/next"
import favicon from '@/public/image/icon.png'

export const metadata: Metadata = {
    title: "California Nest",
    description: "Designing Homes with Heart - Modern Home Design Agency",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <title>Calinest</title>
            <link rel="icon" href={`${favicon.src}`}/>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <GsapLoader/>
        <Navbar/>
        <ScrollProgress/>
        <main>
            {children}
        </main>
        <Footer/>

        <Analytics/>
        {/* Cursor blob effect - only on desktop */}
        <div id="cursor-blob"
             className="fixed hidden md:block w-64 h-64 bg-custom-blue/5 rounded-full blur-3xl pointer-events-none -z-10"/>

        <script
            dangerouslySetInnerHTML={{
                __html: `
              // Only initialize cursor effect on desktop
              if (window.innerWidth >= 768) {
                // Throttle function to limit execution frequency
                const throttle = (func, limit) => {
                  let inThrottle;
                  return function() {
                    const args = arguments;
                    const context = this;
                    if (!inThrottle) {
                      func.apply(context, args);
                      inThrottle = true;
                      setTimeout(() => inThrottle = false, limit);
                    }
                  };
                };
                
                // Throttled cursor follower effect
                document.addEventListener('mousemove', throttle((e) => {
                  const blob = document.getElementById('cursor-blob');
                  if (blob) {
                    blob.style.transform = \`translate(\${e.clientX - 128}px, \${e.clientY - 128}px)\`;
                  }
                }, 16)); // ~60fps
              }
            `
            }}
        />
        </body>
        </html>
    );
}

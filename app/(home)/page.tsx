"use client";

import HeroSection from "@/components/shared/showcase/showcase";
import AboutUs from "./components/AboutUs";
import VisionAndGoals from "./components/VisionAndGoals";
import WhatWeBelieve from "./components/WhatWeBelieve";
import ContactCTA from "./components/ContactCTA";
import ServicesSection from "./components/ServicesSection";

export default function HomePage() {
    return (
        <div className="overflow-x-hidden">
            <HeroSection/>
            <AboutUs/>
            <ServicesSection/>
            {/*<OurProcess/>*/}
            {/*<WhyChooseUs/>*/}
            {/*<ShowcaseGallery/>*/}
            <VisionAndGoals/>
            <WhatWeBelieve/>
            <ContactCTA/>
        </div>
    );
}
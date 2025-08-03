"use client";

import HeroSection from "@/components/shared/showcase/showcase";
import AboutUs from "./components/AboutUs";
import OurProcess from "./components/OurProcess";
import ShowcaseGallery from "./components/ShowcaseGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import VisionAndGoals from "./components/VisionAndGoals";
import WhatWeBelieve from "./components/WhatWeBelieve";
import ContactCTA from "./components/ContactCTA";

export default function HomePage() {
    return (
        <div className="overflow-x-hidden">
            <HeroSection/>
            <AboutUs/>
            {/*<OurProcess/>*/}
            {/*<WhyChooseUs/>*/}
            {/*<ShowcaseGallery/>*/}
            <VisionAndGoals/>
            <WhatWeBelieve/>
            <ContactCTA/>
        </div>
    );
}
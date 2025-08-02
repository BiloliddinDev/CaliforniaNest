"use client";

import { useEffect } from "react";
import Script from "next/script";

const GsapLoader = () => {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("GSAP loaded successfully");
        }}
      />
    </>
  );
};

export default GsapLoader;
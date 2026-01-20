"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  // You can replace these with your local images in /public
  "/burger01.jpeg", 
  "/hello.jpeg",
  "/burger03.jpeg",
];

export function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic: Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000ms = 5 seconds
    console.log(images.length)

    return () => clearInterval(interval); // Cleanup timer on unmount
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      {/* Dark Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {images.map((src, index) => {
        const isActive = index === currentIndex;
        
        return (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Background"
              fill
              className="object-cover object-center md:animate-slow-zoom"
              priority={index === 0}
            />
          </div>
        );
      })}
    </div>
  );
}
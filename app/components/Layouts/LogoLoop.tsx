"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    src: "/images/D-purpose.png",
    alt: "D Purpose",
  },
  {
    src: "/images/meal-maven.webp",
    alt: "Meal Maven",
  },
  {
    src: "/images/drig2.png",
    alt: "Drig",
  },
  {
    src: "/images/pc2.png",
    alt: "professional Crunches",
  },
  {
    src: "/images/om-muruga2.png",
    alt: "om muruga gold loan",
  },
  {
    src: "/images/mdees2.png",
    alt: "Mdees Furniture",
  },
  {
    src: "/images/zx-logo.webp",
    alt: "ZX Aerospace",
  },
];
const logos2 = [
  {
    src: "/images/fitrock2.png",
    alt: "Fitrock",
  },
  {
    src: "/images/sarakshi2.png",
    alt: "Fitrock",
  },
  {
    src: "/images/chefmn2.png",
    alt: "Chef MN",
  },
  {
    src: "/images/rebrandd2.png",
    alt: "Rebrandd",
  },
  {
    src: "/images/ima2.png",
    alt: "ima",
  },
];

export default function LogoScroll() {
  return (
    <section className="w-full bg-white overflow-hidden flex flex-col gap-4 max-sm:gap-0">
      {/* Row 1 - Left to Right */}
      <div className="relative overflow-hidden py-2">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 w-20 sm:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 sm:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 sm:gap-20 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
            repeatType: "loop",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <a
              key={`top-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={180}
                className="h-16 sm:h-24 lg:h-32 w-auto object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out"
              />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative overflow-hidden py-2">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 w-20 sm:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 sm:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 sm:gap-20 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
            repeatType: "loop",
          }}
        >
          {[...logos2, ...logos2].map((logo, index) => (
            <a
              key={`bottom-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={180}
                className="h-16 sm:h-24 lg:h-32 w-auto object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500 ease-in-out"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

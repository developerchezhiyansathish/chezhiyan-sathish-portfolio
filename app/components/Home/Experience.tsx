"use client";
import React from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return (
    <main className="w-full flex flex-col h-auto items-center justify-evenly gap-32 bg-white px-8 pt-9 pb-24 max-sm:px-3 max-sm:py-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 80 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="inner-container w-full max-w-[1440px]"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-dmsans text-black text-8xl font-medium mb-28 max-sm:text-3xl max-sm:mb-12"
        >
          Experience
        </motion.h2>

        {/* Experience 1 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex flex-row items-start justify-center gap-16 max-sm:flex-col max-sm:gap-5"
        >
          <div className="w-1/4 max-sm:w-full">
            <h3 className="text-black font-dmsans font-medium text-left text-4xl max-sm:text-2xl">
             2024 – Present
            </h3>
          </div>
          <div className="w-3/4 max-sm:w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-black font-dmsans font-medium text-left text-4xl pb-4 max-sm:text-2xl"
            >
              Senior Web Developer
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black font-dmsans font-medium text-left text-3xl pb-4 max-sm:text-xl"
            >
              Drig.Digital
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-black font-dmsans font-light text-left text-2xl pb-4 max-sm:text-base"
            >
              Have taken sole accountability of developing, & deploying over 12+ customised, highly functional websites using diverse platforms like React.js, Next.js,  WordPress, HTML, and Shopify, serving a wide range of businesses from Health & Wellness, Engineering, F&B, Personal Branding, Technology and Entertainment. Further implemented dynamic web applications with the utilisation of the MERN stack, which assures the performance & scalability of it. Coordinated & collaborated with the internal UI/UX design teams to ensure the generation of highly quality and responsive websites.
            </motion.p>
          </div>
        </motion.div>

        <motion.hr
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="h-line"
        />

        {/* Experience 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex flex-row items-start justify-center gap-16 max-sm:flex-col max-sm:gap-5"
        >
          <div className="w-1/4 max-sm:w-full">
            <h3 className="text-black font-dmsans font-medium text-left text-4xl max-sm:text-2xl">
             2023 – 2024
            </h3>
          </div>
          <div className="w-3/4 max-sm:w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-black font-dmsans font-medium text-left text-4xl pb-4 max-sm:text-2xl"
            >
              Web Developer
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black font-dmsans font-medium text-left text-3xl pb-4 max-sm:text-xl"
            >
              BCC Martech
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-black font-dmsans font-light text-left text-2xl pb-4 max-sm:text-base"
            >
              Over 1.5+ years of proven expertise in building client-specific, highly functional, responsive websites on different platforms like React JS, HTML, CSS, Next JS & WordPress. Further, implemented best practices of SEO to improve the website rankings on search engines. In addition, also made sure to double check periodically at regular intervals on regular maintenance & updating the websites. 
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Experience;

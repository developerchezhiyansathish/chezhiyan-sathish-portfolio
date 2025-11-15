"use client";
import React from "react";
import { motion } from "framer-motion";
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import { BsDot } from "react-icons/bs";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const CaseStudy = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <main className="w-full flex flex-col h-auto items-center justify-evenly gap-32 bg-white px-8 pt-24 pb-16 max-sm:px-3 max-sm:py-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: ["easeOut"] }}
        className="inner-container w-full max-w-[1440px]"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1, ease: ["easeOut"] }}
          className="font-dmsans text-black text-8xl font-medium mb-28 text-left max-sm:text-3xl max-sm:mb-12"
        >
          Impressive Works
        </motion.h2>

        {/* Animated container for all projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full flex flex-col gap-5 max-sm:gap-0"
        >
          {/* First Row */}
          <motion.div className="w-full flex flex-row items-center justify-between gap-12 max-sm:flex-col max-sm:gap-6">
            <motion.div
              className="w-1/2 max-sm:w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-full overflow-hidden rounded-2xl">
                <motion.img
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: ["easeOut"] }}
                  className="w-full rounded-2xl border-[1px]"
                  src="/images/loan-app.webp"
                  alt="Loan App"
                />
                <a href="/portfolio/om-muruga-gold-loan" target="_blank">
                  <motion.h2
                    className="w-full py-4 rounded-3xl font-dmsans text-[#000] text-4xl font-light my-4 flex items-center gap-2 project-name max-sm:text-xl"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Gold Loan App - MERN{" "}
                    <PiArrowCircleUpRightThin
                      fontSize={35}
                      className="project-arrow"
                    />
                  </motion.h2>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="w-1/2 max-sm:w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-full overflow-hidden rounded-2xl">
                <motion.img
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: ["easeOut"] }}
                  className="w-full rounded-2xl border-[1px]"
                  src="/images/Electro-Website.webp"
                  alt="Electro Website"
                />
                <a href="/portfolio/electro-ecommerce" target="_blank">
                  <motion.h2
                    className="w-full py-4 rounded-3xl font-dmsans text-[#000] text-4xl font-light my-4 flex items-center gap-2 project-name max-sm:text-xl"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Electro Ecommerce Website - MERN{" "}
                    <PiArrowCircleUpRightThin
                      fontSize={35}
                      className="project-arrow"
                    />
                  </motion.h2>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Second Row */}
          <motion.div className="w-full flex flex-row items-center justify-between gap-12 mt-7 max-sm:flex-col max-sm:gap-6">
            <motion.div
              className="w-1/2 max-sm:w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-full overflow-hidden rounded-2xl">
                <motion.img
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: ["easeOut"] }} // <-- fixed
                  className="w-full rounded-2xl border-[1px]"
                  src="/images/Quick-blogs.webp"
                  alt="Quick Blogs"
                />
                <a href="/portfolio/quick-drig-blog/" target="_blank">
                  <motion.h2
                    className="w-full py-4 rounded-3xl font-dmsans text-[#000] text-4xl font-light my-4 flex items-center gap-2 project-name max-sm:text-xl"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Quick Blogs App - MERN{" "}
                    <PiArrowCircleUpRightThin
                      fontSize={35}
                      className="project-arrow"
                    />
                  </motion.h2>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="w-1/2 max-sm:w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-full overflow-hidden rounded-2xl">
                <motion.img
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: ["easeOut"] }} // <-- fixed
                  className="w-full rounded-2xl border-[1px]"
                  src="/images/meal.webp"
                  alt="Meal Maven"
                />
                <a href="https://mealmaven.org/" target="_blank">
                  <motion.h2
                    className="w-full py-4 rounded-3xl font-dmsans text-[#000] text-4xl font-light my-4 flex items-center gap-2 project-name max-sm:text-xl"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 150 }}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Meal Maven Website - React{" "}
                    <PiArrowCircleUpRightThin
                      fontSize={35}
                      className="project-arrow"
                    />
                  </motion.h2>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Third Row */}
        <div className="w-full flex flex-row items-center justify-center gap-12 mt-10">
          <a
            href="/portfolio"
            className="text-black font-inter font-[400] text-xl text-center px-4 py-2 flex flex-row gap-3 items-center justify-center rounded-3xl border-[1px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            {" "}
            <BsDot className="dot" /> Explore more
          </a>
        </div>
      </motion.div>
    </main>
  );
};

export default CaseStudy;

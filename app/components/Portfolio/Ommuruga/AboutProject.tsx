"use client";
import React from "react";
import { motion } from "framer-motion";
import { PiArrowCircleDownLeftThin } from "react-icons/pi";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import ProjectSlider from "../../Layouts/ProjectLayout";

const AboutProjects = () => {
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

  const electroSlides = [
    { image: "/images/project-loan/om-1.png" },
    { image: "/images/project-loan/om-2.png" },
    { image: "/images/project-loan/om-3.png" },
    { image: "/images/project-loan/om-4.png" },
    { image: "/images/project-loan/om-5.png" },
    { image: "/images/project-loan/om-6.png" },
    { image: "/images/project-loan/om-7.png" },
    { image: "/images/project-loan/om-8.png" },
    { image: "/images/project-loan/om-9.png" },
    { image: "/images/project-loan/om-10.png" },
    { image: "/images/project-loan/om-11.png" },
    { image: "/images/project-loan/om-12.png" },
  ];

  return (
    <>
      <main className="w-full flex flex-col h-auto items-center justify-evenly gap-20 bg-white px-8 pt-24 pb-16 max-sm:px-3 max-sm:py-6 overflow-hidden max-sm:gap-5">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inner-container w-full max-w-[1440px] flex flex-row items-start justify-between gap-5 max-sm:flex-col"
        >
          <div className="w-[60%] pr-16 max-sm:pr-0 max-sm:w-full max-sm:text-base max-sm:pt-4">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-black font-dmsans font-semibold text-3xl text-left mb-4 max-sm:text-2xl"
            >
              ABOUT
            </motion.h2>
            <motion.h4
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-dmsans text-left font-light text-black text-lg mb-6 max-sm:text-base max-sm:w-full"
            >
              Om Muruga Gold Loan is a real-time gold loan management system
              built using the MERN stack. The platform helps financial
              institutions and pawn brokers manage customers, loans, EMIs,
              payments, and reports from a single centralized dashboard. With
              role-based authentication, automated EMI tracking, printable
              reports, and a fully responsive MUI-powered interface, this
              application delivers a complete digital solution for gold loan
              operations.
            </motion.h4>

            <motion.div
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-row justify-start items-center gap-3 max-sm:justify-end max-sm:mb-5"
            >
              <a
                href="https://www.ommurugagoldloan.in/"
                target="_blank"
                rel="noreferrer"
                className="font-dmsans text-black text-2xl font-medium max-sm:text-xl underline"
              >
                Open Link
              </a>
              <PiArrowCircleDownLeftThin
                fontSize={26}
                color="#000"
                className="about-arrow"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="w-[40%] flex flex-row items-start justify-start gap-5 max-sm:w-full"
          >
            <div className="w-1/2 flex flex-col items-start justify-start gap-2 max-sm:w-full">
              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-black font-dmsans font-semibold text-3xl text-left mb-4 max-sm:text-2xl max-sm:mb-2"
              >
                SCOPE
              </motion.h2>
              <p className="font-dmsans text-[#616161] text-left text-[15px] font-light max-sm:text-xs max-sm:w-full">
                Responsive UI & Smooth UX, Customer Management (CRUD), Loan
                Creation, Tracking & Closure, EMI Calculation & Auto Status
                Updates, Loan & EMI Report Generation (PDF), Dashboard Analytics
                & Charts, Authentication & Secure Data Access , Image Upload via
                ImageKit.
              </p>
            </div>

            <div className="w-1/2 flex flex-col items-start justify-start gap-2 max-sm:w-full">
              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-black font-dmsans font-semibold text-3xl text-left mb-4 max-sm:text-2xl max-sm:mb-2"
              >
                TECH STACK
              </motion.h2>
              <p className="font-dmsans text-[#616161] text-left text-[15px] font-light max-sm:text-xs max-sm:w-full">
                React, Redux Toolkit, MUI, Axios, React Hot Toast, Recharts, Node.js,
                Express.js, ImageKit, MongoDB, Mongoose, JWT, CSS, React Icons,
                Vercel, Postman
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="inner-container w-full max-w-[1440px] flex flex-row items-start justify-between gap-5 max-sm:flex-col">
          {/* <WebsitePreview url="https://mern-electro-ecommerce-website.vercel.app/" /> */}
          <ProjectSlider slides={electroSlides} />
        </motion.div>
      </main>
    </>
  );
};

export default AboutProjects;

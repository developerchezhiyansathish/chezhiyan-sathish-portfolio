"use client";
import React from "react";
import { motion } from "framer-motion";
import { PiArrowCircleDownLeftThin } from "react-icons/pi";
import CountUp from "../Layouts/Counter";
import LogoScroll from "../Layouts/LogoLoop";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";


const AboutMe = () => {
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
    <>
      <main className="w-full flex flex-col h-auto items-center justify-evenly gap-32 bg-white px-8 pt-24 pb-16 max-sm:px-3 max-sm:py-6 overflow-hidden max-sm:gap-5">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inner-container w-full max-w-[1440px] flex flex-row items-center justify-between gap-5 max-sm:flex-col"
        >
          <motion.h4
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-dmsans text-left font-medium text-black text-4xl w-2/3 pr-8 max-sm:pr-0 max-sm:w-full max-sm:text-base max-sm:pt-4"
          >
            I’m a well experienced Full Stack Web Developer with 3 years of hands on experience specializing in the MERN Stack, React.js, and Next.js. I build responsive, scalable, and user focused websites and web applications with clean UI and optimized performance. With strong experience across frontend, backend, and deployment workflows, I’m passionate about creating modern digital products that deliver real value.
          </motion.h4>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="w-1/3 flex flex-col items-end justify-end gap-5 max-sm:w-full"
          >
            <p className="font-dmsans text-[#616161] text-right text-2xl font-light max-sm:text-xs max-sm:w-full">
             Being a self taught developer, I’ve learned the importance of clear structure and smooth user flow. Whether it’s a website or a full scale application, I focus on making every page and feature intuitive, easy to navigate, and purposeful.
            </p>

            <motion.div
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-row justify-center items-center gap-3 max-sm:hidden"
            >
              <a
                href="#"
                className="font-dmsans text-black text-3xl font-medium max-sm:text-2xl"
              >
                More about me
              </a>
              <PiArrowCircleDownLeftThin
                fontSize={36}
                color="#000"
                className="about-arrow"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inner-container w-full max-w-[1440px] flex flex-row items-center justify-between gap-5 max-sm:mt-5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-1/3 flex flex-col items-start justify-start gap-5 max-sm:gap-1"
          >
            <CountUp
              from={0}
              to={3}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
            <p className="font-dmsans text-[#000000] text-left text-4xl font-medium max-sm:text-sm">
              Years of Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-1/3 flex flex-col items-center justify-start gap-5"
          >
            <div className="flex flex-col items-start justify-start gap-5 max-sm:gap-1">
              <CountUp
                from={0}
                to={40}
                separator=","
                direction="up"
                duration={1}
                suffix="+"
                className="count-up-text"
              />
              <p className="font-dmsans text-[#000000] text-left text-4xl font-medium max-sm:text-sm">
                Projects Completed
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-1/3 flex flex-col items-end justify-start gap-5"
          >
            <div className="flex flex-col items-start justify-start gap-5 max-sm:gap-1">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                suffix="%"
                className="count-up-text"
              />
              <p className="font-dmsans text-[#000000] text-left text-4xl font-medium max-sm:text-sm">
                Client Satisfaction
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Client-Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <LogoScroll />
        </motion.div>
      </main>
    </>
  );
};

export default AboutMe;

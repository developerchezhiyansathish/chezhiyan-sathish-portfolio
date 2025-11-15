"use client";
import React from "react";
import { motion } from "framer-motion";
import ScrollVelocity from "../Layouts/ScrollVelocity";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const Footer = () => {
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
      <main className="w-full flex flex-col items-center justify-evenly bg-white px-6 pt-24 pb-24 overflow-hidden max-sm:px-3 max-sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inner-container w-full max-w-[1440px]"
        >
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-dmsans text-xl font-normal text-black text-left max-sm:text-xs"
          >
            That's all for now.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-dmsans text-black text-8xl font-medium mb-28 max-sm:text-3xl max-sm:mb-12"
          >
            Let’s talk
          </motion.h2>
          <div className="w-full flex flex-col justify-center items-end relative">
            <div className="w-[250px] h-[250px] rounded-full bg-[#455CE9] flex items-center justify-center z-10 mr-16 mt-[-10px] relative sp-gt max-sm:w-[100px] max-sm:h-[100px] max-sm:mr-5 max-sm:mt-[-5px]">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="font-dmsans font-normal text-center text-xl text-white max-sm:text-xs"
              >
                Get in touch
              </motion.p>
            </div>
            <motion.hr className="bg-black w-full m-0 p-0 h-[2px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
          </div>
          <div className="w-full flex items-center justify-start gap-16 mt-0 max-sm:flex-wrap max-sm:gap-5">
            <div className="w-1/4 flex flex-col items-start justify-center max-sm:w-full">
              <p className="text-[#7E7E7E] font-dmsans text-base font-normal max-sm:text-xs">
                Email
              </p>
              <a
                href="mailto:chezhiyansathish95@gmail.com"
                className="text-[#000] font-dmsans text-2xl font-normal max-sm:text-xs"
              >
                chezhiyansathish95@gmail.com
              </a>
            </div>
            <div className="w-1/4 flex flex-col items-start justify-center max-sm:w-2/6">
              <p className="text-[#7E7E7E] font-dmsans text-base font-normal max-sm:text-xs">
                Phone
              </p>
              <a
                href="tel:+919944203738"
                className="text-[#000] font-dmsans text-2xl font-normal max-sm:text-xs"
              >
                (+91) 9944203738
              </a>
            </div>
            <div className="w-1/4 flex flex-col items-start justify-center max-sm:w-2/6">
              <p className="text-[#7E7E7E] font-dmsans text-base font-normal max-sm:text-xs">
                WhatsApp
              </p>
              <a
                href="https://wa.me/919944203738?text=Hi%20Chezhiyan"
                className="text-[#000] font-dmsans text-2xl font-normal max-sm:text-xs"
              >
                (+91) 9944203738
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <div className="w-full bg-black py-24 px-8 max-sm:px-3 max-sm:pt-10 max-sm:pb-18">
        <h3 className="font-dmsans text-white font-extralight text-6xl text-left mb-8 max-sm:text-3xl">
          your friendly, trustworthy developer
        </h3>
        <ScrollVelocity
          text="Chezhiyan Sathish"
          velocity={60}
          className="custom-scroll-text"
          numCopies={8}
        />
      </div>
    </>
  );
};

export default Footer;

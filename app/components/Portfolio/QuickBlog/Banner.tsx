"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/navigation";
import ScrollVelocity from "../../Layouts/ScrollVelocity";
import Dock from "../../Layouts/DockMenu";

const Banner = () => {
  const [time, setTime] = useState("");
  const navigate = useRouter();

  //Real-time clock
  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString());
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  //Smooth scroll effect
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  //Menu
  const items = [
    {
      icon: <img src="/images/projects.svg" alt="Projects" />,
      label: "Projects",
      onClick: () => navigate.push("/portfolio"),
    },
    {
      icon: <img src="/images/mail.svg" alt="Mail" />,
      label: "Mail",
      onClick: () =>
        (window.location.href = "mailto:chezhiyansathish95@gmail.com"),
    },
    {
      icon: <img src="/images/profile.svg" alt="Home" />,
      label: "Profile",
      onClick: () => navigate.push("/"),
    },
    {
      icon: <img src="/images/github.svg" alt="Github" />,
      label: "Github",
      onClick: () =>
        window.open("https://github.com/developerchezhiyansathish", "_blank"),
    },
    {
      icon: <img src="/images/linkedIn.svg" alt="LinkedIn" />,
      label: "LinkedIn",
      onClick: () =>
        window.open("https://www.linkedin.com/in/chezhiyan-sathish/", "_blank"),
    },
  ];

  return (
    <>
    <main
      ref={scrollContainerRef}
      className="quick-blog-banner w-full min-h-screen flex flex-col justify-between bg-black text-black relative overflow-hidden max-sm:bg-contain max-sm:bg-no-repeat max-sm:min-h-[350px] max-sm:bg-bottom max-sm:h-[350px]"
    >
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-start justify-between pt-8 gap-6 px-8 max-sm:px-3 max-sm:flex-row">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm sm:text-lg font-inter font-normal tracking-wide max-sm:text-xs max-sm:w-1/2 max-sm:font-light"
        >
          @ Code by{" "}
          <a
            href="https://www.linkedin.com/in/chezhiyan-sathish/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-300 transition-colors"
          >
            Chezhiyan Sathish
          </a>
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-xs sm:text-base font-inter font-light leading-snug max-w-md text-right max-sm:text-xs max-sm:w-1/2"
        >
          Passionate Full Stack Developer, dedicated to crafting innovative
          solutions and exceptional digital experiences through modern
          technologies.
        </motion.p>
      </div>

      {/* Dock Menu */}
      <Dock
        items={items}
        panelHeight={58}
        baseItemSize={40}
        magnification={70}
        className="max-sm:fixed max-sm:bottom-4 max-sm:bg-black max-sm:z-50"
      />

      {/* Bottom Time */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 right-10 flex flex-row items-center gap-4 max-sm:hidden"
      >
        <p className="text-lg sm:text-xl tracking-wide font-light max-sm:text-[#333]">
          {time}
        </p>
      </motion.div>
    </main>
    </>
  );
};

export default Banner;

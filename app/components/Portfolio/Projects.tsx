"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import Lenis from "@studio-freight/lenis";

const Projects = () => {
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

  const projects = [
    {
      src: "/images/loan-app.webp",
      title: "Gold Loan App - MERN Stack",
      alt: "Loan App",
      link: "/portfolio/om-muruga-gold-loan",
    },
    {
      src: "/images/Electro-Website.webp",
      title: "Electro Ecommerce Website - MERN Stack",
      alt: "Electro Website",
      link: "/portfolio/electro-ecommerce",
    },
    {
      src: "/images/Quick-blogs.webp",
      title: "Quick Blogs App - MERN Stack",
      alt: "Quick Blogs",
      link: "/portfolio/quick-drig-blog/",
    },
    {
      src: "/images/meal.webp",
      title: "Meal Maven - React",
      alt: "Meal Maven",
      link: "https://mealmaven.org/",
    },
    {
      src: "/images/drig-banner.webp",
      title: "Drig Digital - React",
      alt: "Drig Digital",
      link: "https://drig.digital/",
    },
    {
      src: "/images/fitrock-banner.webp",
      title: "Fitrock Arena - React",
      alt: "Fitrock Arena",
      link: "https://fitrockarena.com/",
    },
    {
      src: "/images/karthik-kumar-website-banner.webp",
      title: "Karthik Kumar - React",
      alt: "Karthik Kumar",
      link: "https://karthikkumarj.com/",
    },
    {
      src: "/images/professional-crunches-banner.webp",
      title: "Professional Crunches - React",
      alt: "Professional Crunches",
      link: "https://professionalcrunches.in/",
    },
    {
      src: "/images/media21-global.webp",
      title: "Media 21 Global - React",
      alt: "Media 21",
      link: "https://media21global.com/ae/",
    },
    {
      src: "/images/yrevents-banner.webp",
      title: "YR Events - React",
      alt: "YR Events",
      link: "https://yrevents.co.in/",
    },
    {
      src: "/images/eatix-global-banner.webp",
      title: "Eatix Oman - React",
      alt: "Eatix Oman",
      link: "https://eatixoman.com/",
    },
    {
      src: "/images/sarakshi-banner.webp",
      title: "Sarakshi Netralaya - React",
      alt: "Sarakshi Netralaya",
      link: "https://sarakshinetralaya.com/",
    },
  ];

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full flex flex-col gap-0 max-sm:gap-0"
        >
         
          {Array.from({ length: Math.ceil(projects.length / 2) }, (_, i) => (
            <motion.div
              key={i}
              className="w-full flex flex-row items-center justify-between gap-12 mt-7 first:mt-0 max-sm:flex-col max-sm:gap-6"
            >
              {projects.slice(i * 2, i * 2 + 2).map((project, index) => (
                <motion.div
                  key={index}
                  className="w-1/2 max-sm:w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="w-full overflow-hidden rounded-2xl">
                    <a href={project.link} target="blank">
                      <motion.img
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7, ease: ["easeOut"] }}
                        className="w-full rounded-2xl border-[1px]"
                        src={project.src}
                        alt={project.alt}
                      />
                    </a>
                    <a href={project.link} target="blank">
                      <motion.h2
                        className="w-full py-4 rounded-3xl font-dmsans text-[#000] text-3xl font-light my-4 flex items-center gap-2 project-name max-sm:text-xl"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 150 }}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        {project.title}
                        <PiArrowCircleUpRightThin
                          fontSize={35}
                          className="project-arrow"
                        />
                      </motion.h2>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Projects;

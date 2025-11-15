"use client";
import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const Skills = () => {

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: ["easeOut"] },
    },
  };

  const skills = [
    {
      id: 1,
      name: "React.Js",
      icon: <img src="/images/react.png" alt="React" />,
    },
    {
      id: 2,
      name: "MongoDB",
      icon: <img src="/images/mongoDB.png" alt="MongoDB" />,
    },
    {
      id: 3,
      name: "Node.Js",
      icon: <img src="/images/nodejs.png" alt="Node.Js" />,
    },
    {
      id: 4,
      name: "Express.JS",
      icon: <img src="/images/express.png" alt="Express.JS" />,
    },
    {
      id: 5,
      name: "Next.Js",
      icon: <img src="/images/nextjs.png" alt="Next.Js" />,
    },
    { id: 6, name: "Redux", icon: <img src="/images/redux.png" alt="Redux" /> },
    {
      id: 7,
      name: "Tailwind CSS",
      icon: <img src="/images/taillwind-css.png" alt="Tailwind CSS" />,
    },
    {
      id: 8,
      name: "Material UI",
      icon: <img src="/images/material-ui.png" alt="Material UI" />,
    },
    {
      id: 9,
      name: "Type Script",
      icon: <img src="/images/typescript.png" alt="Type Script" />,
    },
    {
      id: 10,
      name: "Framer Motion",
      icon: <img src="/images/framer-motion.png" alt="Framer Motion" />,
    },
    {
      id: 11,
      name: "Bootstrap",
      icon: <img src="/images/bootstrap.png" alt="Bootstrap" />,
    },
    { id: 12, name: "HTML", icon: <img src="/images/html.png" alt="HTML" /> },
    { id: 13, name: "CSS", icon: <img src="/images/css.png" alt="CSS" /> },
    {
      id: 14,
      name: "JavaScript",
      icon: <img src="/images/js.png" alt="JavaScript" />,
    },
    {
      id: 15,
      name: "WordPress",
      icon: <img src="/images/wordpress.png" alt="WordPress" />,
    },
    {
      id: 16,
      name: "Shopify",
      icon: <img src="/images/shopify.png" alt="Shopify" />,
    },
    {
      id: 17,
      name: "GitHub",
      icon: <img src="/images/github.png" alt="GitHub" />,
    },
    {
      id: 18,
      name: "Postman",
      icon: <img src="/images/postman.png" alt="Postman" />,
    },
  ];

  return (
    <main className="w-full flex flex-col h-auto items-center justify-evenly gap-32 bg-[#F3F3F3] px-8 py-24 max-sm:px-3 max-sm:py-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 80 }}
        transition={{ duration: 1.2, ease: ["easeOut"] }}
        viewport={{ once: true }}
        className="inner-container w-full max-w-[1440px]"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1, ease: ["easeOut"] }}
          viewport={{ once: true }}
          className="font-dmsans text-black text-8xl font-medium mb-12 text-left max-sm:text-3xl max-sm:mb-0"
        >
          Skills
        </motion.h2>

        <div className="w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-9 gap-6 place-items-center max-xl:grid-cols-8 max-lg:grid-cols-6 max-md:grid-cols-5 max-sm:grid-cols-3 max-sm:gap-0"
          >
            <AnimatePresence>
              {skills.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex flex-col items-center justify-center skill-img"
                >
                  <p className="mt-2 text-xs font-dmsans font-light text-[#f4f4f4] tool-tip px-2 py-1 text-center rounded-3xl mb-2">
                    {skill.name}
                  </p>
                  <div className="w-4/5 flex items-center justify-center text-5xl">
                    {skill.icon}
                  </div>
                  
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
};

export default Skills;

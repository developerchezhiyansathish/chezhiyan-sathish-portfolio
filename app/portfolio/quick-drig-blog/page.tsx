import Footer from "@/app/components/Home/Footer";
import AboutProjects from "@/app/components/Portfolio/QuickBlog/AboutProject";
import Banner from "@/app/components/Portfolio/QuickBlog/Banner";
import React from "react";

export const metadata = {
  title: "Quick DRIG Blog – AI Powered Blogging Platform (MERN Stack)",
  description:
    "Quick DRiG Blog is an AI-powered MERN stack blogging platform that generates content, SEO metadata, and images using AI. Includes blog management, scheduling, authentication, and modern UI.",
  keywords: [
    "AI Blog App",
    "Blog Platform",
    "AI Content Generator",
    "SEO Generator",
    "MERN Stack Blog",
    "React Blog App",
    "MongoDB Blog Engine",
    "AI Image Generator",
    "Node.js Blog API",
    "Sathish G P Projects",
  ],
  metadataBase: new URL("https://chezhiyansathish.dev"),
  alternates: {
    canonical: "https://chezhiyansathish.dev/portfolio/quick-drig-blog",
  },
};

const page = () => {
  return (
    <>
      <Banner />
      <AboutProjects />
      <Footer />
    </>
  );
};

export default page;

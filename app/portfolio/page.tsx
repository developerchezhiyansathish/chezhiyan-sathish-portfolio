import React from "react";
import Banner from "../components/Portfolio/Banner";
import Projects from "../components/Portfolio/Projects";
import Footer from "../components/Home/Footer";

export const metadata = {
  title: "Portfolio – MERN Stack Developer",
  description:
    "Explore all my MERN stack, Next.js, and full-stack development projects.",
  keywords: [
    "Portfolio",
    "Sathish G P",
    "Web Developer",
    "MERN Stack",
    "React.js",
    "Next.js",
    "Projects",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "Portfolio – Sathish G P",
    description: "Showcasing real-world MERN stack and Next.js projects.",
    url: "https://chezhiyansathish.dev/portfolio",
    type: "website",
    images: [
      {
        url: "https://chezhiyansathish.dev/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Sathish Portfolio Projects",
      },
    ],
  },
  alternates: {
    canonical: "https://chezhiyansathish.dev/portfolio",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Projects />
      <Footer />
    </>
  );
}

import Footer from "@/app/components/Home/Footer";
import AboutProjects from "@/app/components/Portfolio/Ommuruga/AboutProject";
import Banner from "@/app/components/Portfolio/Ommuruga/Banner";
import React from "react";



export const metadata = {
  title: "Om Muruga Gold Loan – MERN Stack Loan Management System",
  description:
    "A complete MERN stack gold loan management system featuring customer management, loan creation, EMI tracking, PDF reports, dashboard analytics, and MUI-powered responsive UI.",
  keywords: [
    "Gold Loan App",
    "Loan Management System",
    "MERN Stack Loan App",
    "React Loan Dashboard",
    "MUI Admin Dashboard",
    "MongoDB Loan System",
    "Express API",
    "Gold Loan Software",
    "Financial Application",
    "Sathish G P Projects",
  ],
  metadataBase: new URL("https://chezhiyansathish.dev"),
  alternates: {
    canonical: "https://chezhiyansathish.dev/portfolio/om-muruga-gold-loan",
  },
};

const page = () => {
  return (
    <>
      <Banner />
      <AboutProjects/>
      <Footer />
    </>
  );
};

export default page;

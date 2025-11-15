import Footer from "@/app/components/Home/Footer";
import AboutProjects from "@/app/components/Portfolio/Electro/AboutProject";
import Banner from "@/app/components/Portfolio/Electro/Banner";
import React from "react";

export const metadata = {
  title: "Electro – MERN Stack eCommerce Website",
  description:
    "A full-featured MERN stack eCommerce platform with product management, cart, checkout, authentication, admin dashboard, and real-time order tracking.",
  keywords: [
    "Electro eCommerce",
    "MERN Stack eCommerce",
    "React eCommerce",
    "Node.js eCommerce",
    "MongoDB eCommerce",
    "Full Stack eCommerce",
    "Sathish G P Projects",
    "eCommerce Website",
    "Online Store",
    "OTP Login eCommerce",
  ],
  metadataBase: new URL("https://chezhiyansathish.vercel.app/"),
  alternates: {
    canonical: "https://chezhiyansathish.vercel.app/portfolio/electro-ecommerce",
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

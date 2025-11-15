import AboutMe from "./components/Home/AboutMe";
import Banner from "./components/Home/Banner";
import CaseStudy from "./components/Home/CaseStudy";
import Experience from "./components/Home/Experience";
import Footer from "./components/Home/Footer";
import Skills from "./components/Home/Skills";
import Testimonial from "./components/Home/Testimonial";

export const metadata = {
  title: "Chezhiyan Sathish – MERN Stack & Next.js Developer",
  description:
    "I'm Sathish, a MERN Stack and Next.js developer specializing in high-performance web applications, dashboards, eCommerce platforms, and full-stack solutions.",
  keywords: [
    "Sathish G P",
    "Sathish Portfolio",
    "Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Node.js",
    "MongoDB",
    "Freelance Developer",
    "Chennai Web Developer",
  ],
  metadataBase: new URL("https://chezhiyansathish.dev"),
  alternates: {
    canonical: "https://chezhiyansathish.dev",
  },
};

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Experience />
      <Skills />
      <CaseStudy />
      <Testimonial />
      <Footer />
    </>
  );
}

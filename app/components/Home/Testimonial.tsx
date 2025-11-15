"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { PiArrowCircleRightThin, PiArrowCircleLeftThin } from "react-icons/pi";
import "swiper/css";
import "swiper/css/navigation";
import Lenis from "@studio-freight/lenis";

const Testimonial: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  const testimonials = [
    {
      name: "Desika Prabhakar",
      title: "CEO, D Purpose Foundation",
      text: "Chezhiyan is more than a developer, he’s a true partner. After multiple failed attempts with others, he stepped in, revived our half-finished website, and turned chaos into perfection. His patience, commitment, and professionalism earned our complete trust. Even after completion, he continued to guide and support us with genuine care. A rare gem who truly transforms vision into reality.",
      initials: "DP",
    },
    {
      name: "Sridhar",
      title: "Founder, Professional Crunches",
      text: "Chezhiyan built a system. With the new site and easy registration form, our workflow became effortless. He structured everything clearly, making client and auditor management simple and reducing my workload. His smart solutions truly helped our business run smoothly and professionally.",
      initials: "SR",
    },
    {
      name: "Joveena Bastian",
      title: "Manager, Mdees Furniture",
      text: "Our furniture website now feels premium and effortless to manage. Chezhiyan understood our vision perfectly and delivered a smooth shopping experience for our customers. The product display is elegant, navigation is simple, and the purchase process works flawlessly making online sales easier than ever.",
      initials: "JB",
    },
    {
      name: "Ramanan",
      title: "Founder, Om Muruga Gold Loan",
      text: "Our gold loan records were all manual from interest tracking to EMI details, everything was typed and saved in Excel. It was time consuming and prone to errors. Chezhiyan completely changed that by developing a customized app that automated all our processes. Now everything from loan entry to due tracking and print statements works smoothly in one system. His solution saved us time, reduced mistakes, and made our business truly systematic.",
      initials: "RA",
    },
  ];

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

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
    <main className="w-full flex flex-col items-center justify-evenly bg-white px-6 pt-24 pb-24 overflow-hidden max-sm:px-3 max-sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-[1440px]"
      >
        {/* Navigation */}
        <div className="w-full flex items-center justify-between mb-28 max-sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-dmsans text-black text-8xl font-medium  text-center md:text-left max-sm:text-3xl max-sm:mb-1"
          >
            Testimonials
          </motion.h2>
          <div className="flex items-center gap-4">
            <button
              ref={prevRef}
              className="text-black p-0 rounded-full hover:bg-gray-800 hover:text-white transition"
              aria-label="Previous"
            >
              <PiArrowCircleLeftThin fontSize={50} className="max-sm:text-lg" />
            </button>
            <button
              ref={nextRef}
              className="text-black p-0 rounded-full hover:bg-gray-800 hover:text-white transition"
              aria-label="Next"
            >
              <PiArrowCircleRightThin
                fontSize={50}
                className="max-sm:text-lg"
              />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="overflow-hidden"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#F4F4F4] p-6 rounded-2xl h-96 flex flex-col justify-between shadow-sm">
                <p className="text-[#2F2A2A]-400 mb-6 leading-relaxed font-dmsans text-base max-sm:text-sm">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 font-inter rounded-full bg-[#2F2A2A] flex items-center justify-center text-white font-medium text-lg max-sm:w-12 max-sm:h-12 max-sm:text-xs">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold font-dmsans text-2xl text-[#2F2A2A] max-sm:text-xl">
                      {t.name}
                    </h4>
                    <p className="text-sm font-dmsans text-gray-500 max-sm:text-xs">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </main>
  );
};

export default Testimonial;

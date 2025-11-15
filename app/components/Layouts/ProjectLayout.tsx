"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useRef } from "react";

type SlideItem = {
  image: string;
  alt?: string;
};

interface ProjectSliderProps {
  slides: SlideItem[];
}

export default function ProjectSlider({ slides }: ProjectSliderProps) {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full">
      {/* Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={item.alt || "Slide Image"}
              className="
                w-full 
                h-[700px]
                object-contain 
                transition-all 
                duration-500 
                ease-in-out 
                hover:scale-110 
                max-sm:max-h-[260px]
              "
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Buttons */}
      <div className="w-full flex justify-between items-center mt-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="font-dmsans text-5xl font-light underline cursor-pointer max-sm:text-3xl"
        >
          Prev
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="font-dmsans text-5xl font-light underline cursor-pointer max-sm:text-3xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}

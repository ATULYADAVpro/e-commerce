import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductsGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "nature-1.jpg", "nature-2.jpg", "nature-3.jpg", "nature-4.jpg", "nature-5.jpg",
    "nature-6.jpg", "nature-7.jpg", "nature-8.jpg", "nature-9.jpg", "nature-10.jpg"
  ];

  return (
    <div className="flex gap-5 items-center m-5">
      {/* Thumbnail Swiper (Vertical) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className=" h-50 sm:h-[15rem] w-[3rem]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://swiperjs.com/demos/images/${img}`}
              onClick={() => thumbsSwiper?.slideToLoop(index)}
              className={`object-cover w-full h-full rounded-md cursor-pointer transition-all ${activeIndex === index ? 'ring-5 ring-blue-500 scale-50' : ''
                }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Swiper */}
      <Swiper
        loop={true}
        spaceBetween={10}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-[15rem] sm:w-[30rem]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://swiperjs.com/demos/images/${img}`}
              className="object-cover w-full h-full rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

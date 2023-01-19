import React from 'react';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
// import Image from 'next/image';

const InfoVideos: React.FC = () => {
  return (
    <div className="w-full h-[28rem] flex justify-center items-center">
      <Swiper
        modules={[Autoplay, A11y, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          disableOnInteraction: false,
        }}
        navigation
        speed={1000}
        loop
      >
        {[1, 2, 3, 4, 5].map((item: number) => (
          <SwiperSlide key={item * item + ''}>
            <div className="h-64 relative">
              <img
                src="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="couch"
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(InfoVideos);

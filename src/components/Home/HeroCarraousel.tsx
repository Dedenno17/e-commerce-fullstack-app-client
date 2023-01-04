import React, { useCallback, useEffect, useState } from 'react';
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import { heroCarrouselData, HeroData } from '../../data/heroData';

const HeroCarraousel: React.FC = () => {
  const [pageActive, setPageActive] = useState<number>(0);

  const changePageActive = () => {
    if (pageActive === 3) {
      setPageActive(1);
      return;
    }

    setPageActive(pageActive + 1);
  };

  return (
    <div className="w-full bg-primaryPantonePurple h-[85vh] relative">
      <Swiper
        modules={[A11y, Autoplay]}
        slidesPerView={1}
        speed={700}
        loop
        autoplay={{ disableOnInteraction: false }}
        className="max-w-[1440px] h-full"
        onSlideChange={changePageActive}
      >
        {heroCarrouselData &&
          heroCarrouselData.map((item: HeroData) => (
            <SwiperSlide
              key={item.id}
              className="w-full px-[7rem] h-full flex items-stretch mx-auto "
            >
              <div className="w-[20%] flex overflow-hidden">
                <img
                  src="/hanging-lamp.png"
                  alt="lamp picture"
                  className="w-[80%] h-[50%] mx-auto -translate-y-[2.5rem]"
                />
              </div>
              <div className="w-[40%] flex justify-center flex-col gap-3 font-josefin px-2">
                <span className="text-primaryPink text-xs">{item.slogan}</span>
                <h1 className="text-4xl text-black font-bold">{item.title}</h1>
                <span className="text-xs text-primaryBlue w-[90%]">
                  {item.desc}
                </span>
                <button
                  type="button"
                  className="border-none w-[25%] outline-none bg-primaryPink text-white text-xs py-[0.65rem] px-4 cursor-pointer hover:brightness-90 mt-2"
                >
                  Shop Now
                </button>
              </div>
              <div className="w-[40%] relative">
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] opacity-10 rounded-full ${
                    item.colorTheme === 'primaryPink'
                      ? 'bg-primaryPink'
                      : item.colorTheme === 'primaryNavyBlue'
                      ? 'bg-primaryNavyBlue'
                      : 'bg-primaryPurple'
                  }`}
                />
                <div
                  className={`absolute top-[55%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] opacity-10 rounded-full ${
                    item.colorTheme === 'primaryPink'
                      ? 'bg-primaryPink'
                      : item.colorTheme === 'primaryNavyBlue'
                      ? 'bg-primaryNavyBlue'
                      : 'bg-primaryPurple'
                  }`}
                />
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%]"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* CUSTOM PAGINATION */}
      <div className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 p-6 flex justify-center gap-4">
        {[1, 2, 3].map((item: number) => (
          <span
            key={Math.random() + item + ''}
            className={`w-2 h-2 inline-block border-[1px] border-primaryPink rotate-45 ${
              pageActive === item ? 'bg-primaryPink' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(HeroCarraousel);

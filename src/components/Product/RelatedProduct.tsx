import React from 'react';
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';

import { Product, productsData } from '../../data/productsData';
import Image from 'next/image';
import { BsStarFill } from 'react-icons/bs';

const RelatedProduct: React.FC = () => {
  return (
    <div className="w-[1024px] flex flex-col gap-6">
      <h1 className="text-3xl text-primaryNavyBlue font-josefin font-bold mb-8 text-left">
        Related Products
      </h1>

      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{
          disableOnInteraction: false,
        }}
        speed={1000}
        loop
        className="w-[90%]"
      >
        {productsData.slice(0, 4).map((item: Product) => (
          <SwiperSlide key={item.id}>
            <div className="h-64 flex flex-col">
              <div className="relative w-full h-[80%] bg-primarySkyBlue">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="true"
                  priority
                />
              </div>
              <div className="w-full h-[20%] flex items-center justify-between py-2">
                <span className="text-xs text-primaryNavyBlue font-josefin font-bold">
                  {item.title}
                </span>
                <span className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star: number) => (
                    <BsStarFill
                      key={star + star * star + ''}
                      className="text-[#D0A32D] text-xs"
                    />
                  ))}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(RelatedProduct);

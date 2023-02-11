import React from 'react';
import { Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../../Types';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import Image from 'next/image';
import { useRouter } from 'next/router';

const TopCollection: React.FC<{ productsData: Product[] }> = ({
  productsData,
}) => {
  const router = useRouter();

  return (
    <div className="w-[900px] p-10">
      <h1 className="text-3xl text-primaryNavyBlue font-josefin text-center font-bold mb-2">
        Top Categories
      </h1>

      {/* PRODUCTS */}
      <Swiper
        modules={[Autoplay, A11y]}
        slidesPerView={4}
        spaceBetween={0}
        autoplay
        loop
        speed={1000}
        className="w-full h-72"
      >
        {productsData.slice(6, 12).map((item: Product) => (
          <SwiperSlide
            key={item._id}
            className="flex flex-col justify-center items-center gap-3 relative"
          >
            {/* IMAGE */}
            <div className="w-[90%] h-[63%] shadow-xl rounded-full bg-primarySkyBlue flex group relative overflow-hidden">
              <div className="relative w-1/2 h-1/2 m-auto">
                <Image
                  src={item.img}
                  alt={item.title}
                  sizes="true"
                  fill
                  priority
                />
              </div>
              <div
                className="absolute bottom-4 translate-y-[200%] left-1/2 -translate-x-1/2 py-1 px-2 text-[0.5rem] text-primarySkyBlue bg-[#16D26D] flex justify-center items-center cursor-pointer transition duration-700 hover:brightness-95 group-hover:translate-y-0"
                onClick={() => router.push(`/product/${item._id}`)}
              >
                View Details
              </div>
            </div>
            {/* TITLE */}
            <div className="w-full  text-center">
              <p className="text-sm text-primaryBlue font-josefin font-bold">
                {item.title}
              </p>
              <p className="text-xs text-primaryBlue font-josefin font-bold">
                $ {item.price.toFixed(1)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(TopCollection);

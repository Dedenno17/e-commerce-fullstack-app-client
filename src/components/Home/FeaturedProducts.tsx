import React, { useState } from 'react';
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productsData, Product } from '../../data/productsData';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import Image from 'next/image';

const FeaturedProducts: React.FC = () => {
  const [pageActive, setPageActive] = useState<number>(0);

  const changePageActive = () => {
    if (pageActive === 6) {
      setPageActive(1);
      return;
    }

    setPageActive(pageActive + 1);
  };

  return (
    <div className="w-[900px] p-10">
      <h1 className="text-3xl text-primaryNavyBlue font-josefin text-center font-bold mb-8">
        Featured Products
      </h1>

      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        autoplay
        loop
        speed={1000}
        className="w-full h-72"
        onSlideChange={changePageActive}
      >
        {productsData
          .filter((item: Product) => item.favourite > 4000)
          .slice(0, 6)
          .map((item: Product) => (
            <SwiperSlide key={item.id} className="flex">
              <div className="h-[95%] w-[95%] rounded-lg shadow-simetri m-auto w-full">
                <div className="w-full h-[65%] bg-primarySkyBlue flex p-4">
                  <div className="relative m-auto w-28 h-32">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="true"
                      priority
                      className="w-[60%]"
                    />
                  </div>
                </div>
                <div className="w-full h-[35%] p-2 flex flex-col items-center justify-between">
                  <h2 className="text-sm text-primaryPink font-bold font-lato">
                    {item.title}
                  </h2>
                  <div className="w-full flex justify-center items-center p-1 gap-1 ">
                    {item.colors.map((col: string, i: number) => (
                      <span
                        key={Math.random() + i + ''}
                        className="inline-block rounded-full w-[10%] py-[1px]"
                        style={{
                          background: `${col}`,
                          border: `1px solid ${
                            col === 'white' ? 'black' : col
                          }`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-primaryBlue font-josefin font-bold">
                    code: {item.id}
                  </span>
                  <span className="text-xs text-primaryBlue font-josefin font-bold">
                    ${item.price}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* CUSTOM PAGINATION */}
      <div className="w-[25%] mt-8 mx-auto flex justify-center gap-2">
        {[1, 2, 3, 4, 5, 6].map((item: number) => (
          <span
            key={Math.random() + item + ''}
            className={`inline-block rounded-full w-[10%] py-[1px] border-[1px] border-primaryPink ${
              pageActive === item ? 'bg-primaryPink' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(FeaturedProducts);

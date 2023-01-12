import Image from 'next/image';
import React from 'react';
import { Product } from '../../data/productsData';

const TrendingProducts: React.FC<{ productsData: Product[] }> = ({
  productsData,
}) => {
  const trendingSecOne = productsData
    .filter(
      (item: Product) =>
        item.favourite > 4000 && item.categories.includes('chair')
    )
    .slice(0, 6);

  const trendingSecTwoClock = productsData.filter((item: Product) =>
    item.categories.includes('clock')
  )[0];

  const trendingSecTwoTable = productsData.filter((item: Product) =>
    item.categories.includes('tv-table')
  )[0];

  const trendingSecThree = productsData
    .filter(
      (item: Product) =>
        item.favourite >= 3000 &&
        item.favourite < 5000 &&
        item.categories.includes('chair')
    )
    .slice(0, 3);

  return (
    <div className="w-[900px] p-10">
      <h1 className="text-3xl text-primaryNavyBlue font-josefin text-center font-bold mb-8">
        Trending Products
      </h1>

      {/* PRODUCTS */}
      <div className="w-full grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-5 mt-10">
        {trendingSecOne.map((item: Product, i: number) => (
          <div
            className={` w-full h-64 bg-transparent overflow-hidden  ${
              i === 4 && 'col-span-3 shadow-none flex items-stretch gap-4'
            } ${
              i === 4 || i === 5
                ? 'shadow-none p-0'
                : 'shadow-simetri p-2 hover:scale-105 transition duration-700'
            } `}
            key={item.id + ''}
          >
            {i !== 4 && i !== 5 && (
              <>
                <div className="w-full h-[70%] flex p-4 relative overflow-hidden bg-primarySkyBlue">
                  <div className="relative m-auto w-28 h-32 ">
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
                <div className="w-full h-[30%] py-2 px-5 flex flex-col items-center justify-evenly pointer-events-none">
                  <h2 className="text-sm text-primaryBlue font-bold font-josefin">
                    {item.title}
                  </h2>
                  <p className="text-xs text-primaryBlue text-center font-bold font-josefin">
                    $ {item.price}
                  </p>
                </div>
              </>
            )}
            {i === 4 && (
              <>
                <div className="w-full bg-primarySkyBlue shadow-simetri px-3 pb-6 relative flex items-end justify-end transition duration-700 hover:brightness-90">
                  <div className="w-[80%] h-[50%] relative">
                    <Image
                      src={trendingSecTwoClock.img}
                      alt={trendingSecTwoClock.title}
                      sizes="true"
                      fill
                      priority
                    />
                  </div>
                  <div className="top-5 left-5 flex flex-col gap-2 absolute">
                    <span className="w-full text-primaryBlue text-sm font-josefin font-bold pointer-events-none">
                      23% Off in all products
                    </span>
                    <span className="w-full text-xs underline text-primaryPink font-josefin cursor-pointer">
                      Shop Now
                    </span>
                  </div>
                </div>

                <div className="w-full bg-primarySkyBlue shadow-simetri px-3 pb-6 flex relative items-end justify-end transition duration-700 hover:brightness-90">
                  <div className="w-[80%] h-[50%] relative">
                    <Image
                      src={trendingSecTwoTable.img}
                      alt={trendingSecTwoTable.title}
                      sizes="true"
                      fill
                      priority
                    />
                  </div>
                  <div className="top-5 left-5 flex flex-col gap-2 absolute">
                    <span className="w-full text-primaryBlue text-sm font-josefin font-bold pointer-events-none">
                      23% Off in all products
                    </span>
                    <span className="w-full text-xs underline text-primaryPink font-josefin cursor-pointer">
                      View Collection
                    </span>
                  </div>
                </div>
              </>
            )}
            {i === 5 && (
              <ul className="w-full h-full flex flex-col justify-between">
                {trendingSecThree.map((item: Product) => (
                  <li
                    className="w-full h-[30%] bg-transparent flex items-stretch gap-2 transition duration-700 group hover:bg-primaryPurple"
                    key={item.id + 3 + ''}
                  >
                    <div className="w-[35%] flex p-4 relative overflow-hidden bg-primarySkyBlue transition duration-700 group-hover:bg-white">
                      <div className="relative m-auto w-8 h-10 ">
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
                    <div className="w-[65%] text-primaryBlue flex flex-col items-start justify-center gap-1 pointer-events-none transition duration-700 group-hover:text-primarySkyBlue">
                      <h2 className="text-sm font-bold font-josefin">
                        {item.title}
                      </h2>
                      <p className="text-xs text-center font-bold font-josefin">
                        $ {item.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(TrendingProducts);

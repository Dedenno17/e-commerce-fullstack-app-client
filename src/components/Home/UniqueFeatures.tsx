import Image from 'next/image';
import React, { useMemo } from 'react';
import { productsData } from '../../data/productsData';

const UniqueFeatures: React.FC = () => {
  const data = productsData[17];

  return (
    <div className="w-full min-h-[28rem] bg-primarySkyBlue py-5 flex items-stretch justify-center ">
      <div className="w-[900px] px-10 flex items-stretch justify-between gap-6">
        {/* IMAGE */}
        <div className="w-1/2 flex items-center justify-center relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-primaryPink asimetri-circle opacity-10 -translate-x-10" />
          <div className=" w-[75%] h-[75%] relative">
            <Image src={data.img} alt={data.title} sizes="true" fill priority />
          </div>
        </div>
        {/* FEATURES */}
        <div className="w-1/2 flex flex-col gap-6 justify-center">
          <h2 className="text-2xl text-primaryNavyBlue font-bold font-josefin">
            Unique Features Of Leatest & Trending Products
          </h2>

          <ul className="w-[90%] flex flex-col gap-2">
            <li className="w-full flex gap-3 items-start">
              <span className="inline-block p-1 rounded-full bg-primaryRed mt-[0.4rem]" />
              <p className="text-[0.75rem] text-primaryBlue leading-5 font-lato">
                All frames constructed with hardwood solids and laminates
              </p>
            </li>
            <li className="w-full flex gap-3 items-start">
              <span className="inline-block p-1 rounded-full bg-primaryNavyBlue mt-[0.4rem]" />
              <p className="text-[0.75rem] text-primaryBlue leading-5 font-lato">
                Reinforced with double wood dowels, glue, screw - nails corner,
                blocks and machine nails
              </p>
            </li>
            <li className="w-full flex gap-3 items-start">
              <span className="inline-block p-1 rounded-full bg-[#16D26D] mt-[0.4rem]" />
              <p className="text-[0.75rem] text-primaryBlue leading-5 font-lato">
                Arms, backs, and seats are structurally reinforced
              </p>
            </li>
          </ul>

          <div className="w-full flex items-stretch gap-4">
            <button className="px-6 py-2 bg-primaryPink text-primarySkyBlue text-md font-josefin rounded-sm cursor-pointer hover:brightness-90">
              Add to Cart
            </button>
            <div className="text-primaryBlue text-xs font-josefin flex flex-col justify-evenly">
              <span className="font-bold">{data.title}</span>
              <span className="font-light">$ {data.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UniqueFeatures);

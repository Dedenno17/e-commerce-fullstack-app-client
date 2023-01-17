import Image from 'next/image';
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsCart, BsStarFill } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { Product, productsData } from '../../data/productsData';

const ProductsList: React.FC = () => {
  return (
    <div className="w-[77%] min-h-[80vh] p-2">
      <ul className="grid gap-4 grid-cols-1">
        {productsData.slice(0, 10).map((item: Product) => (
          <li
            key={item.id + ''}
            className="w-full h-44 border-[1px] border-black/10 rounded-sm p-2 flex items-stretch gap-4"
          >
            {/* IMAGE */}
            <div className="w-[25%] p-4">
              <div className="w-full h-full relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  sizes="true"
                  fill
                  priority
                />
              </div>
            </div>
            {/* DESC */}
            <div className="w-[70%] flex flex-col justify-center gap-3">
              <span className="text-sm font-josefin font-bold text-primaryNavyBlue flex items-center gap-10">
                <h3>{item.title}</h3>
                <ul className="flex items-center gap-1">
                  {item.colors.map((col: string, i: number) => (
                    <div
                      className="w-2 h-2 rounded-full border-[1px] border-black/20"
                      key={i + i + ''}
                      style={{ backgroundColor: `${col}` }}
                    />
                  ))}
                </ul>
              </span>

              <span className="flex items-center gap-6 text-xs">
                <h3 className="text-xs font-josefin font-bold text-primaryNavyBlue">
                  ${item.price.toFixed(1)}
                </h3>
                <span className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((rat: number) => (
                    <BsStarFill key={rat} className="text-[#D0A32D]" />
                  ))}
                </span>
              </span>

              <p className="text-xs text-lato text-primaryBlue/50">
                {item.description}
              </p>

              <div className="w-[30%] flex gap-4 items-center">
                <span className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-primarySkyBlue hover:brightness-95 text-xs text-secondaryBlue hover:text-primaryNavyBlue transition duration-700 ">
                  <BsCart />
                </span>
                <span className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-primarySkyBlue hover:brightness-95 text-xs text-secondaryBlue hover:text-primaryNavyBlue transition duration-700 ">
                  <MdFavoriteBorder />
                </span>
                <span className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-primarySkyBlue hover:brightness-95 text-xs text-secondaryBlue hover:text-primaryNavyBlue transition duration-700 ">
                  <BiSearchAlt />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ProductsList);

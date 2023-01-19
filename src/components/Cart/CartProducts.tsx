import Image from 'next/image';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Product, productsData } from '../../data/productsData';

interface TableHead {
  name: string;
  width: string;
}

const CartProducts: React.FC<{ tableHeads: TableHead[] }> = ({
  tableHeads,
}) => {
  return (
    <div className="w-[65%] flex flex-col gap-8">
      {/* HEAD */}
      <ul className="w-full flex items-center gap-4">
        {tableHeads.map((item: TableHead, i: number) => (
          <li
            key={i + i + ''}
            className={`py-2 text-md text-primaryNavyBlue font-josefin font-bold ${
              i !== 0 && 'text-center'
            }`}
            style={{ width: `${item.width}` }}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* BODY */}
      <div className="w-full">
        {productsData.slice(0, 5).map((item: Product) => (
          <ul
            className="w-full flex items-center border-b-[1px] border-b-black/10 gap-4"
            key={item.id}
          >
            <li
              style={{ width: `${tableHeads[0].width}` }}
              className="py-4 text-sm flex items-stretch h-32 gap-2"
            >
              <div className="w-[40%] flex p-1 bg-primarySkyBlue">
                <div className="relative w-full h-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    sizes="true"
                    fill
                    priority
                  />
                </div>
              </div>
              <div className="w-[60%] flex flex-col justify-center gap-1">
                <h3 className="text-primaryNavyBlue font-josefin font-bold">
                  {item.title}
                </h3>
                <span className="text-primaryBlue/40 font-lato">
                  Color: White
                </span>
                <span className="text-primaryBlue/40 font-lato">size: XL</span>
              </div>
            </li>

            <li
              className="flex items-center justify-center text-sm text-primaryNavyBlue font-josefin font-bold"
              style={{ width: `${tableHeads[1].width}` }}
            >
              ${item.price.toFixed(1)}
            </li>

            <li
              className="flex items-center justify-center text-sm text-primaryNavyBlue font-lato"
              style={{ width: `${tableHeads[2].width}` }}
            >
              <span className="flex items-center gap-4 bg-primarySkyBlue p-1">
                <AiOutlineMinus className="cursor-pointer" />
                <span className="pointer-events-none">1</span>
                <AiOutlinePlus className="cursor-pointer" />
              </span>
            </li>

            <li
              className="flex items-center justify-center text-sm text-primaryNavyBlue font-josefin font-bold"
              style={{ width: `${tableHeads[3].width}` }}
            >
              ${item.price.toFixed(1)}
            </li>
          </ul>
        ))}
      </div>

      {/* BUTTON */}
      <div className="w-full flex items-center justify-between">
        <button
          type="button"
          className="py-2 w-[20%] text-md text-primarySkyBlue font-josefin font-bold bg-primaryPink cursor-pointer hover:brightness-95 border-none outline-none"
        >
          Update Cart
        </button>
        <button
          type="button"
          className="py-2 w-[20%] text-md text-primarySkyBlue font-josefin font-bold bg-primaryPink cursor-pointer hover:brightness-95 border-none outline-none"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default React.memo(CartProducts);

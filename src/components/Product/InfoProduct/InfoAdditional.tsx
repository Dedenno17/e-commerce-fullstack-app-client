import Image from 'next/image';
import React from 'react';
import { BsFlagFill, BsStarFill } from 'react-icons/bs';
import { HiTruck } from 'react-icons/hi';
import { HiMapPin } from 'react-icons/hi2';

const InfoAdditional: React.FC = () => {
  return (
    <div className="w-full items-stretch flex gap-10">
      {/* DETAILS */}
      <div className="w-1/2 flex flex-col gap-4">
        <h2 className="text-lg text-primaryNavyBlue font-josefin font-bold">
          Product Details
        </h2>
        <span className="flex items-center gap-2 text-sm font-lato">
          <p className="text-primaryBlue font-bold">Package Dimension: </p>
          <p className="text-primaryBlue/40 ">10 x 8 x 1 inches; 4,8 Ounce</p>
        </span>
        <span className="flex items-center gap-2 text-sm font-lato">
          <p className="text-primaryBlue font-bold">Category: </p>
          <p className="text-primaryBlue/40 ">lorem ipsum</p>
        </span>
        <span className="flex items-center gap-2 text-sm font-lato">
          <p className="text-primaryBlue font-bold">Manufacturer: </p>
          <p className="text-primaryBlue/40 ">
            lorem ipsum sit amet narasiis blensicaha rooesp jogni okp
          </p>
        </span>
        <span className="flex items-center gap-2 text-sm font-lato">
          <p className="text-primaryBlue font-bold">Production Code: </p>
          <p className="text-primaryBlue/40 ">#BGUHEM46580</p>
        </span>
        <span className="flex items-center gap-2 text-sm font-lato">
          <p className="text-primaryBlue font-bold">Customer Reviews: </p>
          <span className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((rat: number) => (
              <BsStarFill key={rat} className="text-[#D0A32D] text-xs" />
            ))}
            <p className="text-xs text-primaryBlue/40"> Rating(22)</p>
          </span>
        </span>
        <div className="w-full flex flex-col gap-4 mt-10">
          <h2 className="text-lg text-primaryNavyBlue font-josefin font-bold">
            Photo from reviewers
          </h2>
          <div className="w-full h-24 flex items-stretch gap-6">
            {[1, 2, 3, 4].map((item: number) => (
              <div className="w-1/4 relative bg-white" key={item + item + ''}>
                <Image
                  src="https://i.ibb.co/H20pfns/kisspng-couch-mid-century-modern-table-sofa-bed-furniture-a-sofa-5a7d4a01c667b5-21143608151816038581.png"
                  alt="couch"
                  fill
                  sizes="true"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery */}
      <div className="w-1/2 flex flex-col gap-4">
        <h2 className="text-lg text-primaryNavyBlue font-josefin font-bold">
          Delivery
        </h2>
        <span className="flex items-center gap-2 text-sm font-lato">
          <HiMapPin className="text-primaryBlue font-bold" />
          <p className="text-primaryBlue/40 ">
            Send from Las Vegas, Nevada - USA
          </p>
        </span>
        <span className="flex gap-2 text-sm font-lato">
          <HiTruck className="text-primaryBlue font-bold mt-1" />
          <div className="flex flex-col gap-1">
            <p className="text-primaryBlue/40 ">
              lorem ipsum sit amet narasiis blensicaha rooesp jogni okp,
            </p>
            <p className="text-primaryBlue/40 ">
              lorem ipsum sit amet narasiis blensicaha rooesp jogni okp
            </p>
            <p className="text-primaryBlue/40 ">
              lorem ipsum sit amet narasiis blensicaha rooesp jogni okp
            </p>
          </div>
        </span>

        <div className="w-full py-8 border-y-[1px] border-y-black/10 ">
          <div className="w-[30%] bg-white h-24 relative flex items-stretch shadow-simetri">
            <div className="w-[60%] flex justify-center flex-col gap-1 p-2">
              <span className="text-xs font-lato text-primaryNavyBlue">
                Cashback
              </span>
              <span className="text-md font-lato text-primaryNavyBlue font-bold">
                8%
              </span>
              <span className="text-xs font-lato text-primaryNavyBlue">
                min 120rb
              </span>
            </div>
            <div className="w-[40%] bg-gradient-to-r from-primaryBlue to-primaryPink rounded-l-full flex relative">
              <ul className="absolute top-0 bottom-0 -right-2 w-3 flex flex-col gap-[0.15rem]">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => (
                  <li
                    key={item + item + ''}
                    className="w-full h-4 bg-primaryPink"
                  />
                ))}
              </ul>
              <span className="text-primarySkyBlue font-josefin font-bold text-2xl m-auto">
                Rp
              </span>
            </div>
          </div>
        </div>

        <div className="w-full py-2 flex justify-between">
          <span className=" text-sm text-primaryBlue/40 font-lato">
            Do you have problem with this product ?
          </span>
          <span className="flex items-center gap-2 text-sm font-lato">
            <BsFlagFill className="text-primaryBlue/40" />
            <span className="text-primaryNavyBlue">Report</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(InfoAdditional);

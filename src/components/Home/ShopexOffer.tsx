import Image from 'next/image';
import React from 'react';
import { Offer } from '../../data/shopexOffer';

const ShopexOffer: React.FC<{ shopexOfferData: Offer[] }> = ({
  shopexOfferData,
}) => {
  return (
    <div className="w-[900px] p-10">
      <h1 className="text-3xl text-primaryNavyBlue font-josefin text-center font-bold mb-8">
        What Shopex Offer
      </h1>

      {/* Offer */}
      <ul className="w-full h-72 flex items-stretch justify-between gap-6">
        {shopexOfferData.map((item: Offer) => (
          <li
            className="w-[28%] h-full rounded-lg shadow-simetri m-auto transition duration-500 hover:scale-110"
            key={item._id}
          >
            <div className="w-full h-[50%] flex p-4 relative overflow-hidden">
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
            <div className="w-full h-[50%] py-2 px-5 flex flex-col items-center justify-evenly pointer-events-none">
              <h2 className="text-sm text-primaryBlue font-bold font-josefin">
                {item.title}
              </h2>
              <p className="text-xs text-primaryBlue text-center">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ShopexOffer);

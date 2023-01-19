import React from 'react';
import { FaPercent } from 'react-icons/fa';

const CartCheckout: React.FC = () => {
  return (
    <div className="w-[35%] flex items-center flex-col gap-8">
      {/* TITLE */}
      <span className="py-2 text-md text-primaryNavyBlue font-josefin font-bold">
        Cart Totals
      </span>

      {/* TOTAL */}
      <div className="w-full bg-primarySkyBlue rounded-sm p-4 flex flex-col gap-8">
        <div className="py-2 flex items-center justify-between border-b-[1px] border-black/10 text-primaryNavyBlue">
          <span className="text-sm font-josefin font-bold">Totals</span>
          <span className="text-sm font-lato font-bold">$1234</span>
        </div>

        <span className="flex items-center gap-2 text-xs">
          <FaPercent className="text-[#16D16D]" />
          <span className="text-primaryBlue/40 font-lato">
            Shipping and terms calculating at Checkout
          </span>
        </span>

        <button className="bg-[#16D16D] py-2 text-primarySkyBlue font-josefin font-bold text-md border-none outline-none cursor-pointer hover:brightness-90">
          Procces to Checkout
        </button>
      </div>
    </div>
  );
};

export default React.memo(CartCheckout);

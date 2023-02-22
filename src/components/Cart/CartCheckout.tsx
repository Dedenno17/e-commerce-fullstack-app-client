import React from 'react';
import { FaPercent } from 'react-icons/fa';
import { useAppSelector } from '../../Store/hooks';

const CartCheckout: React.FC = () => {
  // global state
  const userCart = useAppSelector((state) => state.userCart.value);

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
          <span className="text-sm font-lato font-bold">
            ${userCart.totalPrice}
          </span>
        </div>

        <span className="flex items-center gap-2 text-xs">
          <FaPercent className="text-[#16D16D]" />
          <span className="text-primaryBlue/40 font-lato">
            Shipping and terms calculating at Checkout
          </span>
        </span>

        <button
          className={`py-2 text-primarySkyBlue font-josefin font-bold text-md border-none outline-none ${
            userCart.totalPrice !== 0
              ? 'cursor-pointer bg-[#16D16D] hover:brightness-90'
              : 'cursor-not-allowed bg-[#16D16D]/30'
          }`}
        >
          Procces to Checkout
        </button>
      </div>
    </div>
  );
};

export default React.memo(CartCheckout);

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { useAppDispatch } from '../../Store/hooks';
import {
  clearCart,
  decreaseQuantity,
  deleteCart,
  increaseQuantity,
} from '../../Store/slices/userCart-slice';
import { Cart, CartProducts } from '../../Types';

interface TableHead {
  name: string;
  width: string;
}

interface Props {
  tableHeads: TableHead[];
  cartData: Cart | undefined;
}

const CartProducts: React.FC<Props> = ({ tableHeads, cartData }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-[65%] flex flex-col gap-8">
      {/* HEAD */}
      <ul className="w-full flex items-center gap-4">
        {tableHeads.map((item: TableHead, i: number) => (
          <li
            key={Math.random() + i + ''}
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
      {cartData && cartData.products.length !== 0 && (
        <div className="w-full">
          {cartData.products.map((item: CartProducts) => (
            <ul
              className="w-full flex items-center border-b-[1px] border-b-black/10 gap-4"
              key={item._id}
            >
              <li
                style={{ width: `${tableHeads[0].width}` }}
                className="py-4 text-sm flex items-stretch h-32 gap-2"
              >
                <div className="w-[40%] flex p-1 bg-primarySkyBlue">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
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
                    Color: {item.color.toUpperCase()}
                  </span>
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
                  <AiOutlineMinus
                    className="cursor-pointer"
                    onClick={() => dispatch(decreaseQuantity(item._id))}
                  />
                  <span className="pointer-events-none">{item.quantity}</span>
                  <AiOutlinePlus
                    className="cursor-pointer"
                    onClick={() => dispatch(increaseQuantity(item._id))}
                  />
                </span>
              </li>

              <li
                className="flex items-center justify-center text-sm text-primaryNavyBlue font-josefin font-bold"
                style={{ width: `${tableHeads[3].width}` }}
              >
                ${(item.price * item.quantity).toFixed(1)}
              </li>

              <li
                className="flex items-center justify-center text-sm text-primaryNavyBlue font-josefin font-bold cursor-pointer"
                style={{ width: `${tableHeads[4].width}` }}
                onClick={() => dispatch(deleteCart(item._id))}
              >
                <FaTrashAlt />
              </li>
            </ul>
          ))}
        </div>
      )}

      {/* BUTTON */}
      {cartData && cartData.products.length !== 0 && (
        <div className="w-full flex items-center justify-end">
          <button
            type="button"
            onClick={() => dispatch(clearCart())}
            className="py-2 w-[20%] text-md text-primarySkyBlue font-josefin font-bold bg-primaryPink cursor-pointer hover:brightness-95 border-none outline-none"
          >
            Clear Cart
          </button>
        </div>
      )}

      {/* IF CART WAS EMPTY */}
      {cartData && cartData.products.length === 0 && (
        <div className="w-full py-4 text-black text-lato text-sm text-center font-normal flex flex-col items-center gap-8">
          There is no Product yet.
          <Link href="/shop">
            <span className="text-primarySkyBlue hover:bg-primaryPink px-4 py-2 bg-primaryBlue font-bold">
              Go shopping
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default React.memo(CartProducts);

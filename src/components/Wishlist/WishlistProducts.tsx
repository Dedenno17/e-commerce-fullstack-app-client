import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {
  useAddUserCartMutation,
  useUpdateUserWishlistMutation,
} from '../../Store/apiCalls';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { addCart } from '../../Store/slices/userCart-slice';
import { deleteWishlist } from '../../Store/slices/wishlist-slice';
import { WishlistProduct } from '../../Types';

interface TableHead {
  name: string;
  width: string;
}

const tableHeads: TableHead[] = [
  { name: 'Product', width: '35%' },
  { name: 'Unit Price', width: '15%' },
  { name: 'Stock', width: '20%' },
  { name: '', width: '20%' },
  { name: 'Remove', width: '10%' },
];

const WishlistProducts: React.FC = () => {
  const dispatch = useAppDispatch();

  // global state
  const user = useAppSelector((state) => state.user.value);
  const userCart = useAppSelector((state) => state.userCart.value);
  const wishlistData = useAppSelector((state) => state.wishlist.value);

  // function update wishlist in server
  const [updateWishlist, ,] = useUpdateUserWishlistMutation();

  // add user cart in server
  const [addUserCartInServer, ,] = useAddUserCartMutation();

  // state of click remove button
  const [isRemove, setIsRemove] = useState<boolean>(false);

  // state isAddedCart
  const [isAddedCart, setIsAddedCart] = useState<boolean>(false);

  // function delete wishlist
  const deleteWishlistHandler = (id: string) => {
    dispatch(deleteWishlist(id));
    setIsRemove(true);
  };

  // function to add to cart
  const addToCartHandler = (product: WishlistProduct, id: string) => {
    dispatch(addCart({ product }));
    dispatch(deleteWishlist(id));
    setIsRemove(true);
    setIsAddedCart(true);
  };

  // update wishlist in server
  useEffect(() => {
    if (wishlistData && isRemove && user) {
      updateWishlist({
        userId: user.others._id,
        token: user.accesToken,
        payload: { products: wishlistData.products },
      });
      setIsRemove(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlistData?.products]);

  // run when added a new cart
  useEffect(() => {
    if (isAddedCart && user) {
      addUserCartInServer({
        userId: user.others._id,
        token: user.accesToken,
        payload: userCart,
      });
      setIsAddedCart(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCart]);

  return (
    <div className="w-full">
      {/* TABLE HEAD*/}
      <ul className="w-full flex items-stretch space-between h-10">
        {tableHeads.map((tab: TableHead, i: number) => (
          <li
            key={Math.random() + 1 + ''}
            className={`flex items-center text-md text-primaryNavyBlue font-josefin font-bold ${
              i !== 0 ? 'justify-center' : 'justify-start'
            }`}
            style={{ width: tab.width }}
          >
            {tab.name}
          </li>
        ))}
      </ul>

      {/* TABLE BODY */}
      {wishlistData !== null && (
        <div className="w-full">
          {wishlistData.products?.map((item: WishlistProduct) => (
            <ul
              className="w-full flex items-center space-between border-b-[1px] border-b-primaryBlue/10"
              key={item._id}
            >
              <li
                style={{ width: `${tableHeads[0].width}` }}
                className="py-4 text-sm flex items-stretch h-32 gap-2"
              >
                <div className="w-[40%] flex p-1 bg-primarySkyBlue overflow-hidden">
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
                <span className="flex items-center gap-4 bg-primarySkyBlue p-1 pointer-events-none">
                  In Stock
                </span>
              </li>

              <li
                className="flex items-center justify-center text-sm font-josefin font-bold"
                style={{ width: `${tableHeads[3].width}` }}
              >
                <button
                  type="button"
                  className="w-[80%] py-2 bg-primaryPink text-white"
                  onClick={() => addToCartHandler(item, item._id)}
                >
                  Add To Cart
                </button>
              </li>

              <li
                className="flex items-center justify-center text-sm text-primaryNavyBlue font-josefin font-bold cursor-pointer"
                style={{ width: `${tableHeads[4].width}` }}
                onClick={() => deleteWishlistHandler(item._id)}
              >
                <FaTrashAlt />
              </li>
            </ul>
          ))}
        </div>
      )}
      {wishlistData === null ||
        (wishlistData?.products.length === 0 && (
          <span className="w-full py-10 flex items-center justify-center text-center text-sm text-primaryBlue/50">
            There is no data yet
          </span>
        ))}
    </div>
  );
};

export default React.memo(WishlistProducts);

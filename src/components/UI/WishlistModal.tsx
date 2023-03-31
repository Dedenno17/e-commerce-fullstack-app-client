import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  useCreateWishlisttMutation,
  useGetSingleProductQuery,
  useUpdateUserWishlistMutation,
} from '../../Store/apiCalls';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { Wishlist, WishlistProduct } from '../../Types';
import CartModalSkeleton from '../Home/CartModalSkeleton';
import Modal from '../UI/Modal';
import { createWishlist, addWishlist } from '../../Store/slices/wishlist-slice';

const WishlistModal: React.FC<{
  isShowWishlistModal: boolean;
  id: string;
  onClose: () => void;
}> = ({ isShowWishlistModal, id, onClose }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // global state
  const user = useAppSelector((state) => state.user.value);
  const userWishlist = useAppSelector((state) => state.wishlist.value);

  // fetch single product
  const { data: dataProduct, isLoading: isLoadingDataProduct } =
    useGetSingleProductQuery(id);

  // action to create wishlist in server
  const [createWishlistInServer, { data: dataWishlist }] =
    useCreateWishlisttMutation();

  // function update wishlist in server
  const [updateWishlist, ,] = useUpdateUserWishlistMutation();

  // state of colors
  const [colorProduct, setColorProduct] = useState<string>('');
  const [colorProductError, setColorProductError] = useState<boolean>(false);

  // state of isAdded
  const [isAdded, setIsAdded] = useState<boolean>(false);

  // fucntion to add to wishllist
  const addToWishlistHandler = () => {
    if (!user) {
      router.push('/authentication');
      return;
    }

    // if colors hasnt picked yet
    if (colorProduct === '') {
      setColorProductError(true);
      return;
    }

    // create or add wishlist
    if (user && dataProduct) {
      // create a wishlist product
      const newProductWishlist: WishlistProduct = {
        title: dataProduct.title,
        color: colorProduct,
        price: dataProduct.price,
        image: dataProduct.img,
        quantity: 1,
        _id: dataProduct._id,
      };

      //   create wihslist
      const productsWishlist = [];
      productsWishlist.push(newProductWishlist);

      const newWishlist: Wishlist = {
        userId: user.others._id,
        products: productsWishlist,
      };

      //   check if user wishlist null then create if wasnt then add
      if (user !== null) {
        dispatch(addWishlist({ product: newProductWishlist }));
        setIsAdded(true);
        return;
      }

      dispatch(createWishlist(newWishlist));
    }
  };

  useEffect(() => {
    if (userWishlist !== null && !isAdded) {
      createWishlistInServer(userWishlist);
      return;
    }

    if (userWishlist !== null && isAdded && user) {
      updateWishlist({
        userId: user.others._id,
        token: user.accesToken,
        payload: { products: userWishlist.products },
      });
      setIsAdded(false);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userWishlist]);


  return (
    <Modal className="px-4" isAnimating={isShowWishlistModal} onClose={onClose}>
      {!isLoadingDataProduct && dataProduct && (
        <>
          {/* CLOSE BUTTON */}
          <div className="w-full flex items-center justify-end py-2 ">
            <div
              className="w-[5%] h-6 text-xs flex items-center justify-center text-primaryRed font-lato font-normal cursor-pointer hover:bg-primarySkyBlue"
              onClick={onClose}
            >
              X
            </div>
          </div>

          {/* PRODUCT */}
          <div className="w-full flex gap-4 h-60 items-stretch border-y-[1px] border-y-black/10">
            {/* IMAGE */}
            <div className="w-[35%] p-4">
              <div className="relative w-full h-full">
                <Image
                  src={dataProduct.img}
                  alt={dataProduct.title}
                  sizes="true"
                  fill
                  priority
                />
              </div>
            </div>
            {/* DESC */}
            <div className="w-[65%] flex flex-col justify-center gap-3">
              <h2 className="text-2xl font-josefin text-primaryNavyBlue font-bold">
                {dataProduct.title}
              </h2>
              <p className="text-sm font-lato text-primaryBlue/40 font-normal">
                {dataProduct.description.slice(0, 100)}
              </p>
              <div className="w-full flex gap-6 items-center text-sm text-primaryBlue/40 font-josefin font-bold">
                <ul className="flex items-center gap-2">
                  {dataProduct.colors.map((item: string) => (
                    <li
                      key={item + 1 + ''}
                      className="w-3 h-3 rounded-full border-[1px] border-black/20 cursor-pointer"
                      style={{ background: `${item}` }}
                      onClick={() => {
                        setColorProduct(item);
                        setColorProductError(false);
                      }}
                    />
                  ))}
                </ul>
                Color: {colorProduct.toUpperCase()}
              </div>
              <span className="text-lg font-josefin text-primaryNavyBlue font-normal">
                ${dataProduct.price}
              </span>
            </div>
          </div>

          {colorProductError && (
            <span className="w-full flex justify-end text-xs text-primaryRed font-lato font-semibold p-2">
              You have to pick one color
            </span>
          )}

          {/* BUTTON ADD */}
          <div className="w-full flex items-center justify-end py-3">
            <button
              className="w-[30%] border-none outline-none py-2 px-2 bg-primaryPink hover:brightness-90 text-md text-white font-josefin font-bold cursor-pointer"
              onClick={addToWishlistHandler}
            >
              Add to Wishlist
            </button>
          </div>
        </>
      )}

      {isLoadingDataProduct && !dataProduct && <CartModalSkeleton />}
    </Modal>
  );
};

export default React.memo(WishlistModal);

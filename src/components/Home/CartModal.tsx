import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  useAddUserCartMutation,
  useCreateUserCartMutation,
  useGetSingleProductQuery,
  useGetUserCartQuery,
} from '../../Store/apiCalls';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { addCart, createCart } from '../../Store/slices/userCart-slice';
import { Cart, CartProducts } from '../../Types';
import Modal from '../UI/Modal';
import CartModalSkeleton from './CartModalSkeleton';

const CartModal: React.FC<{
  isShowCartModal: boolean;
  id: string;
  onClose: () => void;
}> = ({ isShowCartModal, onClose, id }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isAddedCart, setIsAddedCart] = useState<boolean>(false);

  // global state
  const user = useAppSelector((state) => state.user.value);
  const userCart = useAppSelector((state) => state.userCart.value);

  // fetch single product
  const { data: dataProduct, isLoading: isLoadingDataProduct } =
    useGetSingleProductQuery(id);

  // state of colors
  const [colorProduct, setColorProduct] = useState<string>('');
  const [colorProductError, setColorProductError] = useState<boolean>(false);

  // get user cart from server
  const { data: dataUserCart } = useGetUserCartQuery({
    userId: user?.others._id,
    token: user?.accesToken,
  });

  // create user cart in server
  const [
    createUserCartInServer,
    { data: dataNewUserCart, isLoading: isLoadingNewUserCart },
  ] = useCreateUserCartMutation();

  // add user cart in server
  const [addUserCartInServer, ,] = useAddUserCartMutation();

  // add to cart
  const addToCartHandler = () => {
    // check if user has been login or hasnt
    if (!user) {
      router.push('/authentication');
      return;
    }

    if (user && dataProduct) {
      const newCartProduct: CartProducts = {
        productsId: dataProduct._id,
        title: dataProduct.title,
        color: colorProduct,
        image: dataProduct.img,
        price: dataProduct.price,
        quantity: 1,
      };

      let productsCart = [];
      productsCart.push(newCartProduct);

      const newCart: Cart = {
        userId: user.others._id,
        products: productsCart,
        totalPrice: productsCart[0].quantity * productsCart[0].price,
      };

      // if colors hasnt picked yet
      if (colorProduct === '') {
        setColorProductError(true);
        return;
      }

      // check if user hasnt cart in server then create one
      if (!dataUserCart) {
        createUserCartInServer(newCart);
        return;
      }

      // check if user has cart in server then attach it
      if (dataUserCart) {
        dispatch(addCart({ product: newCartProduct }));
        setIsAddedCart(true);
        return;
      }
    }
  };

  // run when success create a new cart
  useEffect(() => {
    if (dataNewUserCart && !isLoadingNewUserCart && user) {
      dispatch(createCart(dataNewUserCart));
      router.push(`/cart/${user.others._id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataNewUserCart, isLoadingNewUserCart]);

  // run when added a new cart
  useEffect(() => {
    if (isAddedCart && user) {
      addUserCartInServer({
        userId: user.others._id,
        token: user.accesToken,
        payload: userCart,
      });
      router.push(`/cart/${user?.others._id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddedCart]);

  return (
    <Modal className="px-4" isAnimating={isShowCartModal} onClose={onClose}>
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
              <div className="relative w-full h-full bg-primaryPink">
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
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        </>
      )}

      {isLoadingDataProduct && !dataProduct && <CartModalSkeleton />}
    </Modal>
  );
};

export default React.memo(CartModal);

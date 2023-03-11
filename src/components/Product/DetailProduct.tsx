import React, { ReactNode, useEffect, useState } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { Cart, CartProducts, Product } from '../../Types';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { useRouter } from 'next/router';
import {
  useAddUserCartMutation,
  useCreateUserCartMutation,
  useGetUserCartQuery,
} from '../../Store/apiCalls';
import { addCart, createCart } from '../../Store/slices/userCart-slice';

interface Props {
  productDetail: Product;
}

interface SocialMedia {
  id: string;
  icon: ReactNode;
  slug: string;
}

const socialMedia: SocialMedia[] = [
  {
    id: 'facebook',
    icon: <ImFacebook />,
    slug: 'www.facebook.com',
  },
  {
    id: 'instagram',
    icon: <AiFillInstagram />,
    slug: 'www.instagram.com',
  },
  {
    id: 'twitter',
    icon: <ImTwitter />,
    slug: 'www.twitter.com',
  },
];

const DetailProduct: React.FC<Props> = ({ productDetail }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // global state
  const user = useAppSelector((state) => state.user.value);
  const userCart = useAppSelector((state) => state.userCart.value);

  // state of addedcart
  const [isAddedCart, setIsAddedCart] = useState<boolean>(false);

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

  // function to added cart
  const addToCartHandler = () => {
    // if user hasnt login
    if (!user) {
      router.push('/authentication');
      return;
    }

    // if user has login
    if (user && productDetail) {
      // create cart
      const newCartProduct: CartProducts = {
        _id: productDetail._id,
        title: productDetail.title,
        color: colorProduct,
        image: productDetail.img,
        price: productDetail.price,
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddedCart]);

  return (
    <div className="w-[1024px] min-h-[28rem] shadow-simetri p-4 m-auto flex items-stretch">
      <div className="w-full flex items-stretch gap-8">
        {/* IMAGE */}
        <div className="w-1/2 flex">
          <div className="w-full h-full relative">
            <Image
              src={productDetail.img}
              alt={productDetail.title}
              fill
              sizes="true"
              priority
            />
          </div>
        </div>
        {/* DESC */}
        <div className="w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-4xl text-primaryNavyBlue font-josefin font-bold">
            {productDetail.title}
          </h1>
          {/* RATING */}
          <span className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((rat: number) => (
              <span key={rat + Math.random() + ''}>
                {rat <= productDetail.rating && (
                  <BsStarFill className="text-[#D0A32D] text-xs" />
                )}
                {rat > productDetail.rating && (
                  <BsStar className="text-[#D0A32D] text-xs" />
                )}
              </span>
            ))}
            <p className="text-xs text-primaryBlue">
              {' '}
              {`(${productDetail.rating})`}
            </p>
          </span>
          {/* PRICE */}
          <span className="text-sm text-primaryBlue font-bold font-josefin">
            ${productDetail.price}
          </span>
          {/* COLORS */}
          <span className="text-sm font-josefin font-bold text-primaryNavyBlue flex items-center gap-6">
            <h3 className="text-sm text-primaryBlue font-bold font-josefin">
              Color :
            </h3>
            <ul className="flex items-center gap-1">
              {productDetail.colors.map((col: string, i: number) => (
                <div
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    colorProduct === col
                      ? 'border-black/80 border-[2px]'
                      : 'border-black/20 border-[1px]'
                  }`}
                  key={Math.random() + i + ''}
                  style={{ backgroundColor: `${col}` }}
                  onClick={() => {
                    setColorProduct(col);
                    setColorProductError(false);
                  }}
                />
              ))}
            </ul>
          </span>
          {/* PRODUCT DESC */}
          <p className="text-sm text-lato text-primaryBlue/50">
            {productDetail.description}
          </p>
          {/* CATEGORIES */}
          <span className="text-sm  text-primaryNavyBlue flex items-center gap-6">
            <h3 className="text-sm text-primaryBlue font-bold font-josefin">
              Categories :
            </h3>
            <ul className="flex items-center gap-1">
              {productDetail.categories.map((cat: string, i: number) => (
                <p
                  key={Math.random() + i + ''}
                  className="text-sm text-lato text-primaryBlue/50"
                >
                  {cat},
                </p>
              ))}
            </ul>
          </span>
          {/* BUTTON */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={addToCartHandler}
              className="px-6 py-2 bg-transparent border-[1px] border-primaryBlue/10 text-sm text-primaryBlue font-josefin font-bold hover:bg-primaryPink hover:text-primarySkyBlue"
            >
              Add to Cart
            </button>
            <span className="p-[0.65rem] text-sm text-primaryBlue border-[1px] border-primaryBlue/10 cursor-pointer transition duration-500 hover:scale-105">
              <MdOutlineFavoriteBorder />
            </span>
          </div>
          {/* SOCIAL MEDIA */}
          <span className="flex items-center gap-6 w-full">
            <h3 className="text-sm text-primaryBlue font-bold font-josefin">
              Share :
            </h3>
            <ul className="flex items-center gap-2">
              {socialMedia.map((item: SocialMedia) => (
                <div
                  className="w-full flex justify-center items-center rounded-full text-primarySkyBlue bg-primaryPurple text-xs p-[0.2rem] cursor-pointer"
                  key={item.id}
                >
                  {item.icon}
                </div>
              ))}
            </ul>
          </span>
          {/* ERROR MESSAGE */}
          {colorProductError && (
            <span className="w-full text-left text-xs text-primaryRed font-lato font-semibold p-2">
              You have to pick one color
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(DetailProduct);

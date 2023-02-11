import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DiscountItem from '../src/components/Home/DiscountItem';
import FeaturedProducts from '../src/components/Home/FeaturedProducts';
import HeroCarraousel from '../src/components/Home/HeroCarraousel';
import LeatestBlogs from '../src/components/Home/LeatestBlogs';
import LeatestProducts from '../src/components/Home/LeatestProducts';
import NewsLetter from '../src/components/Home/NewsLetter';
import ShopexOffer from '../src/components/Home/ShopexOffer';
import TopCategories from '../src/components/Home/TopCategories';
import TrendingProducts from '../src/components/Home/TrendingProducts';
import UniqueFeatures from '../src/components/Home/UniqueFeatures';
import { shopexOffers } from '../src/data/shopexOffer';
import {
  useCreateUserCartMutation,
  useGetUserCartQuery,
} from '../src/Store/apiCalls';
import { useAppDispatch, useAppSelector } from '../src/Store/hooks';
import { Cart, Product } from '../src/Types';
import { createCart } from '../src/Store/slices/userCart-slice';
import CartModal from '../src/components/Home/CartModal';

// interface Home props
interface HomeProps {
  productsData: Product[];
}

// get static props function
export const getStaticProps: GetStaticProps<HomeProps> = async (): Promise<
  GetStaticPropsResult<HomeProps> | any
> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    if (!res.ok) {
      throw new Error('Failed to fetch!');
    }
    const data = await res.json();

    return {
      props: {
        productsData: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const Home: NextPage<HomeProps> = ({ productsData }) => {
  const [cartProductId, setCartProductId] = useState<string>('');
  const [isShowCartModal, setIsShowCartModal] = useState<boolean>(false);

  // user global state
  const user = useAppSelector((state) => state.user.value);

  // add to cart function
  const addToCartHandler = (id: string) => {
    setCartProductId(id);
    setIsShowCartModal(true);
  };

  const closeCartModalHandler = () => {
    setIsShowCartModal(false);
  };

  return (
    <>
      <Head>
        <title>HEKTO | Get your own comfortable place</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroCarraousel />
        <section className="w-full min-h-screen p-10 flex flex-col gap-6 items-center">
          <FeaturedProducts
            productsData={productsData}
            addToCartHandler={addToCartHandler}
          />
          <LeatestProducts productsData={productsData} />
          <ShopexOffer shopexOfferData={shopexOffers} />
        </section>
        <UniqueFeatures />
        <section className="w-full min-h-screen p-10 flex flex-col gap-6 items-center">
          <TrendingProducts productsData={productsData} />
          <DiscountItem productsData={productsData} />
          <TopCategories productsData={productsData} />
        </section>
        <NewsLetter />
        <section className="w-full min-h-screen p-10 flex flex-col justify-center items-center">
          <LeatestBlogs />
        </section>
      </main>

      {isShowCartModal && (
        <CartModal
          isShowCartModal={isShowCartModal}
          id={cartProductId}
          onClose={closeCartModalHandler}
        />
      )}
    </>
  );
};

export default Home;

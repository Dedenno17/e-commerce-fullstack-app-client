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
import { Blog, Product } from '../src/Types';
import CartModal from '../src/components/UI/CartModal';
import WishlistModal from '../src/components/UI/WishlistModal';

// interface Home props
interface HomeProps {
  productsData: Product[];
  blogsData: Blog[];
}

// get all products function
export const getAllProducts = async (): Promise<Product[] | any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    if (!res.ok) {
      throw new Error('Failed to fetch!');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// get all blogs function
export const getAllBlogs = async (): Promise<Blog[] | any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`);
    if (!res.ok) {
      throw new Error('Failed to fetch!');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// get static props function
export const getStaticProps: GetStaticProps<HomeProps> = async (): Promise<
  GetStaticPropsResult<HomeProps> | any
> => {
  const productsData = await getAllProducts();
  const blogsData = await getAllBlogs();

  return {
    props: {
      productsData,
      blogsData,
    },
    revalidate: 1,
  };
};

const Home: NextPage<HomeProps> = ({ productsData, blogsData }) => {
  const [cartProductId, setCartProductId] = useState<string>('');
  const [isShowCartModal, setIsShowCartModal] = useState<boolean>(false);
  const [wishlistProductId, setWishlistProductId] = useState<string>('');
  const [isShowWishlistModal, setIsShowWishlistModal] =
    useState<boolean>(false);

  // add to cart function
  const addToCartHandler = (id: string) => {
    setCartProductId(id);
    setIsShowCartModal(true);
  };

  const closeCartModalHandler = () => {
    setIsShowCartModal(false);
  };

  // add to wishlist function
  const addToWishlistHandler = (id: string) => {
    setWishlistProductId(id);
    setIsShowWishlistModal(true);
  };

  const closeWishlistModalHandler = () => {
    setIsShowWishlistModal(false);
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
            addToWishlistHandler={addToWishlistHandler}
          />
          <LeatestProducts
            productsData={productsData}
            addToCartHandler={addToCartHandler}
            addToWishlistHandler={addToWishlistHandler}
          />
          <ShopexOffer shopexOfferData={shopexOffers} />
        </section>
        <UniqueFeatures productsData={productsData} />
        <section className="w-full min-h-screen p-10 flex flex-col gap-6 items-center">
          <TrendingProducts productsData={productsData} />
          <DiscountItem productsData={productsData} />
          <TopCategories productsData={productsData} />
        </section>
        <NewsLetter />
        <section className="w-full min-h-screen p-10 flex flex-col justify-center items-center">
          <LeatestBlogs blogsData={blogsData} />
        </section>
      </main>

      {isShowCartModal && (
        <CartModal
          isShowCartModal={isShowCartModal}
          id={cartProductId}
          onClose={closeCartModalHandler}
        />
      )}

      {isShowWishlistModal && (
        <WishlistModal
          isShowWishlistModal={isShowWishlistModal}
          id={wishlistProductId}
          onClose={closeWishlistModalHandler}
        />
      )}
    </>
  );
};

export default Home;

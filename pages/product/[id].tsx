import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import DetailProduct from '../../src/components/Product/DetailProduct';
import InfoProduct from '../../src/components/Product/InfoProduct';
import RelatedProduct from '../../src/components/Product/RelatedProduct';
import { Product } from '../../src/Types';
import { useGetSingleProductQuery } from '../../src/Store/apiCalls';
import { ParsedUrlQuery } from 'querystring';

interface ProductDetailsProps {
  productDetail: Product;
}

interface Iparams extends ParsedUrlQuery {
  id: string;
}

// get static path function
export const getStaticPaths: GetStaticPaths<ParsedUrlQuery> = async (): Promise<
  GetStaticPathsResult<ParsedUrlQuery> | any
> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();

    const paths = data.map((pro: Product) => ({
      params: { id: pro._id.toString() },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
};

// get static props function
export const getStaticProps: GetStaticProps<ProductDetailsProps> = async (
  context
): Promise<GetStaticPropsResult<ProductDetailsProps> | any> => {
  const { id } = context.params as Iparams;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/products/find/${id}`
    );
    if (!res.ok) {
      throw new Error();
    }
    const data = await res.json();
    return {
      props: {
        productDetail: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const ProductDetails: NextPage<ProductDetailsProps> = ({ productDetail }) => {
  console.log(productDetail);
  return (
    <>
      <Head>
        <title>HEKTO | Get your own comfortable place</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="w-full min-h-screen py-14 m-auto flex items-center">
          <DetailProduct productDetail={productDetail} />
        </section>
        <InfoProduct />
        <section className="w-full min-h-[28rem] m-auto flex justify-center items-center">
          <RelatedProduct />
        </section>
      </main>
    </>
  );
};

export default ProductDetails;

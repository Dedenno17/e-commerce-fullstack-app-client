import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import CartCheckout from '../../src/components/Cart/CartCheckout';
import CartProducts from '../../src/components/Cart/CartProducts';
import { useUpdateUserCartMutation } from '../../src/Store/apiCalls';
import { useAppSelector } from '../../src/Store/hooks';

interface TableHead {
  name: string;
  width: string;
}
const tableHeads: TableHead[] = [
  { name: 'Product', width: '40%' },
  { name: 'Price', width: '15%' },
  { name: 'Quantity', width: '20%' },
  { name: 'Total', width: '20%' },
  { name: '', width: '5%' },
];

const Cart: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // global state
  const userCart = useAppSelector((state) => state.userCart.value);
  const user = useAppSelector((state) => state.user.value);

  // update cart in server
  const [updateUserCart, { error }] = useUpdateUserCartMutation();

  useEffect(() => {
    if (user && id) {
      updateUserCart({
        userId: id,
        token: user.accesToken,
        payload: {
          products: userCart.products,
          totalPrice: userCart.totalPrice,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCart]);

  return (
    <>
      <Head>
        <title>HEKTO | Cart</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="w-full min-h-screen py-14 flex items-center">
          <div className="w-[1024px] m-auto flex gap-8">
            <CartProducts tableHeads={tableHeads} cartData={userCart} />
            <CartCheckout />
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;

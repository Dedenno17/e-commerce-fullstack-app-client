import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { FaPercent } from 'react-icons/fa';
import {
  useCreateOrderMutation,
  useCreatePaymentIntentMutation,
} from '../../Store/apiCalls';
import { useAppSelector } from '../../Store/hooks';
import { CartProducts } from '../../Types';
import CartCheckoutForm from './CartCheckoutForm';

const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.length
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : '';

const CartCheckout: React.FC = () => {
  // global state
  const userCart = useAppSelector((state) => state.userCart.value);

  // client secret
  const [clientSecret, setClientSecret] = useState<string | undefined>(
    undefined
  );

  // create Order
  const [createOrder, { data: orderData }] = useCreateOrderMutation();

  // create payment intent
  const [createPaymentIntent, { data: paymentData }] =
    useCreatePaymentIntentMutation();

  // function to acc payment
  const accPayment = () => {
    // create Order
    const orderProducts = userCart.products.map((item: CartProducts) => {
      return {
        productId: item._id,
        title: item.title,
        color: item.color,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      };
    });

    createOrder({
      userId: userCart.userId,
      products: orderProducts,
      status: 'pending',
      totalPrice: userCart.totalPrice,
    });
  };

  // create auto payment intent when order data was a made true
  useEffect(() => {
    if (orderData) {
      createPaymentIntent(orderData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderData]);

  // set client secret after create payment intent
  useEffect(() => {
    if (paymentData) {
      setClientSecret(paymentData.clientSecret);
    }
  }, [paymentData]);

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
          onClick={accPayment}
        >
          Procces to Checkout
        </button>
      </div>

      {/* CHECKOUT FORM */}
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CartCheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default React.memo(CartCheckout);

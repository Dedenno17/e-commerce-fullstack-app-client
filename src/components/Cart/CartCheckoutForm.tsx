import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CartCheckoutForm: React.FC = () => {
  // stripe hooks
  const stripe = useStripe();
  const elements = useElements();

  // state of status payment
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');
  const [isProcessing, setIsprocessing] = useState<null | boolean>(null);

  // submit payment
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    // check stripe & element
    if (!stripe || !elements) {
      return;
    }

    setIsprocessing(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    // check if error
    if (error) {
      setErrorMessage(error.message);
    }

    setIsprocessing(false);
  };

  return (
    <form
      className="w-full bg-primarySkyBlue rounded-sm p-4 flex flex-col gap-8"
      onSubmit={submitHandler}
    >
      <PaymentElement />
      {/* BUTTON */}
      <button
        type="submit"
        className="py-2 text-primarySkyBlue font-josefin font-bold text-md border-none outline-none cursor-pointer bg-[#16D16D] hover:brightness-90"
      >
        CHECKOUT
      </button>
      {!isProcessing && errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

export default React.memo(CartCheckoutForm);

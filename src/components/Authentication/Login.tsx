import { useFormik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { loginSchema } from '../../schema';
import { useLoginMutation } from '../../Store/apiCalls';
import { useAppDispatch } from '../../Store/hooks';
import { setUser } from '../../Store/slices/user-slice';

interface Values {
  username: string;
  password: string;
}

const Login: React.FC<{ setCurrentPage: (page: string) => void }> = ({
  setCurrentPage,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // hooks for post the data user
  const [sendData, { data, isLoading, error }] = useLoginMutation();

  // function submit form
  const submitHandler = (values: Values) => {
    sendData(values);
  };

  // control form state
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit: submitHandler,
    });

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      router.push('/');
    }
  }, [data, dispatch, router]);

  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-10 px-10">
      {/* HEAD */}
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-4xl text-primaryNavyBlue font-josefin font-bold text-center">
          Login
        </h1>
        <span className="text-sm text-primaryBlue/40 font-lato">
          Please login using detail below
        </span>
      </div>

      {/* FORM */}
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className={`w-full py-2 px-4 border-[1px] outline-none text-md font-lato ${
            errors.username && touched.username
              ? 'border-primaryRed'
              : 'border-black/10'
          }`}
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && touched.username && (
          <p className="text-[0.6rem] text-primaryRed text-left font-lato font-normal">
            {errors.username}
          </p>
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={`w-full py-2 px-4 border-[1px] outline-none text-md font-lato ${
            errors.password && touched.password
              ? 'border-primaryRed'
              : 'border-black/10'
          }`}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <p className="text-[0.6rem] text-primaryRed text-left font-lato font-normal">
            {errors.password}
          </p>
        )}
        <span className="text-sm text-primaryBlue/40 font-lato">
          Forgot your password ?
        </span>
        <button
          type="submit"
          className="w-full bg-primaryPink text-primarySkyBlue font-josefin text-md py-2"
        >
          {isLoading ? 'Loading ...' : 'Sign In'}
        </button>
      </form>

      {error && (
        <p className="text-[0.8rem] text-primaryRed font-lato font-normal text-left">
          Something went wrong
        </p>
      )}

      <span className="text-sm text-primaryBlue/40 font-lato">
        Dont have any account ?{' '}
        <span
          className="hover:text-primaryPink hover:underline cursor-pointer"
          onClick={() => setCurrentPage('register')}
        >
          Create an account
        </span>
      </span>
    </div>
  );
};

export default React.memo(Login);

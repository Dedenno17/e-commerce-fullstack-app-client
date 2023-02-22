import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { regisSchema } from '../../schema';
import { useLoginMutation, useRegisterMutation } from '../../Store/apiCalls';
import { useAppDispatch } from '../../Store/hooks';
import { setUser } from '../../Store/slices/user-slice';
import { useRouter } from 'next/router';

interface Values {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptance: boolean;
}

const Register: React.FC<{ setCurrentPage: (page: string) => void }> = ({
  setCurrentPage,
}) => {
  const router = useRouter();

  // DISPATCH THE USER STATE
  const dispatch = useAppDispatch();

  // POST THE DATA FUNCTION
  const [sendData, { isLoading, error, data }] = useRegisterMutation();

  // GET THE DATA USER BY LOGIN
  const [getDataUser, { data: userData, isLoading: isLoadingUser }] =
    useLoginMutation();

  // SUBMIT FUNCTION
  const submitHandler = (values: Values) => {
    sendData(values);
  };

  // FORM CONTROL
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptance: false,
      },
      validationSchema: regisSchema,
      onSubmit: submitHandler,
    });

  // login when regis succes
  useEffect(() => {
    if (data) {
      getDataUser({ username: values.username, password: values.password });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // move to home when login succes
  useEffect(() => {
    if (userData && !isLoadingUser) {
      dispatch(setUser(userData));
      router.push('/');
    }
  }, [userData, dispatch, router, isLoadingUser]);

  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-4 px-10">
      {/* HEAD */}
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-4xl text-primaryNavyBlue font-josefin font-bold text-center">
          Register
        </h1>
        <span className="text-sm text-primaryBlue/40 font-lato">
          Please fill out this form
        </span>
      </div>

      {/* FORM */}
      <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={values.username}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`w-full py-2 px-4 border-[1px] outline-none text-sm font-lato ${
            errors.username && touched.username
              ? 'border-primaryRed'
              : 'border-black/10'
          }`}
        />
        {errors.username && touched.username && (
          <p className="text-[0.6rem] text-primaryRed text-left font-lato font-normal">
            {errors.username}
          </p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`w-full py-2 px-4 border-[1px] outline-none text-sm font-lato ${
            errors.email && touched.email
              ? 'border-primaryRed'
              : 'border-black/10'
          }`}
        />
        {errors.email && touched.email && (
          <p className="text-[0.6rem] text-primaryRed text-left font-lato font-normal">
            {errors.email}
          </p>
        )}
        <span className="text-left text-black/30 font-lato text-[0.6rem] font-semibold">
          *Only less than 8 character, must be include capital at begining and
          number
        </span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`w-full py-2 px-4 border-[1px] outline-none text-sm font-lato ${
            errors.password && touched.password
              ? 'border-primaryRed'
              : 'border-black/10'
          }`}
        />
        {errors.password && touched.password && (
          <p className="text-[0.6rem] text-primaryRed text-left font-lato font-normal">
            {errors.password}
          </p>
        )}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`w-full py-2 px-4 border-[1px] outline-none text-sm font-lato ${
            errors.confirmPassword && touched.confirmPassword
              ? 'border-primaryRed'
              : 'border-black/10'
          }`}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-[0.6rem] text-primaryRed text-left font-lato font-normal">
            {errors.confirmPassword}
          </p>
        )}
        <span className="text-sm text-primaryBlue/40 font-lato flex items-center gap-4">
          <input
            type="checkbox"
            name="acceptance"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>
            I agree with the <strong>Terms and Condition</strong> and the{' '}
            <strong>Privacy Policy</strong>
          </span>
        </span>
        {errors.acceptance && touched.acceptance && (
          <p className="text-[0.6rem] text-primaryRed text-left font-lato font-normal">
            {errors.acceptance}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-primaryPink text-primarySkyBlue font-josefin text-sm py-2"
        >
          {isLoading ? 'Loading ...' : 'Create Account'}
        </button>
      </form>

      {error && (
        <p className="text-[0.8rem] text-primaryRed font-lato font-normal text-left">
          Something went wrong
        </p>
      )}

      <span className="text-sm text-primaryBlue/40 font-lato flex items-center gap-4">
        Already have account ?
        <span
          className="hover:text-primaryPink hover:underline cursor-pointer"
          onClick={() => setCurrentPage('login')}
        >
          Login
        </span>
      </span>
    </div>
  );
};

export default React.memo(Register);

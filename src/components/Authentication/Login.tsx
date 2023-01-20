import React from 'react';

const Login: React.FC<{ setCurrentPage: (page: string) => void }> = ({
  setCurrentPage,
}) => {
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
      <form className="w-full flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full py-2 px-4 border-[1px] border-black/10 outline-none text-md font-lato"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full py-2 px-4 border-[1px] border-black/10 outline-none text-md font-lato"
        />
        <span className="text-sm text-primaryBlue/40 font-lato">
          Forgot your password ?
        </span>
        <button
          type="submit"
          className="w-full bg-primaryPink text-primarySkyBlue font-josefin text-md py-2"
        >
          Sign In
        </button>
      </form>

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

import React from 'react';

const Register: React.FC<{ setCurrentPage: (page: string) => void }> = ({
  setCurrentPage,
}) => {
  return (
    <div className="w-1/2 flex flex-col items-center justify-center gap-6 px-10">
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
      <form className="w-full flex flex-col gap-3">
        <div className="w-full flex items-center gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 py-2 px-4 border-[1px] border-black/10 outline-none text-sm font-lato"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 py-2 px-4 border-[1px] border-black/10 outline-none text-sm font-lato"
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          className="w-full py-2 px-4 border-[1px] border-black/10 outline-none text-sm font-lato"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full py-2 px-4 border-[1px] border-black/10 outline-none text-sm font-lato"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full py-2 px-4 border-[1px] border-black/10 outline-none text-sm font-lato"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full py-2 px-4 border-[1px] border-black/10 outline-none text-sm font-lato"
        />
        <span className="text-sm text-primaryBlue/40 font-lato flex items-center gap-4">
          <input type="checkbox" />
          <span>
            I agree with the <strong>Terms and Condition</strong> and the{' '}
            <strong>Privacy Policy</strong>
          </span>
        </span>
        <button
          type="submit"
          className="w-full bg-primaryPink text-primarySkyBlue font-josefin text-sm py-2"
        >
          Create Account
        </button>
      </form>

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

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useLoginMutation } from '../../Store/apiCalls';
import { useAppDispatch } from '../../Store/hooks';
import { setUser } from '../../Store/slices/user-slice';

const Login: React.FC<{ setCurrentPage: (page: string) => void }> = ({
  setCurrentPage,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // hooks for post the data user
  const [login, { data, isLoading }] = useLoginMutation();

  // control form state
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // function submit form
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };

    try {
      await login(user).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

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
      <form className="w-full flex flex-col gap-4" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Username"
          className="w-full py-2 px-4 border-[1px] border-black/10 outline-none text-md font-lato"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full py-2 px-4 border-[1px] border-black/10 outline-none text-md font-lato"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
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

import React, { useState } from 'react';
import { AiOutlineMail, AiOutlineSetting } from 'react-icons/ai';
import { TfiAngleDown } from 'react-icons/tfi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { useRouter } from 'next/router';
import { setAuthState } from '../../Store/slices/authState-slice';
import { BiUser } from 'react-icons/bi';
import Link from 'next/link';
import { setUser } from '../../Store/slices/user-slice';

const Announcement: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // global state
  const user = useAppSelector((state) => state.user.value);
  const userCart = useAppSelector((state) => state.userCart.value);

  // function move to login
  const loginHandler = () => {
    dispatch(setAuthState('login'));
    router.push('/authentication');
  };

  // function move to register
  const regisHandler = () => {
    dispatch(setAuthState('register'));
    router.push('/authentication');
  };

  // state to show menu user
  const [isShowMenuUser, setIsShowMenuUser] = useState<boolean>(false);

  // blur user menu function
  const blurUserMenuHandler = () => {
    setIsShowMenuUser(false);
    console.log('blur');
  };

  // click user menu handler
  const clickUserMenuHandler = () => {
    setIsShowMenuUser(true);
  };

  // logout handler
  const logoutHandler = () => {
    router.push('/authentication');
    dispatch(setUser(null));
  };

  return (
    <div className="w-full bg-primaryPurple p-2 text-xs text-primarySkyBlue font-josefin flex">
      {!user && (
        <div className="m-auto w-[60%] flex items-center justify-between">
          <span className="text-center">
            Super Deal! Free Shipping and Orders Over $50
          </span>
          <div className="flex items-center gap-5">
            <span
              onClick={loginHandler}
              className="cursor-pointer hover:underline"
            >
              Login
            </span>
            <span
              onClick={regisHandler}
              className="cursor-pointer hover:underline"
            >
              Register
            </span>
          </div>
        </div>
      )}

      {user && (
        <div className="m-auto w-[65%] flex items-center justify-between">
          <div className="flex items-center gap-5">
            {/* USER MENU */}
            <button
              className="gap-2 flex items-center cursor-pointer relative border-none outline-none"
              onBlur={blurUserMenuHandler}
              onClick={clickUserMenuHandler}
            >
              <div className="w-4 h-4 rounded-full bg-primarySkyBlue pointer-events-none" />
              <p className="pointer-events-none">{user.others.username}</p>
              <TfiAngleDown className="pointer-events-none" />
              {isShowMenuUser && (
                <ul className="absolute z-10 -bottom-20 left-0 w-24 flex items-center text-center flex-col gap-2 mx-auto bg-white shadow-simetri rounded-sm p-2">
                  <li className="w-full text-sm text-black/40 font-lato font-normal cursor-pointer hover:underline">
                    <Link href="/profile">
                      <div className="flex items-center w-full gap-1">
                        <BiUser />
                        Profile
                      </div>
                    </Link>
                  </li>
                  <li
                    className="w-full text-sm text-black/40 font-lato font-normal cursor-pointer hover:underline"
                    onClick={logoutHandler}
                  >
                    <div className="flex items-center w-full gap-1">
                      <AiOutlineSetting />
                      Logout
                    </div>
                  </li>
                </ul>
              )}
            </button>
            {/* EMAIL */}
            <span className="gap-2 flex items-center">
              <AiOutlineMail />
              <p>{user.others.email}</p>
            </span>
          </div>

          <div className="flex items-center gap-5">
            {/* LANGUANGE MENU */}
            <span className="gap-1 flex items-center">
              English <TfiAngleDown />
            </span>
            {/* CURRENCY MENU */}
            <span className="gap-1 flex items-center">
              USD <TfiAngleDown />
            </span>
            {/* WISHLIST MENU */}
            <Link href="/wishlist">
              <span className="gap-1 flex items-center">
                Wishlist <MdOutlineFavoriteBorder />
              </span>
            </Link>
            {/* CART MENU */}
            <Link href={`/cart/${user.others._id}`}>
              <span className="relative flex">
                <BsCart3 className="m-auto" />
                {userCart.products.length !== 0 && (
                  <span className=" px-[0.3rem] bg-primaryPink rounded-full absolute -top-2 -right-3 flex items-center justify-center text-[0.55rem]">
                    {userCart.products.length}
                  </span>
                )}
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Announcement);

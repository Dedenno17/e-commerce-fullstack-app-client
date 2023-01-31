import React from 'react';
import { TbPhoneIncoming } from 'react-icons/tb';
import { AiOutlineMail } from 'react-icons/ai';
import { TfiAngleDown } from 'react-icons/tfi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { useRouter } from 'next/router';
import { setAuthState } from '../../Store/slices/authState-slice';

const Announcement: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.value);
  const router = useRouter();

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

  console.log(user);

  return (
    <div className="w-full bg-primaryPurple p-2 text-xs text-primarySkyBlue font-josefin flex">
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

      {/* <div className="m-auto w-[65%] flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="gap-2 flex items-center">
            <AiOutlineMail /> ahmad@gmail.com
          </span>
          <span className="gap-2 flex items-center">
            <TbPhoneIncoming /> (021) 9445879
          </span>
        </div>

        <div className="flex items-center gap-5">
          <span className="gap-1 flex items-center">
            English <TfiAngleDown />
          </span>
          <span className="gap-1 flex items-center">
            USD <TfiAngleDown />
          </span>
          <span className="gap-1 flex items-center">
            Wishlist <MdOutlineFavoriteBorder />
          </span>
          <BsCart3 />
        </div>
      </div> */}
    </div>
  );
};

export default React.memo(Announcement);

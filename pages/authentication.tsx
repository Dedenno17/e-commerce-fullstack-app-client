import { NextPage } from 'next';
import React, { useState } from 'react';
import CoverImage from '../src/components/Authentication/CoverImage';
import Login from '../src/components/Authentication/Login';
import Register from '../src/components/Authentication/Register';

const Auth: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<string>('register');

  return (
    <div className="w-full min-h-screen flex">
      <div className="m-auto w-[1024px] h-[32rem] flex items-stretch rounded-lg shadow-simetri relative overflow-hidden">
        <Login setCurrentPage={setCurrentPage} />
        <Register setCurrentPage={setCurrentPage} />
        <CoverImage currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Auth;

import Image from 'next/image';
import React from 'react';

const CoverImage: React.FC<{ currentPage: string }> = ({ currentPage }) => {
  return (
    <div
      className={`absolute top-0 bottom-0 left-0 w-1/2 bg-white overflow-hidden transition duration-1000 ${
        currentPage === 'login' ? 'translate-x-full' : ''
      }`}
    >
      <div
        className={`w-[1024px] h-full flex items-stretch overflow-hidden transition duration-1000 ${
          currentPage === 'login' ? '-translate-x-1/2' : ''
        }`}
      >
        <div className="w-full h-full m-auto relative">
          <Image
            src="/auth-image-1.jpg"
            alt="atuh image"
            fill
            sizes="true"
            priority
          />
          <div className="absolute z-10 bg-black/50 top-0 left-0 right-0 bottom-0" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-lato font-bold z-20">
            REGISTER
          </span>
        </div>
        <div className="w-full h-full m-auto relative">
          <Image
            src="/auth-image-2.jpg"
            alt="atuh image"
            fill
            sizes="true"
            priority
          />
          <div className="absolute z-10 bg-black/50 top-0 left-0 right-0 bottom-0" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-lato font-bold z-20">
            LOGIN
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CoverImage);

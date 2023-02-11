import React from 'react';

const CartModalSkeleton: React.FC = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="w-full flex items-center justify-end py-2 ">
        <div className="w-[5%] h-6 bg-primarySkyBlue" />
      </div>

      {/* PRODUCT */}
      <div className="w-full flex gap-4 h-60 items-stretch border-y-[1px] border-y-black/10">
        {/* IMAGE */}
        <div className="w-[35%] p-4">
          <div className="w-full h-full bg-primarySkyBlue" />
        </div>
        {/* DESC */}
        <div className="w-[65%] flex flex-col justify-center gap-3">
          <div className="w-[40%] py-4 bg-primarySkyBlue" />
          <div className="w-full py-2 bg-primarySkyBlue" />
          <div className="w-full py-2 bg-primarySkyBlue" />
          <div className="w-full flex gap-6 items-center">
            <div className="bg-primarySkyBlue py-3 w-[40%]" />
            <div className="bg-primarySkyBlue py-3 w-[20%]" />
          </div>
          <div className="w-[30%] py-3 bg-primarySkyBlue" />
          <div className="w-[10%] py-3 bg-primarySkyBlue" />
        </div>
      </div>

      {/* BUTTON ADD */}
      <div className="w-full flex items-center justify-end py-3">
        <div className="w-[30%] py-5 bg-primarySkyBlue" />
      </div>
    </div>
  );
};

export default React.memo(CartModalSkeleton);

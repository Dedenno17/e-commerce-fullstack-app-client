import React from 'react';

const DiscountSkeletonLoading: React.FC = () => {
  return (
    <div className="w-full min-h-[25rem] mt-4 flex items-stretch justify-between gap-4 animate-pulse">
      {/* DESCRIPTION */}
      <div className="w-full flex flex-col justify-center gap-5">
        <span className="w-full p-4 bg-primarySkyBlue" />
        <span className="w-[40%] p-2 bg-primarySkyBlue" />
        <span className="w-full p-2 bg-primarySkyBlue" />
        <span className="w-1/2 p-2 bg-primarySkyBlue" />
        <ul className="w-full grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((item: number, i) => (
            <li key={item + i + ''} className="w-full p-2 bg-primarySkyBlue" />
          ))}
        </ul>
        <div className="bg-primarySkyBlue w-[35%] py-6" />
      </div>
      {/* IMAGE */}
      <div className="w-full relative flex">
        <div className="w-3/4 h-3/4 bg-primarySkyBlue rounded-full m-auto" />
      </div>
    </div>
  );
};

export default React.memo(DiscountSkeletonLoading);

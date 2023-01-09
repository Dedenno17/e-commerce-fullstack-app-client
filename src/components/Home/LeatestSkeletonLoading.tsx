import React from 'react';

const LeatestSkeletonLoading: React.FC = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((item: number) => (
        <div
          key={item + Math.random() + ''}
          className="w-full flex flex-col animate-pulse"
        >
          {/* image */}
          <div className="w-full h-48 bg-primarySkyBlue" />
          {/* description */}
          <div className="w-full py-2 flex justify-between">
            <span className="bg-primarySkyBlue py-2 w-[40%] " />
            <span className="bg-primarySkyBlue py-2 w-[20%] " />
          </div>
        </div>
      ))}
    </>
  );
};

export default React.memo(LeatestSkeletonLoading);

import React from 'react';

const NewsLetter: React.FC = () => {
  return (
    <div className="w-full min-h-[28rem] flex items-stretch justify-center ">
      <div
        className="w-[1440px] bg-primaryPurple flex"
        style={{
          background: 'url(./bg-newsletter.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
        }}
      >
        <div className="w-[40%] m-auto flex flex-col items-center justify-center gap-4">
          <p className="text-3xl font-josefin font-bold text-primaryNavyBlue text-center">
            Get Leatest Update By Subscribe Our Newsletter
          </p>
          <button
            type="button"
            className="border-none w-[25%] outline-none bg-primaryPink text-white text-xs py-[0.65rem] px-4 cursor-pointer hover:brightness-90 mt-2"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NewsLetter);

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
        <div className="w-[40%] m-auto flex flex-col items-center justify-center gap-6">
          <p className="text-3xl font-josefin font-bold text-primaryNavyBlue text-center">
            Get Leatest Update By Subscribe Our Newsletter
          </p>
          <form
            className="w-full flex items-center justify-between"
            onSubmit={() => {}}
          >
            <input
              type="email"
              placeholder="Your Email"
              value=""
              onChange={() => {}}
              className="w-[70%] border-[1px] border-black/10 outline-none py-[0.65rem] px-3 text-xs font-lato font-normal"
            />
            <button
              type="button"
              className="border-none w-[25%] outline-none bg-primaryPink text-white text-xs py-[0.65rem] cursor-pointer hover:brightness-90"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NewsLetter);

import React, { ReactNode } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

interface SocialMedia {
  id: string;
  icon: ReactNode;
  slug: string;
}

const socialMedia: SocialMedia[] = [
  {
    id: 'facebook',
    icon: <ImFacebook />,
    slug: 'www.facebook.com',
  },
  {
    id: 'instagram',
    icon: <AiFillInstagram />,
    slug: 'www.instagram.com',
  },
  {
    id: 'twitter',
    icon: <ImTwitter />,
    slug: 'www.twitter.com',
  },
];

const DetailProduct: React.FC = () => {
  return (
    <div className="w-[1024px] min-h-[28rem] shadow-simetri p-4 m-auto flex items-stretch">
      <div className="w-full flex items-stretch gap-8">
        {/* IMAGE */}
        <div className="w-1/2 flex">
          {/* <div className='w-full h-full relative'></div> */}
          <img
            src="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="couch"
            className="object-fit"
          />
        </div>
        {/* DESC */}
        <div className="w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-4xl text-primaryNavyBlue font-josefin font-bold">
            Friends Couch
          </h1>

          <span className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((rat: number) => (
              <BsStarFill key={rat} className="text-[#D0A32D] text-xs" />
            ))}
            <p className="text-xs text-primaryBlue"> (22)</p>
          </span>

          <span className="text-sm text-primaryBlue font-bold font-josefin">
            $84.2
          </span>

          <span className="text-sm font-josefin font-bold text-primaryNavyBlue flex items-center gap-6">
            <h3 className="text-sm text-primaryBlue font-bold font-josefin">
              Color :
            </h3>
            <ul className="flex items-center gap-1">
              {['1', '2', '3', '4'].map((col: string, i: number) => (
                <div
                  className="w-3 h-3 rounded-full border-[1px] border-black/20 bg-primaryPurple"
                  key={i + i + ''}
                  //   style={{ backgroundColor: `${col}` }}
                />
              ))}
            </ul>
          </span>

          <p className="text-sm text-lato text-primaryBlue/50">
            Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at
            auctor urna nunc id cursus metus aliquam eleifend mi in nulla
            posuere
          </p>

          <span className="text-sm  text-primaryNavyBlue flex items-center gap-6">
            <h3 className="text-sm text-primaryBlue font-bold font-josefin">
              Categories :
            </h3>
            <ul className="flex items-center gap-1">
              {['Men', 'Brown', 'Couch', 'Double-seat'].map(
                (col: string, i: number) => (
                  <p
                    key={col}
                    className="text-sm text-lato text-primaryBlue/50"
                  >
                    {col},
                  </p>
                )
              )}
            </ul>
          </span>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="px-6 py-2 bg-transparent border-[1px] border-primaryBlue/10 text-sm text-primaryBlue font-josefin font-bold hover:bg-primaryPink hover:text-primarySkyBlue"
            >
              Add to Cart
            </button>
            <span className="p-[0.65rem] text-sm text-primaryBlue border-[1px] border-primaryBlue/10 cursor-pointer transition duration-500 hover:scale-105">
              <MdOutlineFavoriteBorder />
            </span>
          </div>

          <span className="flex items-center gap-6 w-full">
            <h3 className="text-sm text-primaryBlue font-bold font-josefin">
              Share :
            </h3>
            <ul className="flex items-center gap-2">
              {socialMedia.map((item: SocialMedia) => (
                <div
                  className="w-full flex justify-center items-center rounded-full text-primarySkyBlue bg-primaryPurple text-xs p-[0.2rem] cursor-pointer"
                  key={item.id}
                >
                  {item.icon}
                </div>
              ))}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DetailProduct);

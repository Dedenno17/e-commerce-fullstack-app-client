import Image from 'next/image';
import React, { ReactNode } from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { Blog, blogsData } from '../../data/blogData';
import { Product, productsData } from '../../data/productsData';

interface SocialMedia {
  id: string;
  icon: ReactNode;
  slug: string;
  color: string;
}

const socialMedia: SocialMedia[] = [
  {
    id: 'facebook',
    icon: <ImFacebook />,
    slug: 'www.facebook.com',
    color: 'bg-primaryBlue',
  },
  {
    id: 'instagram',
    icon: <AiFillInstagram />,
    slug: 'www.instagram.com',
    color: 'bg-primaryPink',
  },
  {
    id: 'twitter',
    icon: <ImTwitter />,
    slug: 'www.twitter.com',
    color: 'bg-ternaryBlue',
  },
];

const AsideBlogs: React.FC = () => {
  return (
    <div className="w-[25%] flex flex-col gap-8">
      {/* SEARCH */}
      <div className="flex flex-col w-full gap-2">
        <h2 className="text-md text-primaryNavyBlue font-josefin font-bold">
          Search
        </h2>
        <form className="w-full flex items-center border-[1px] border-black/10">
          <input
            type="text"
            placeholder="Search ..."
            className="py-2 px-3 w-[80%] text-xs font-lato outline-none border-none"
          />
          <button
            type="submit"
            className="w-[20%] p-2 flex pointer-events-none"
          >
            <FiSearch className="m-auto text-sm text-black/20" />
          </button>
        </form>
      </div>

      {/* CATEGORIES */}
      <div className="flex flex-col gap-4">
        <h2 className="text-md text-primaryNavyBlue font-josefin font-bold">
          Categories
        </h2>
        <div className="w-full grid grid-cols-2 gap-2">
          {[1, 2, 3, 4, 5, 6].map((item: number) => (
            <span
              key={Math.random() + item}
              className={`text-xs font-josefin font-bold p-2 cursor-pointer ${
                item === 1
                  ? 'bg-primaryPink text-primarySkyBlue'
                  : 'bg-transparent text-primaryNavyBlue'
              }`}
            >
              Women (20)
            </span>
          ))}
        </div>
      </div>

      {/* RECENT POST */}
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-md text-primaryNavyBlue font-josefin font-bold">
          Recent Post
        </h2>
        <ul className="w-full flex flex-col gap-6">
          {blogsData.map((item: Blog) => (
            <li key={item.id} className="w-full flex items-center gap-2">
              <div className="w-[35%] h-14 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="true"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <h3 className="text-xs text-primaryNavyBlue font-josefin font-bold">
                  {item.title}
                </h3>
                <span className="text-[0.65rem] text-primaryBlue/40 font-lato">
                  {item.createdAt}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* OFFER PRODUCTS */}
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-md text-primaryNavyBlue font-josefin font-bold">
          Offer Products
        </h2>
        <ul className="w-full grid grid-cols-2 gap-4">
          {productsData.slice(0, 4).map((item: Product) => (
            <li key={item.id} className="flex flex-col gap-2">
              <div className="w-full h-20 relative bg-primarySkyBlue">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="true"
                  priority
                />
              </div>
              <div className="w-full flex flex-col items-center gap-1">
                <h3 className="text-[10px] text-center text-primaryNavyBlue font-josefin font-bold">
                  {item.title}
                </h3>
                <span className="text-[10px] text-primaryBlue/40 font-lato">
                  ${item.price.toFixed(1)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="flex flex-col gap-4">
        <h2 className="text-md text-primaryNavyBlue font-josefin font-bold">
          Follow
        </h2>
        <ul className="w-1/2 flex items-center justify-between p-1 shadow-lg">
          {socialMedia.map((item: SocialMedia) => (
            <li
              key={item.id}
              className={`p-2 flex items-center justify-center text-sm text-primarySkyBlue rounded-full ${item.color}`}
            >
              {item.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(AsideBlogs);

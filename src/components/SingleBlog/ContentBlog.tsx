import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import {
  AiFillInstagram,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { useGetAllProductQuery } from '../../Store/apiCalls';
import { Product } from '../../Types';

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

// get random number
const randomIndex = Math.round(Math.random() * (20 - 0) + 0);

const ContentBlog: React.FC = () => {
  // get all products
  const { data: productsData } = useGetAllProductQuery(undefined);

  return (
    <div className="w-full flex flex-col gap-6">
      <h1 className="text-lg font-josefin font-bold text-primaryNavyBlue">
        Trends in 2021
      </h1>
      <p className="text-xs text-primaryBlue/40 font-lato">
        risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc
        id cursus metus aliquam eleifend mi in nulla posuere sollicitudin
        aliquam ultrices sagittis orci, risus ultricies tristique nulla aliquet
        enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in
        nulla posuere sollicitudin aliquam ultrices sagittis orci, risus
        ultricies tristique nulla aliquet enim tortor at auctor urna nunc id
        cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
        ultrices sagittis orci, risus ultricies tristique nulla aliquet enim
        tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla
        posuere sollicitudin aliquam ultrices sagittis orci
      </p>
      <p className="text-xs text-primaryBlue/40 font-lato">
        risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc
        id cursus metus aliquam eleifend mi in nulla posuere sollicitudin
        aliquam ultrices sagittis orci, risus ultricies tristique nulla aliquet
        enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in
        nulla posuere sollicitudin aliquam ultrices sagittis orci, risus
        ultricies tristique nulla aliquet enim tortor at auctor urna nunc id
        cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
        ultrices sagittis orci, risus ultricies tristique nulla aliquet enim
        tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla
        posuere sollicitudin aliquam ultrices sagittis orci
      </p>
      <div className="w-full flex items-stretch gap-8 h-[20rem]">
        <div className="relative w-full h-full">
          <Image src="/blog-img.jpg" alt="blog" fill sizes="true" priority />
        </div>
        <div className="relative w-full h-full">
          <Image src="/blog-img.jpg" alt="blog" fill sizes="true" priority />
        </div>
      </div>
      <p className="text-xs text-primaryBlue/40 font-lato">
        risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc
        id cursus metus aliquam eleifend mi in nulla posuere sollicitudin
        aliquam ultrices sagittis orci, risus ultricies tristique nulla aliquet
        enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in
        nulla posuere sollicitudin aliquam ultrices sagittis orci, risus
        ultricies tristique nulla aliquet enim tortor at auctor urna nunc id
        cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
        ultrices sagittis orci, risus ultricies tristique nulla aliquet enim
        tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla
        posuere sollicitudin aliquam ultrices sagittis orci
      </p>
      <ul className="w-full flex items-stretch h-[14rem] justify-between gap-4">
        {productsData &&
          productsData
            .slice(randomIndex, randomIndex + 4)
            .map((item: Product) => (
              <li key={item._id} className="w-1/4 flex flex-col gap-4">
                <div className="flex w-full h-[80%] p-4 bg-primarySkyBlue">
                  <div className="relative m-auto w-full h-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="true"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full h-[20%]">
                  <h3 className="text-sm text-primaryNavyBlue font-josefin font-bold">
                    {item.title}
                  </h3>
                  <span className="flex items-center w-full justify-between">
                    <span className="text-xs font-lato text-primaryBlue/40">
                      ${item.price.toFixed(1)}
                    </span>
                    <span className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star: number) => (
                        <BsStarFill
                          key={star + star * star + ''}
                          className="text-[#D0A32D] text-xs"
                        />
                      ))}
                    </span>
                  </span>
                </div>
              </li>
            ))}
      </ul>
      <p className="text-xs text-primaryBlue/40 font-lato">
        risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc
        id cursus metus aliquam eleifend mi in nulla posuere sollicitudin
        aliquam ultrices sagittis orci, risus ultricies tristique nulla aliquet
        enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in
        nulla posuere sollicitudin aliquam ultrices sagittis orci, risus
        ultricies tristique nulla aliquet enim tortor at auctor urna nunc id
        cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
        ultrices sagittis orci, risus ultricies tristique nulla aliquet enim
        tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla
        posuere sollicitudin aliquam ultrices sagittis orci
      </p>
      <p className="text-xs text-primaryBlue/40 font-lato">
        risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc
        id cursus metus aliquam eleifend mi in nulla posuere sollicitudin
        aliquam ultrices sagittis orci, risus ultricies tristique nulla aliquet
        enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in
        nulla posuere sollicitudin aliquam ultrices sagittis orci, risus
        ultricies tristique nulla aliquet enim tortor at auctor urna nunc id
        cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam
        ultrices sagittis orci, risus ultricies tristique nulla aliquet enim
        tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla
        posuere sollicitudin aliquam ultrices sagittis orci
      </p>
      <div className="w-full flex flex-col items-center gap-4 mt-8">
        <ul className="w-[20%] flex items-center justify-between p-1 shadow-lg">
          {socialMedia.map((item: SocialMedia) => (
            <li
              key={item.id}
              className={`p-2 flex items-center justify-center text-sm text-primarySkyBlue rounded-full ${item.color}`}
            >
              {item.icon}
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-between items-center p-2 bg-primarySkyBlue">
          <Link href={'/blogs'}>
            <span className="flex items-center gap-2 text-sm text-primaryBlue/40 font-lato">
              <AiOutlineArrowLeft />
              <span>Previous Blog</span>
            </span>
          </Link>
          <Link href={'/blogs'}>
            <span className="flex items-center gap-2 text-sm text-primaryBlue/40 font-lato">
              <AiOutlineArrowRight />
              <span>Previous Blog</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContentBlog);

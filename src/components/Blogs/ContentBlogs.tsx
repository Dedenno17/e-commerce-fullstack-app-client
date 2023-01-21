import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  IoCalendarClearSharp,
  IoCaretForwardSharp,
  IoCreate,
} from 'react-icons/io5';
import { blogsData, Blog } from '../../data/blogData';

const ContentBlogs: React.FC = () => {
  return (
    <div className="w-[75%] flex flex-col gap-8">
      {blogsData.map((item: Blog) => (
        <div className="w-full flex flex-col gap-4" key={item.id}>
          {/* IMAGE */}
          <div className="relative w-full h-[24rem]">
            <Image src={item.img} alt="blog" fill sizes="true" priority />
          </div>

          {/* AUTHOR */}
          <div className="w-full flex item-center gap-8">
            <span className="flex items-center gap-2">
              <IoCreate className="text-xs text-primaryPink" />
              <span className="px-6 py-[0.1rem] text-primaryNavyBlue text-xs font-josefin font-bold bg-primaryPink/40">
                {item.atuhor}
              </span>
            </span>
            <span className="flex items-center gap-2">
              <IoCalendarClearSharp className="text-xs text-[#FCDCAF]" />
              <span className="px-6 py-[0.1rem] text-primaryNavyBlue text-xs font-josefin font-bold bg-[#FCDCAF]/40">
                {item.createdAt}
              </span>
            </span>
          </div>

          {/* CONTENT */}
          <div className="w-full flex flex-col gap-6">
            <h1 className="text-lg font-josefin font-bold text-primaryNavyBlue">
              {item.title}
            </h1>
            <p className="text-xs text-primaryBlue/40 font-lato">
              {item.content.slice(0, 200) + ' ...'}
            </p>
            <Link href="/blogs">
              <p className="text-sm text-primaryNavyBlue font-josefin font-bold hover:text-primaryPink flex items-center gap-2">
                Read more <IoCaretForwardSharp className="text-sm" />
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ContentBlogs);

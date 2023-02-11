import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Blog } from '../../Types';
import { createdAtFormat } from '../../helpers/createdAtFormat';

const LeatestBlogs: React.FC<{ blogsData: Blog[] }> = ({ blogsData }) => {
  return (
    <div className="w-[900px] px-10">
      <h1 className="text-3xl text-primaryNavyBlue font-josefin text-center font-bold mb-8">
        Leatest Blog
      </h1>

      <ul className="w-full h-72 flex items-stretch justify-between gap-6">
        {blogsData &&
          blogsData.map((item: Blog) => (
            <li
              className="w-[28%] h-full rounded-lg shadow-simetri m-auto  overflow-hidden"
              key={item._id}
            >
              <div className="w-full h-[50%] flex relative overflow-hidden">
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
              <div className="w-full h-[50%] py-2 px-3 flex flex-col">
                <div className="w-full flex justify-between items-center mb-4">
                  <span className="text-[0.5rem] text-primaryBlue font-josefin font-bold">
                    {item.atuhor}
                  </span>
                  <span className="text-[0.5rem] text-primaryBlue font-josefin font-bold">
                    {createdAtFormat(item.createdAt)}
                  </span>
                </div>
                <h5 className="text-xs text-primaryBlue font-bold font-josefin mb-1">
                  {item.title}
                </h5>
                <p className="text-[0.5rem] text-primaryBlue mb-4">
                  {item.content.slice(0, 130) + ' ...'}
                </p>
                <Link href={`/blogs/${item._id}`}>
                  <span className="text-xs text-primaryBlue font-josefin font-bold cursor-pointer hover:text-primaryPink hover:underline">
                    Read more
                  </span>
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default React.memo(LeatestBlogs);

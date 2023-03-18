import Image from 'next/image';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const CommentBlog: React.FC = () => {
  return (
    <div className="flex flex-col gap-14">
      <ul className="w-full flex flex-col gap-6">
        {[1, 2].map((item: number) => (
          <li
            key={Math.random() + item}
            className="w-full p-4 shadow-simetri flex items-stretch h-[8rem] gap-4"
          >
            <div className="w-[10%] relative">
              <Image
                src="https://i.ibb.co/VMw4b4T/Wavy-Bus-31-Single-02.jpg"
                alt="profile comment"
                fill
                sizes="true"
                priority
              />
            </div>
            <div className="w-[70%] flex flex-col justify-center gap-2">
              <span className="flex items-center gap-6">
                <h3 className="text-sm text-primaryNavyBlue font-josefin font-bold">
                  Jackson
                </h3>
                <span className="text-xs font-lato text-primaryBlue/40">
                  23 Aug 2021
                </span>
              </span>
              <span className="text-xs font-lato text-primaryBlue/40">
                risus ultricies tristique nulla aliquet enim tortor at auctor
                urna nunc id cursus metus aliquam eleifend mi in nulla posueres
              </span>
            </div>
          </li>
        ))}
      </ul>
      <form className="w-full flex flex-col gap-4 text-sm">
        {/* <div className="w-full flex items-center justify-between">
          <div className="border-[1px] border-black/10 flex items-center p-2 w-[40%]">
            <FaUser className="text-black/20" />
            <input
              type="text"
              placeholder="Your name"
              className="w-[80%] border-none outline-none font-lato px-3"
            />
          </div>
          <div className="border-[1px] border-black/10 flex items-center p-2 w-[40%]">
            <HiMail className="text-black/20" />
            <input
              type="email"
              placeholder="Your email"
              className="w-[80%] border-none outline-none font-lato px-3"
            />
          </div>
        </div> */}
        <textarea
          rows={12}
          className="text-sm w-full p-4 font-lato border-[1px] border-black/10 outline-none"
          defaultValue="Write your commen"
        />
      </form>
    </div>
  );
};

export default React.memo(CommentBlog);

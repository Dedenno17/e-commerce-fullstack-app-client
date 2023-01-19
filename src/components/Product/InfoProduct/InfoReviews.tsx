import Image from 'next/image';
import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import { TfiAngleRight } from 'react-icons/tfi';

const InfoReviews: React.FC = () => {
  return (
    <div className="w-full items-stretch flex gap-10">
      <div className="w-1/2">
        <ul className="w-full flex flex-col">
          {[1, 2].map((item: number) => (
            <li
              key={item * item + ''}
              className="w-full h-[33%] py-4 flex flex-col gap-2 border-b-[1px] border-b-black/10"
            >
              <div className="flex items-center gap-4">
                <span className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star: number) => (
                    <BsStarFill
                      key={star + star * star + ''}
                      className="text-[#D0A32D] text-xs"
                    />
                  ))}
                </span>
                <span className="text-sm text-primaryBlue/40 font-lato">
                  3 Weeks Ago
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full relative overflow-hidden">
                  <Image
                    src="https://i.ibb.co/VMw4b4T/Wavy-Bus-31-Single-02.jpg"
                    alt="profile icon"
                    sizes="true"
                    fill
                    priority
                  />
                </div>
                <span className="text-sm text-primaryNavyBlue font-josefin font-bold">
                  Jackson
                </span>
              </div>

              <p className="text-sm font-lato text-primaryBlue/40">
                Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor
                at auctor urna nunc id cursus metus aliquam eleifend mi in nulla
                posuere...
              </p>

              <div className="w-full mt-2 flex items-center justify-between">
                <span className="flex items-center text-sm font-lato gap-2 ">
                  <AiFillLike className="text-primaryBlue/40" />
                  <span className="text-primaryBlue">Helping</span>
                </span>
                <span className="flex items-center text-sm font-lato gap-2 ">
                  <span className="text-primaryBlue">Reply</span>
                  <TfiAngleRight className="text-primaryBlue/40" />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-1/2 ">
        <div className="w-[60%] mx-auto flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="font-josefin font-bold flex items-center gap-2">
              <BsStarFill className="text-[#D0A32D] text-[2.25rem]" />
              <span className="text-[4rem]">4.7</span>
            </div>
            <span className="text-lg text-primaryBlue/40 font-bold">/5.0</span>
          </div>

          <div className="text-sm font-lato flex items-center flex-col gap-1">
            <span className="text-primaryNavyBlue">
              83% customer felt satisfy
            </span>
            <span className="text-primaryBlue/40">6 Rating 4 Reviews</span>
          </div>

          <ul className="w-full flex flex-col items-center gap-2 mt-4">
            {[1, 2, 3, 4, 5].reverse().map((item: number) => (
              <li
                key={item + 2 * item + ''}
                className="w-full py-1 flex items-center justify-center gap-2 text-sm font-lato"
              >
                <span className="text-primaryNavyBlue">{item}</span>
                <span className="w-[80%] h-4 rounded-full bg-primaryPantonePurple relative overflow-hidden">
                  <span className="absolute top-0 bottom-0 left-0 w-full -translate-x-[80%] bg-primaryPurple rounded-full" />
                </span>
                <span className="text-primaryBlue/40">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(InfoReviews);

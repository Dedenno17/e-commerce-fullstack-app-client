import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const InfoDescription: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-md font-bold font-josefin text-primaryNavyBlue">
          Various Tempar
        </h2>
        <p className="text-sm text-justify font-lato text-primaryBlue/40">
          Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at
          auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere.
          Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at
          auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere.
          Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at
          auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere,
          Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at
          auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere,
          Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor at
          auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere,
        </p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <h2 className="text-md font-bold font-josefin text-primaryNavyBlue">
          More Details
        </h2>
        <ul className="w-full flex flex-col gap-2">
          {[1, 2, 3, 4, 5].map((item: number) => (
            <li
              key={item + item + ''}
              className="w-full flex items-center gap-2"
            >
              <AiOutlineArrowRight className="text-sm text-justify font-lato text-primaryNavyBlue" />
              <p className="text-sm text-justify font-lato text-primaryBlue/40">
                Lorem Ipsum risus ultricies tristique nulla aliquet enim tortor
                at auctor urna nunc id cursus metus aliquam eleifend mi in nulla
                posuere.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(InfoDescription);

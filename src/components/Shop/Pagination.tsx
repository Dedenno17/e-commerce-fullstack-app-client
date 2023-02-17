import React from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

interface Props {
  curPage: number;
  allPages: number[];
  prevPage: () => void;
  nextPage: () => void;
  movePage: (numPage: number) => void;
}

const Pagination: React.FC<Props> = ({
  curPage,
  allPages,
  prevPage,
  nextPage,
  movePage,
}) => {
  return (
    <div className="w-full h-8 flex">
      <ul className="w-1/2 m-auto h-full flex items-stretch justify-center gap-2">
        <li
          className={`w-8 border-[1px] hover:bg-primarySkyBlue border-primaryPink text-xs text-primaryPink font-lato font-bold flex justify-center items-center cursor-pointer ${
            curPage === 1 && 'opacity-0 pointer-events-none'
          }`}
          onClick={prevPage}
        >
          <TfiAngleLeft />
        </li>
        {allPages.map((item: number) => (
          <li
            key={Math.random() + item + ''}
            className={`w-8 border-[1px] ${
              curPage === item
                ? 'bg-primaryPink text-white'
                : 'text-primaryPink bg-white'
            } hover:brightness-90 border-primaryPink text-xs font-lato font-bold flex justify-center items-center cursor-pointer`}
            onClick={() => movePage(item)}
          >
            {item}
          </li>
        ))}

        <li
          className={`w-8 border-[1px] hover:bg-primarySkyBlue border-primaryPink text-xs text-primaryPink font-lato font-bold flex justify-center items-center cursor-pointer ${
            allPages.length === 1 && 'opacity-0 pointer-events-none'
          }`}
          onClick={nextPage}
        >
          <TfiAngleRight />
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Pagination);

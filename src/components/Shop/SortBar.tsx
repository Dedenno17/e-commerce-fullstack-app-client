import React from 'react';
import { MdViewList, MdViewModule } from 'react-icons/md';

const SortBar: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between pb-14">
      <div className="w-full">
        <h1 className="text-lg text-primaryNavyBlue font-josefin font-bold">
          Ecommerce Accesories & Fashion Item
        </h1>
        <span className="text-primaryBlue/40 text-sm font-lato">
          About 9.8475 results
        </span>
      </div>
      <div className="w-full py-2 flex items-center gap-4 ">
        <span className="w-full flex items-center">
          <label
            htmlFor="perPage"
            className="w-[50%] text-sm text-primaryBlue/40 font-lato"
          >
            Per Page:{' '}
          </label>
          <input
            id="perPage"
            className="w-[50%] px-2 py-1 border-[1px] border-black/10 outline-none text-xs"
          />
        </span>
        <span className="w-full flex items-center">
          <label
            htmlFor="sortBy"
            className="w-[50%] text-sm text-primaryBlue/40 font-lato"
          >
            Sort By:
          </label>
          <input
            id="sortBy"
            className="w-[50%] px-2 py-1 border-[1px] border-black/10 outline-none text-xs"
          />
        </span>
        <span className="w-full flex items-center gap-1">
          <span className="w-[30%] text-sm text-primaryBlue/40 font-lato">
            View:{' '}
          </span>
          <span className="text-sm text-primaryBlue flex w-[70%]">
            <MdViewModule />
            <MdViewList />
          </span>
        </span>
      </div>
    </div>
  );
};

export default React.memo(SortBar);

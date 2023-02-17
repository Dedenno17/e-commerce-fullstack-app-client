import React from 'react';
import { MdViewList, MdViewModule } from 'react-icons/md';

interface Props {
  setView: (type: string) => void;
  setSort: (type: string) => void;
  amountOfProduct: number;
}

const SortBar: React.FC<Props> = ({ setView, setSort, amountOfProduct }) => {
  return (
    <div className="w-full flex items-center justify-between pb-14">
      <div className="w-full">
        <h1 className="text-lg text-primaryNavyBlue font-josefin font-bold">
          Ecommerce Accesories & Fashion Item
        </h1>
        <span className="text-primaryBlue/40 text-sm font-lato">
          About {amountOfProduct} results
        </span>
      </div>
      <div className="w-full py-2 flex items-center gap-4 ">
        <span className="w-full flex items-center">
          <span className="w-[50%] text-sm text-primaryBlue/40 font-lato">
            Per Page:
          </span>
          <span className="w-[50%] text-xs text-primaryBlue/40">
            {amountOfProduct}
          </span>
        </span>
        <span className="w-full flex items-center">
          <label
            htmlFor="sortBy"
            className="w-[50%] text-sm text-primaryBlue/40 font-lato"
          >
            Sort By:
          </label>
          <select
            className="w-[50%] px-2 py-1 border-[1px] border-black/10 outline-none text-xs text-primaryBlue/80 font-semibold"
            id="sortBy"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="price">Price (Cheap)</option>
            <option value="rating">Rating (Big)</option>
            <option value="date">Date (New)</option>
          </select>
        </span>
        <span className="w-full flex items-center gap-1">
          <span className="w-[30%] text-sm text-primaryBlue/40 font-lato">
            View:{' '}
          </span>
          <span className="text-sm text-primaryBlue flex w-[70%]">
            <MdViewModule
              onClick={() => setView('tile')}
              className="cursor-pointer"
            />
            <MdViewList
              onClick={() => setView('list')}
              className="cursor-pointer"
            />
          </span>
        </span>
      </div>
    </div>
  );
};

export default React.memo(SortBar);

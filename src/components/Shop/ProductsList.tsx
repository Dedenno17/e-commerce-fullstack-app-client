import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsCart, BsStarFill } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';
import { Product } from '../../Types';
import Pagination from './Pagination';
// import { Product, productsData } from '../../data/productsData';

// interface
interface FilterForProducts {
  discount: string;
  rating: string;
  categories: string;
  price: string;
  color: string;
}

interface Props {
  view: string;
  sort: string;
  filterForProducts: FilterForProducts;
  addToCart: (id: string) => void;
  productsData: Product[];
}

const productsInOnePage = 9;

const ProductsList: React.FC<Props> = ({
  view,
  addToCart,
  productsData,
  sort,
  filterForProducts,
}) => {
  const router = useRouter();

  // state of all pages
  const [allPages, setAllPages] = useState<number[]>([1]);

  // state of current page
  const [curPage, setCurPage] = useState<number>(1);

  // function to the next page
  const nextPage = () => {
    if (curPage === allPages[allPages.length - 1]) {
      return curPage;
    }

    setCurPage((prevState) => prevState + 1);
  };

  // function to previous page
  const prevPage = () => {
    if (curPage === 1) {
      return curPage;
    }

    setCurPage((prevState) => prevState - 1);
  };

  // function move to a some page
  const movePage = (numPage: number) => {
    setCurPage(numPage);
  };

  // set how many all pages when its first load
  useEffect(() => {
    if (productsData.length === 0) {
      return;
    }

    const amountOfPages = productsData.length / productsInOnePage;
    const arrayAmountOfPages = [];
    for (let i = 1; i <= Math.ceil(amountOfPages); i++) {
      arrayAmountOfPages.push(i);
    }

    setAllPages(arrayAmountOfPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, filterForProducts, setAllPages]);

  return (
    <div className="w-[77%] min-h-[80vh] p-2 flex flex-col justify-between">
      {/* PRODUCTS LIST */}
      <ul
        className={`grid gap-4 w-full ${
          view === 'list' ? 'grid-cols-1' : 'grid-cols-3'
        }`}
      >
        {productsData
          .slice(
            curPage * productsInOnePage - productsInOnePage,
            curPage * productsInOnePage
          )
          .map((item: Product) => (
            <li
              key={item._id}
              className={`w-full ${
                view === 'list' ? 'h-44 items-stretch  gap-4' : 'h-80 flex-col'
              } border-[1px] border-black/10 rounded-sm p-2 flex hover:bg-primarySkyBlue/60`}
            >
              {/* IMAGE */}
              <div
                className={`${
                  view === 'list' ? 'w-[25%]' : 'w-full h-[60%]'
                } p-4`}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    sizes="true"
                    fill
                    priority
                  />
                </div>
              </div>
              {/* DESC */}
              <div
                className={`${
                  view === 'list'
                    ? 'w-[70%] gap-3 justify-center'
                    : 'w-full h-[40%] justify-between px-1'
                } flex flex-col`}
              >
                <span
                  className={`text-sm font-josefin font-bold text-primaryNavyBlue flex ${
                    view === 'list'
                      ? 'items-center gap-10'
                      : 'flex-col items-start justify-center gap-1 mb-1'
                  }`}
                >
                  <h3
                    className="hover:underline cursor-pointer"
                    onClick={() => router.push(`/product/${item._id}`)}
                  >
                    {item.title}
                  </h3>
                  <ul className="flex items-center gap-1">
                    {item.colors.map((col: string, i: number) => (
                      <div
                        className="w-2 h-2 rounded-full border-[1px] border-black/20"
                        key={i + i + ''}
                        style={{ backgroundColor: `${col}` }}
                      />
                    ))}
                  </ul>
                </span>

                <span className="flex items-center gap-6 text-xs">
                  <h3 className="text-xs font-josefin font-bold text-primaryNavyBlue">
                    ${item.price.toFixed(1)}
                  </h3>
                  <span className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((rat: number) => (
                      <BsStarFill key={rat} className="text-[#D0A32D]" />
                    ))}
                  </span>
                </span>

                <p className="text-xs text-lato text-primaryBlue/50">
                  {view === 'list'
                    ? item.description
                    : item.description.slice(0, 80) + ' ...'}
                </p>

                <div
                  className={`${
                    view === 'list' ? 'w-[30%]' : 'w-[50%]'
                  } flex gap-4 items-center`}
                >
                  <span
                    className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-primarySkyBlue hover:brightness-95 text-xs text-secondaryBlue hover:text-primaryNavyBlue transition duration-700 cursor-pointer"
                    onClick={() => addToCart(item._id)}
                  >
                    <BsCart />
                  </span>
                  <span className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-primarySkyBlue hover:brightness-95 text-xs text-secondaryBlue hover:text-primaryNavyBlue transition duration-700 ">
                    <MdFavoriteBorder />
                  </span>
                  <span className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-primarySkyBlue hover:brightness-95 text-xs text-secondaryBlue hover:text-primaryNavyBlue transition duration-700 cursor-Pointer">
                    <BiSearchAlt
                      onClick={() => router.push(`/product/${item._id}`)}
                    />
                  </span>
                </div>
              </div>
            </li>
          ))}
      </ul>

      {/* PAGINATION */}
      <Pagination
        curPage={curPage}
        allPages={allPages}
        prevPage={prevPage}
        nextPage={nextPage}
        movePage={movePage}
      />
    </div>
  );
};

export default React.memo(ProductsList);

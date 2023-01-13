import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { Product } from '../../data/productsData';
import LeatestSkeletonLoading from './LeatestSkeletonLoading';
import LinksLeatestProducts from './SectionProductsLinks';

interface Props {
  productsData: Product[];
}

interface Links {
  name: string;
  slug: string;
}

const links: Links[] = [
  {
    name: 'New Arrival',
    slug: 'newArrival',
  },
  {
    name: 'Best Seller',
    slug: 'bestSeller',
  },
  {
    name: 'Featured',
    slug: 'featured',
  },
  {
    name: 'Special Offer',
    slug: 'specialOffer',
  },
];

const LatestProducts: React.FC<Props> = ({ productsData }) => {
  const [linkActive, setLinkActive] = useState<string>('newArrival');

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      if (linkActive === 'newArrival') {
        setFilteredProducts(
          productsData
            .filter((item: Product) => item.categories.includes('chair'))
            .reverse()
        );
        setIsLoading(false);
      } else if (linkActive === 'bestSeller') {
        setFilteredProducts(
          productsData
            .filter((item: Product) => item.categories.includes('chair'))
            .reverse()
        );
        setIsLoading(false);
      } else if (linkActive === 'featured') {
        setFilteredProducts(
          productsData.filter(
            ({ favourite, categories }) =>
              favourite > 4000 && categories.includes('chair')
          )
        );
        setIsLoading(false);
      } else {
        setFilteredProducts(
          productsData.filter(
            ({ price, categories }) =>
              price < 70 && categories.includes('chair')
          )
        );
        setIsLoading(false);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [linkActive, productsData]);

  return (
    <div className="w-[900px] p-10">
      <h1 className="text-3xl text-primaryNavyBlue font-josefin text-center font-bold mb-4">
        Leatest Products
      </h1>

      {/* LINKS */}
      <LinksLeatestProducts
        links={links}
        linkActive={linkActive}
        setLinkActive={setLinkActive}
      />

      {/* PRODUCTS */}
      <div className="w-full grid grid-cols-3 gap-x-8 gap-y-20 mt-10">
        {!isLoading &&
          filteredProducts.slice(0, 6).map((item: Product) => (
            <div key={item.id} className="w-full flex flex-col group">
              {/* image */}
              <div className="w-full h-52 flex  bg-primarySkyBlue relative trnasition duration-700 group-hover:bg-transparent">
                <div className="w-[70%] h-[80%] m-auto relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="true"
                    priority
                  />
                </div>
                <div className="absolute bottom-0 left-0 flex flex-col p-1 justify-around items-center">
                  <span className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-primarySkyBlue hover:brightness-95 text-xs text-secondaryBlue hover:text-primaryNavyBlue scale-0 opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100 ">
                    <BsCart />
                  </span>
                  <span className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-primarySkyBlue hover:brightness-95 text-xs text-secondaryBlue hover:text-primaryNavyBlue scale-0 opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100 ">
                    <MdFavoriteBorder />
                  </span>
                  <span className="w-6 h-6 flex justify-center items-center rounded-full hover:bg-primarySkyBlue hover:brightness-95 text-xs text-secondaryBlue hover:text-primaryNavyBlue scale-0 opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100 ">
                    <BiSearchAlt />
                  </span>
                </div>
              </div>
              {/* description */}
              <div className="w-full py-2 flex justify-between">
                <span className="text-primaryBlue text-sm font-josefin font-semibold hover:underline cursor-pointer">
                  {item.title}
                </span>
                <span className="text-primaryBlue text-sm font-josefin font-semibold">
                  ${item.price.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        {isLoading && <LeatestSkeletonLoading />}
      </div>
    </div>
  );
};

export default React.memo(LatestProducts);

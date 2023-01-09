import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Product } from '../../data/productsData';
import LeatestSkeletonLoading from './LeatestSkeletonLoading';

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
    // linkActive === "newArrival" && setFilteredProducts(productsData.reverse().slice(0,6));
    // linkActive === "bestSeller" && setFilteredProducts(productsData.slice(0,6));
    // linkActive === "featured" && setFilteredProducts(productsData.filter(({favourite}) => favourite > 4000).slice(0,6));
    // linkActive === "specialOffer" && setFilteredProducts(productsData.filter(({price}) => price < 70).slice(0,6));

    setIsLoading(true);

    const timeout = setTimeout(() => {
      if (linkActive === 'newArrival') {
        setFilteredProducts(productsData.reverse());
        setIsLoading(false);
      } else if (linkActive === 'bestSeller') {
        setFilteredProducts(productsData.reverse());
        setIsLoading(false);
      } else if (linkActive === 'featured') {
        setFilteredProducts(
          productsData.filter(({ favourite }) => favourite > 4000)
        );
        setIsLoading(false);
      } else {
        setFilteredProducts(productsData.filter(({ price }) => price < 70));
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
      <ul className="mx-auto w-[50%] flex items-center justify-between gap-4">
        {links.map((item: Links, i: number) => (
          <li
            key={Math.random() + i + ''}
            className={`h-6 font-bold font-lato text-sm cursor-pointer ${
              linkActive === item.slug
                ? 'border-b-[1px] border-b-primaryPink text-primaryPink'
                : 'border-none text-primaryBlue'
            }`}
            onClick={() => setLinkActive(item.slug)}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* PRODUCTS */}
      <div className="w-full grid grid-cols-3 gap-x-8 gap-y-20 mt-10">
        {!isLoading &&
          filteredProducts.slice(0, 6).map((item: Product) => (
            <div key={item.id} className="w-full flex flex-col ">
              {/* image */}
              <div className="w-full h-48 flex  bg-primarySkyBlue">
                <div className="w-[70%] h-[80%] m-auto relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="true"
                    priority
                  />
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

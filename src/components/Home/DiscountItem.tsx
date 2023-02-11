import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { Product } from '../../Types';
import DiscountSkeletonLoading from './DiscountSkeletonLoading';
import LinksDiscountProducts from './SectionProductsLinks';

interface Props {
  productsData: Product[];
}

interface Links {
  name: string;
  slug: string;
}

const links: Links[] = [
  {
    name: 'Wood Chair',
    slug: 'woodChair',
  },
  {
    name: 'Plastic Chair',
    slug: 'plasticChair',
  },
  {
    name: 'Sofa Collection',
    slug: 'sofaCollection',
  },
];

const listProductFeature: string[] = [
  'Material expose like metals',
  'Clear lines and geomatric figures',
  'Simple neutral colour',
  'Material expose like metals',
];

const DiscountItem: React.FC<Props> = ({ productsData }) => {
  const router = useRouter();

  const [linkActive, setLinkActive] = useState<string>('woodChair');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      if (linkActive === 'woodChair') {
        setFilteredProducts(
          productsData.filter((item: Product) =>
            item.categories.includes('chair')
          )
        );
        setIsLoading(false);
      } else if (linkActive === 'plasticChair') {
        setFilteredProducts(
          productsData.filter((item: Product) =>
            item.categories.includes('chair')
          )
        );
        setIsLoading(false);
      } else if (linkActive === 'sofaCollection') {
        setFilteredProducts(
          productsData.filter(
            ({ favourite, categories }) =>
              favourite > 4000 && categories.includes('couch')
          )
        );
        setIsLoading(false);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [linkActive, productsData]);

  return (
    <div className="w-[900px] p-10">
      <h1 className="text-3xl text-primaryNavyBlue font-josefin text-center font-bold mb-8">
        Discount Item
      </h1>

      {/* LINKS */}
      <LinksDiscountProducts
        links={links}
        linkActive={linkActive}
        setLinkActive={setLinkActive}
      />

      {/* PRODUCTS */}
      {!isLoading && (
        <div className="w-full min-h-[25rem] mt-4 flex items-stretch justify-between gap-4">
          {/* DESCRIPTION */}
          <div className="w-full flex flex-col justify-center gap-5">
            <h2 className="text-2xl text-primaryNavyBlue font-josefin font-bold">
              20% Discount of all product
            </h2>
            <span className="text-primaryPink font-bold text-sm font-josefin">
              {filteredProducts[0]?.title}
            </span>
            <p className="text-primaryBlue text-xs font-lato">
              {filteredProducts[0]?.description}
            </p>
            <ul className="w-full grid grid-cols-2 gap-3">
              {listProductFeature.map((item: string, i) => (
                <li
                  key={i + i + ''}
                  className="w-full flex items-center gap-1 text-primaryBlue text-xs font-lato"
                >
                  <AiOutlineCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => router.push(filteredProducts[0]._id)}
              className="text-sm text-primarySkyBlue border-none outline-none cursor-pointer bg-primaryPink w-[35%] py-3 font-josefin hover:brightness-90"
            >
              Shop Now
            </button>
          </div>
          {/* IMAGE */}
          <div className="w-full relative flex">
            <div className="w-3/4 h-3/4 bg-primaryPink rounded-full m-auto opacity-10" />
            <div className=" w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
              {filteredProducts.length !== 0 && (
                <Image
                  src={filteredProducts[0].img}
                  alt={filteredProducts[0].title}
                  sizes="true"
                  fill
                  priority
                />
              )}
              {filteredProducts.length === 0 && <></>}
            </div>
          </div>
        </div>
      )}

      {isLoading && <DiscountSkeletonLoading />}
    </div>
  );
};

export default React.memo(DiscountItem);

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Product } from '../../Types';

const navLinks: string[] = ['Home', 'Blogs', 'Shop', 'Contact'];

const Navbar: React.FC = () => {
  const router = useRouter();

  // state of product search
  const [productsSearch, setProductsSearch] = useState<Product[] | []>([]);

  // state show search suggest
  const [isShowSuggest, setIsShowSuggest] = useState<boolean>(false);

  // state of search product
  const [searchInput, setSearchInput] = useState<string>('');

  // start showing a product when state changing
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products/search?q=${searchInput}`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch!');
        }
        const data = await res.json();
        setProductsSearch(data);
      } catch (error) {
        console.log(error);
      }
    };

    const timeout = setTimeout(() => {
      if (searchInput.length === 0) {
        setProductsSearch([]);
        return;
      }

      getProducts();
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  // submit search
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const getProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products/search?q=${searchInput}`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch!');
        }
        const data = await res.json();
        setProductsSearch(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchInput.length === 0) {
      setProductsSearch([]);
      return;
    }

    getProducts();
  };

  // navigate to product that clicked in search
  const navigateHandler = (slug: string) => {
    setSearchInput('');
    router.push(`/product/${slug}`);
  };

  // onBlur function
  const blurHandler = () => {
    setTimeout(() => {
      setIsShowSuggest(false);
    }, 200);
  };

  return (
    <div className="w-full p-4 flex">
      <div className="m-auto w-[1024px] flex items-center justify-between">
        {/* links */}
        <div className="flex items-center gap-20">
          <Link href="/">
            <h1 className="text-3xl text-black font-josefin font-bold">
              Hekto
            </h1>
          </Link>
          <ul className="flex items-center gap-8 text-lato text-sm">
            {navLinks.map((item: string, i: number) => (
              <li
                key={Math.random() + i + ''}
                className="w-[15%] text-center cursor-pointer hover:text-primaryPink"
              >
                <Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* search input */}
        <form
          className="w-[240px] flex items-stretch border-[1px] border-black/10 relative"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            onFocus={() => setIsShowSuggest(true)}
            onBlur={blurHandler}
            className="py-1 px-3 w-[80%] border-none outline-none bg-transparent"
          />
          <button
            type="submit"
            className="w-[20%] border-none outline-none bg-primaryPink flex justify-center items-center"
          >
            <FiSearch className="text-primarySkyBlue text-xl font-bold" />
          </button>

          {/* MENU LIST PRODUCT*/}
          {isShowSuggest && (
            <ul className="absolute top-[140%] left-0 right-0 bg-white/70 z-10 rounded-sm flex flex-col">
              {productsSearch.length !== 0 &&
                productsSearch.map((item: Product) => (
                  <li
                    key={item._id}
                    className=" w-full px-2 py-3 border-b-[1px] border-b-black/10 hover:bg-white/80 cursor-pointer"
                    onClick={() => navigateHandler(item._id)}
                  >
                    {item.title}
                  </li>
                ))}
            </ul>
          )}
        </form>
      </div>
    </div>
  );
};

export default React.memo(Navbar);

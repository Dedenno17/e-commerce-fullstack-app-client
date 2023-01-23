import React from 'react';
import { FiSearch } from 'react-icons/fi';

const navLinks: string[] = [
  'Home',
  'Pages',
  'Products',
  'Blog',
  'Shop',
  'Contact',
];

const Navbar: React.FC = () => {
  return (
    <div className="w-full p-4 flex">
      <div className="m-auto w-[1024px] flex items-center justify-between">
        {/* links */}
        <div className="flex items-center gap-20">
          <h1 className="text-3xl text-black font-josefin font-bold">Hekto</h1>
          <ul className="flex items-center gap-4 text-lato text-sm">
            {navLinks.map((item: string, i: number) => (
              <li
                key={Math.random() + i + ''}
                className="w-[15%] text-center cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* search input */}
        <form className="w-[240px] flex items-stretch border-[1px] border-black/10">
          <input
            type="text"
            className="py-1 px-3 w-[80%] border-none outline-none bg-transparent"
          />
          <button
            type="submit"
            className="w-[20%] border-none outline-none bg-primaryPink flex justify-center items-center"
          >
            <FiSearch className="text-primarySkyBlue text-xl font-bold" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Navbar);

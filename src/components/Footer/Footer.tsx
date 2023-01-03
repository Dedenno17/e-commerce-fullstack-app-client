import React from 'react';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';

interface FooterLinks {
  title: string;
  links: string[];
}

const footerLinks: FooterLinks[] = [
  {
    title: 'Categories',
    links: [
      'Laptops & Computers',
      'Cameras & Photography',
      'Smart Phones & Tablets',
      'Video Games & Consoles',
      'Waterproofs Headphones',
    ],
  },
  {
    title: 'Customer Care',
    links: [
      'My Account',
      'Discount',
      'Returns',
      'Orders History',
      'Order Tracking',
    ],
  },
  {
    title: 'Pages',
    links: [
      'Blog',
      'Browse The Shop',
      'Category',
      'Pre-built Pages',
      'Visual Composer Elements',
      'Woocommerce Pages',
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full py-20 flex bg-primarySkyBlue">
        <div className="flex items-stretch justify-between gap-4 w-[65%] m-auto">
          <div className="flex flex-col gap-4 w-[34%] mr-12">
            <h1 className="text-3xl text-black font-josefin font-bold">
              Hekto
            </h1>
            <div className="w-full flex items-stretch border-none text-xs rounded-[0.25rem] overflow-hidden">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="py-[0.4rem] px-3 w-[60%] border-none outline-none bg-white"
              />
              <button
                type="button"
                className="w-[40%] border-none outline-none bg-primaryPink flex justify-center items-center text-white"
              >
                Sign Up
              </button>
            </div>
            <span className="text-secondaryBlue text-xs">Contact Info</span>
            <span className="text-secondaryBlue text-xs">
              16.5 Raya Serang st, Sukamulya 0101 Cikupa, Tangerang
            </span>
          </div>
          {footerLinks.map((item: FooterLinks, i: number) => (
            <div className="w-[23%]" key={Math.random() + i + ''}>
              <h2 className="text-md text-black font-bold mb-6">
                {item.title}
              </h2>
              <ul className="w-full flex flex-col gap-4">
                {item.links.map((lin: string) => (
                  <li className="w-full text-secondaryBlue text-xs" key={lin}>
                    {lin}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full p-3 flex bg-[#e7e4f8]">
        <div className="w-[55%] m-auto flex items-center justify-between">
          <span className="text-xs font-lato text-[#999]">
            &copy; Hekto. All Right Reserved.
          </span>
          <span className="flex gap-2">
            <span className="p-[0.125rem] bg-secondaryBlue flex rounded-full">
              <ImFacebook className="m-auto text-xs text-primarySkyBlue" />
            </span>
            <span className="p-[0.125rem] bg-secondaryBlue flex rounded-full">
              <AiFillInstagram className="m-auto text-xs text-primarySkyBlue" />
            </span>
            <span className="p-[0.125rem] bg-secondaryBlue flex rounded-full">
              <ImTwitter className="m-auto text-xs text-primarySkyBlue" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);

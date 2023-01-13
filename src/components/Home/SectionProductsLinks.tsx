import React from 'react';
interface Links {
  name: string;
  slug: string;
}

const LinksLeatestProducts: React.FC<{
  links: Links[];
  linkActive: string;
  setLinkActive: (slug: string) => void;
}> = ({ links, linkActive, setLinkActive }) => {
  return (
    <ul className="mx-auto w-[50%] flex items-center justify-between gap-4">
      {links.map((item: Links, i: number) => (
        <li
          key={Math.random() + i + ''}
          className="h-6 font-bold font-lato text-sm cursor-pointer flex flex-col items-center gap-2 group"
          onClick={() => setLinkActive(item.slug)}
        >
          <span
            className={`hover:text-primaryPink ${
              linkActive === item.slug ? 'text-primaryPink' : 'text-primaryBlue'
            }`}
          >
            {item.name}
          </span>
          <span
            className={`py-[0.05rem] bg-primaryPink transition duration-700 ${
              linkActive === item.slug ? 'animate-expand' : ''
            }`}
          />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(LinksLeatestProducts);

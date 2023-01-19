import React from 'react';

interface Links {
  name: string;
  slug: string;
}

interface Props {
  links: Links[];
  linkActive: string;
  setLinkActive: (slug: string) => void;
}

const infoLinks: React.FC<Props> = ({ links, linkActive, setLinkActive }) => {
  return (
    <ul className="flex items-center gap-10">
      {links.map((item: Links, i: number) => (
        <li
          key={Math.random() + i + ''}
          className="text-md text-primaryNavyBlue font-josefin font-bold cursor-pointer flex flex-col items-center gap-[0.25rem] group"
          onClick={() => setLinkActive(item.slug)}
        >
          <span className="text-primaryNavyBlue">{item.name}</span>
          <span
            className={`py-[0.05rem] bg-primaryNavyBlue transition duration-700 ${
              linkActive === item.slug ? 'animate-expand' : ''
            }`}
          />
        </li>
      ))}
    </ul>
  );
};

export default React.memo(infoLinks);

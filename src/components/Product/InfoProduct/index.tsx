import React, { useState } from 'react';
import InfoAdditional from './InfoAdditional';
import InfoDescription from './InfoDescription';
import InfoLinks from './InfoLinks';
import InfoReviews from './InfoReviews';
import InfoVideos from './InfoVideos';

interface InfoLink {
  name: string;
  slug: string;
}

const links: InfoLink[] = [
  {
    name: 'Description',
    slug: 'description',
  },
  {
    name: 'Additional Info',
    slug: 'additionalInfo',
  },
  {
    name: 'Reviews',
    slug: 'reviews',
  },
  {
    name: 'Videos',
    slug: 'videos',
  },
];

const InfoProduct: React.FC = () => {
  const [linkActive, setLinkActive] = useState<string>('description');

  return (
    <div className="w-full min-h-[80vh] py-14 m-auto flex items-center bg-primarySkyBlue mb-4">
      <div className="w-[1024px] min-h-[32rem] m-auto flex flex-col gap-10">
        {/* LINKS */}
        <InfoLinks
          links={links}
          linkActive={linkActive}
          setLinkActive={setLinkActive}
        />

        {/* CONTENT */}
        {linkActive === 'description' && <InfoDescription />}
        {linkActive === 'additionalInfo' && <InfoAdditional />}
        {linkActive === 'reviews' && <InfoReviews />}
        {linkActive === 'videos' && <InfoVideos />}
      </div>
    </div>
  );
};

export default React.memo(InfoProduct);

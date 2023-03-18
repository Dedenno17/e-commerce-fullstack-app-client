import { useRouter } from 'next/router';
import React from 'react';

const ButtonBlog: React.FC = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="w-full py-2 bg-primaryPink text-md text-primarySkyBlue font-josefin font-bold cursor-pointer hover:brightness-90"
      onClick={() => router.push('/shop')}
    >
      Continue Shoping
    </button>
  );
};

export default React.memo(ButtonBlog);

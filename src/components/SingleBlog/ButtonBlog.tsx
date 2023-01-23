import React from 'react';

const ButtonBlog: React.FC = () => {
  return (
    <button
      type="button"
      className="w-full py-2 bg-primaryPink text-md text-primarySkyBlue font-josefin font-bold cursor-pointer hover:brightness-90"
    >
      Continue Shoping
    </button>
  );
};

export default React.memo(ButtonBlog);

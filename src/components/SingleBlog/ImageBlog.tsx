import Image from 'next/image';
import React from 'react';

const ImageBlog: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="relative w-full h-[32rem]">
      <Image src={image} alt="blog" fill sizes="true" priority />
    </div>
  );
};

export default React.memo(ImageBlog);

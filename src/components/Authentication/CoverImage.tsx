import Image from 'next/image';
import React, { useState } from 'react';
import { useEffect } from 'react';

const CoverImage: React.FC<{ currentPage: string }> = ({ currentPage }) => {
  const [imageNumber, setImageNumber] = useState<number>(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (imageNumber === 3) {
        setImageNumber(1);
        return;
      }
      setImageNumber((prevState) => prevState + 1);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [imageNumber]);

  return (
    <div
      className={`absolute top-0 bottom-0 left-0 w-1/2 bg-primaryPink overflow-hidden transition duration-1000 ${
        currentPage === 'login' ? 'translate-x-full' : ''
      }`}
    >
      <div className="w-full h-full m-auto relative animate-scaling">
        <Image
          src={`/auth-image-${imageNumber}.jpg`}
          alt="atuh image"
          fill
          sizes="true"
          priority
        />
      </div>
    </div>
  );
};

export default React.memo(CoverImage);

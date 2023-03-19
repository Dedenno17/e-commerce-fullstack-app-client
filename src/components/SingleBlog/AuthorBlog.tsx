import React from 'react';
import { IoCalendarClearSharp, IoCreate } from 'react-icons/io5';
import { createdAtFormat } from '../../helpers/createdAtFormat';

const AuthorBlog: React.FC<{ author: string; createdAt: string }> = ({
  author,
  createdAt,
}) => {
  return (
    <div className="w-full flex item-center gap-8">
      <span className="flex items-center gap-2">
        <IoCreate className="text-xs text-primaryPink" />
        <span className="px-6 py-[0.1rem] text-primaryNavyBlue text-xs font-josefin font-bold bg-primaryPink/40">
          {author}
        </span>
      </span>
      <span className="flex items-center gap-2">
        <IoCalendarClearSharp className="text-xs text-[#FCDCAF]" />
        <span className="px-6 py-[0.1rem] text-primaryNavyBlue text-xs font-josefin font-bold bg-[#FCDCAF]/40">
          {createdAtFormat(createdAt)}
        </span>
      </span>
    </div>
  );
};

export default React.memo(AuthorBlog);

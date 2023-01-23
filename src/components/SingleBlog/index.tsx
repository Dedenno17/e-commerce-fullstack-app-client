import React from 'react';
import AuthorBlog from './AuthorBlog';
import ButtonBlog from './ButtonBlog';
import CommentBlog from './CommentBlog';
import ContentBlog from './ContentBlog';
import ImageBlog from './ImageBlog';

const SingleBlog: React.FC = () => {
  return (
    <div className="w-[75%] flex flex-col gap-20">
      <div className="w-full flex flex-col gap-8">
        <ImageBlog image="/blog-img.jpg" />
        <AuthorBlog author="Sheldon Lee" createdAt="23 Aug 2021" />
        <ContentBlog />
        <CommentBlog />
        <ButtonBlog />
      </div>
    </div>
  );
};

export default React.memo(SingleBlog);

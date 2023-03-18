import React from 'react';
import { Blog } from '../../Types';
import AuthorBlog from './AuthorBlog';
import ButtonBlog from './ButtonBlog';
import CommentBlog from './CommentBlog';
import ContentBlog from './ContentBlog';
import ImageBlog from './ImageBlog';

interface Props {
  singleBlogData: Blog;
}

const SingleBlog: React.FC<Props> = ({ singleBlogData }) => {
  return (
    <div className="w-full flex flex-col gap-20">
      <div className="w-full flex flex-col gap-8">
        <ImageBlog image={singleBlogData.img} />
        <AuthorBlog
          author={singleBlogData.atuhor}
          createdAt={singleBlogData.createdAt}
        />
        <ContentBlog />
        <CommentBlog />
        <ButtonBlog />
      </div>
    </div>
  );
};

export default React.memo(SingleBlog);

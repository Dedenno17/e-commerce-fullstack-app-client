import React, { useEffect } from 'react';
import { useAppDispatch } from '../../Store/hooks';
import { setComment } from '../../Store/slices/blogComment-slice';
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
  const dispatch = useAppDispatch();

  // set comment when blog first render
  useEffect(() => {
    dispatch(setComment(singleBlogData.comments));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex flex-col gap-20">
      <div className="w-full flex flex-col gap-8">
        <ImageBlog image={singleBlogData.img} />
        <AuthorBlog
          author={singleBlogData.atuhor}
          createdAt={singleBlogData.createdAt}
        />
        <ContentBlog />
        <CommentBlog blogId={singleBlogData._id} />
        <ButtonBlog />
      </div>
    </div>
  );
};

export default React.memo(SingleBlog);

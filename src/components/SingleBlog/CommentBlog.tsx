import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { createdAtFormat } from '../../helpers/createdAtFormat';
import { useCreateCommentBlogMutation } from '../../Store/apiCalls';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { addComment } from '../../Store/slices/blogComment-slice';
import { Blog, commentBlog } from '../../Types';

interface Props {
  blogId: string;
}

const CommentBlog: React.FC<Props> = ({ blogId }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // global state
  const user = useAppSelector((state) => state.user.value);
  const blogComment = useAppSelector((state) => state.blogComment.value);

  // create comment blogs
  const [createComment, { data }] = useCreateCommentBlogMutation();

  // state of comment value
  const [commentValue, setCommentValue] = useState<string>('');

  // submit function comment
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      router.push('/authentication');
      return;
    }

    if (user) {
      const args = {
        userId: user.others._id,
        blogId,
        value: commentValue,
      };
      createComment(args);
    }
  };

  // post comment to server when comment was added
  useEffect(() => {
    if (data && user) {
      const commentUser: commentBlog = {
        _id: Math.random() + 1 + '',
        userId: user.others._id,
        username: user.others.username,
        image: user.others.picture,
        value: commentValue,
        date: new Date().toString(),
      };
      dispatch(addComment(commentUser));
      setCommentValue('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="flex flex-col gap-14">
      <ul className="w-full flex flex-col gap-6">
        {blogComment.map((item: commentBlog) => (
          <li
            key={item._id}
            className="w-full p-4 shadow-simetri flex items-stretch h-[8rem] gap-4"
          >
            <div className="w-[10%] relative">
              <Image
                src={
                  item.image
                    ? item.image
                    : 'https://i.ibb.co/VMw4b4T/Wavy-Bus-31-Single-02.jpg'
                }
                alt={item.username}
                fill
                sizes="true"
                priority
              />
            </div>
            <div className="w-[70%] flex flex-col justify-center gap-2">
              <span className="flex items-center gap-6">
                <h3 className="text-sm text-primaryNavyBlue font-josefin font-bold">
                  {item.username}
                </h3>
                <span className="text-xs font-lato text-primaryBlue/40">
                  {createdAtFormat(item.date)}
                </span>
              </span>
              <span className="text-xs font-lato text-primaryBlue/40">
                {item.value}
              </span>
            </div>
          </li>
        ))}
        {blogComment.length === 0 && (
          <span className="w-full text-center text-primaryBlue/80 font-bold">
            There is No Comment.
          </span>
        )}
      </ul>
      <form
        className="w-full flex flex-col gap-4 text-sm items-end"
        onSubmit={submitHandler}
      >
        <span className="w-full text-left text-xl text-primaryNavyBlue font-bold">
          Comment
        </span>
        <textarea
          rows={12}
          className="text-sm w-full p-4 font-lato border-[1px] border-black/10 outline-none"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        />
        <button
          type="submit"
          className="w-[15%] py-2 bg-primaryNavyBlue text-white rounded-lg cusor-pointer hover:brightness-90 outline-none"
        >
          Submit
        </button>
      </form>
      {data && (
        <span className="w-full text-center text-primaryNavyBlue font-bold font-lato">
          {data.message}
        </span>
      )}
    </div>
  );
};

export default React.memo(CommentBlog);

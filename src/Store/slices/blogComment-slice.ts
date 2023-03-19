import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { commentBlog } from '../../Types';
import { RootState } from '../store';

interface InitialStateValue {
  value: commentBlog[];
}

const initialStateValue: InitialStateValue = {
  value: [],
};

export const blogCommentSlice = createSlice({
  name: 'blogComment',
  initialState: initialStateValue,
  reducers: {
    setComment: (state, action: PayloadAction<commentBlog[]>) => {
      state.value = action.payload;
    },
    addComment: (state, action: PayloadAction<commentBlog>) => {
      const newComment = [...state.value];
      newComment.push(action.payload);

      state.value = newComment;
    },
  },
});

export const { setComment, addComment } = blogCommentSlice.actions;
export const SelectBlogComment = (state: RootState) => state.blogComment.value;
export default blogCommentSlice.reducer;

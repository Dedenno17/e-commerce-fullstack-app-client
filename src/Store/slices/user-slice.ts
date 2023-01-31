import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../Types';

const initialStateValue = {
  value: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialStateValue,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const SelectUser = (state: RootState) => state.user.value;
export default userSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialStateValue = {
  value: 'login',
};

export const authStateSlice = createSlice({
  name: 'authState',
  initialState: initialStateValue,
  reducers: {
    setAuthState: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setAuthState } = authStateSlice.actions;
export const SelectAuthState = (state: RootState) => state.authState.value;
export default authStateSlice.reducer;

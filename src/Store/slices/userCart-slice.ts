import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Cart } from '../../Types';

interface InitialStateValue {
  value: Cart | null;
}

const InitialStateValue = {
  value: null,
};

export const userCartSlice = createSlice({
  name: 'userCart',
  initialState: InitialStateValue,
  reducers: {
    createCart: () => {},
    addCart: () => {},
    deleteCart: () => {},
  },
});

export const { createCart, addCart, deleteCart } = userCartSlice.actions;
export const SelectUserCart = (state: RootState) => state.userCart.value;
export default userCartSlice.reducer;

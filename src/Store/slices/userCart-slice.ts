import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Cart, CartProducts } from '../../Types';

interface InitialStateValue {
  value: Cart;
}

const initialStateValue: InitialStateValue = {
  value: {
    userId: '',
    products: [],
    totalPrice: 0,
  },
};

// interface payload
interface addCartPayload {
  product: CartProducts;
}

export const userCartSlice = createSlice({
  name: 'userCart',
  initialState: initialStateValue,
  reducers: {
    createCart: (state, action: PayloadAction<Cart>) => {
      state.value = action.payload;
    },
    addCart: (state, action: PayloadAction<addCartPayload>) => {
      const newProducts = [...state.value.products, action.payload.product];
      state.value.products = newProducts;

      const oldTotalPrice = state.value.products.reduce(
        (acc, cur) => acc + cur.price * cur.quantity,
        0
      );
      const newTotalPrice =
        oldTotalPrice +
        action.payload.product.price * action.payload.product.quantity;

      state.value.totalPrice = newTotalPrice;
    },
    deleteCart: () => {},
  },
});

export const { createCart, addCart, deleteCart } = userCartSlice.actions;
export const SelectUserCart = (state: RootState) => state.userCart.value;
export default userCartSlice.reducer;

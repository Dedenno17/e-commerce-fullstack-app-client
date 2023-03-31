import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Wishlist, WishlistProduct } from '../../Types';
import { RootState } from '../store';

interface InitialState {
  value: Wishlist | null;
}

// interface for payload add wihslist
interface AddWishlistPayload {
  product: WishlistProduct;
}

const initialStateValue: InitialState = {
  value: null,
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: initialStateValue,
  reducers: {
    createWishlist: (state, action: PayloadAction<Wishlist>) => {
      state.value = action.payload;
    },
    addWishlist: (state, action: PayloadAction<AddWishlistPayload>) => {
      if (state.value) {
        const newProducts = [...state.value.products, action.payload.product];
        state.value.products = newProducts;
      }
    },
    deleteWishlist: (state, action: PayloadAction<string>) => {
      if (state.value) {
        const newWishlist = { ...state.value };
        const newProducts = newWishlist.products.filter(
          (item) => item._id !== action.payload
        );
        newWishlist.products = newProducts;
        state.value = newWishlist;
      }
    },
    clearWishlist: (state) => {
      if (state.value) {
        const newWishlist = {
          _id: state.value._id,
          userId: state.value.userId,
          products: [],
          createdAt: '',
          updatedAt: '',
        };
        state.value = newWishlist;
      }
    },
  },
});

export const { createWishlist, addWishlist, deleteWishlist, clearWishlist } =
  wishlistSlice.actions;
export const SelectWishlistSlice = (state: RootState) => state.wishlist.value;
export default wishlistSlice.reducer;

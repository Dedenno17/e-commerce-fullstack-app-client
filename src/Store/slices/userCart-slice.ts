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

      const newTotalPrice = state.value.products.reduce(
        (acc, cur) => acc + cur.price * cur.quantity,
        0
      );

      state.value.totalPrice = newTotalPrice;
    },
    deleteCart: (state, action: PayloadAction<string>) => {
      const newCart = { ...state.value };
      const newProducts = newCart.products.filter(
        (item) => item._id !== action.payload
      );

      const newTotalPrice = newProducts.reduce(
        (acc, cur) => acc + cur.price * cur.quantity,
        0
      );

      newCart.products = newProducts;
      newCart.totalPrice = newTotalPrice;

      state.value = newCart;
    },
    clearCart: (state) => {
      const newCart = {
        userId: state.value.userId,
        products: [],
        totalPrice: 0,
      };
      state.value = newCart;
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const newCart = { ...state.value };

      // find the product that you want to increase its quantity
      const increasedProduct = newCart.products.find(
        (item) => item._id === action.payload
      );

      // if the product was exist
      if (increasedProduct) {
        const indexOfIncreasedProduct =
          newCart.products.indexOf(increasedProduct);
        increasedProduct.quantity += 1;

        newCart.products[indexOfIncreasedProduct] = increasedProduct;

        const newTotalPrice = newCart.products.reduce(
          (acc, cur) => acc + cur.price * cur.quantity,
          0
        );

        newCart.totalPrice = newTotalPrice;

        state.value = newCart;
      }

      // if the prduct was not exist
      if (!increasedProduct) {
        state.value = newCart;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const newCart = { ...state.value };

      // find the product that you want to increase its quantity
      const increasedProduct = newCart.products.find(
        (item) => item._id === action.payload
      );

      // if the product was exist
      if (increasedProduct) {
        if (increasedProduct.quantity === 1) {
          state.value = newCart;
        } else {
          const indexOfIncreasedProduct =
            newCart.products.indexOf(increasedProduct);
          increasedProduct.quantity -= 1;

          newCart.products[indexOfIncreasedProduct] = increasedProduct;

          const newTotalPrice = newCart.products.reduce(
            (acc, cur) => acc + cur.price * cur.quantity,
            0
          );

          newCart.totalPrice = newTotalPrice;

          state.value = newCart;
        }
      }

      // if the prduct was not exist
      if (!increasedProduct) {
        state.value = newCart;
      }
    },
  },
});

export const {
  createCart,
  addCart,
  deleteCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = userCartSlice.actions;
export const SelectUserCart = (state: RootState) => state.userCart.value;
export default userCartSlice.reducer;

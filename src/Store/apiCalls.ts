import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Register, Login, User, Product, Cart, CartProducts } from '../Types';

// interface
interface GetQueryUserCart {
  userId?: string;
  token?: string;
}
interface AddQueryUserCart {
  userId?: string;
  token: string;
  payload: Cart;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: [
    'Register',
    'Login',
    'SearchProduct',
    'GetUserCart',
    'CreateUserCart',
    'AddUserCart',
    'GetSingleProduct',
  ],
  endpoints: (build) => ({
    register: build.mutation<User, Partial<Register>>({
      query: (payload) => ({
        url: '/auth/register',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Register'],
    }),
    login: build.mutation<User, Partial<Login>>({
      query: (payload) => ({
        url: '/auth/login',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json ; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Login'],
    }),
    getSearchProduct: build.query<Product, string>({
      query: (query) => `/products/search?q=${query}`,
      providesTags: ['SearchProduct'],
    }),
    getUserCart: build.query<Cart, GetQueryUserCart>({
      query: (arg) => {
        const { userId, token } = arg;
        return {
          url: `/cart/find/${userId}`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json ; charset=UTF-8',
            token: `Bearer ${token}`,
          },
        };
      },
      providesTags: ['GetUserCart'],
    }),
    createUserCart: build.mutation<Cart, Partial<Cart>>({
      query: (payload) => ({
        url: `/cart`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-Type': 'application/json ; charset=UTF-8',
        },
      }),
      invalidatesTags: ['CreateUserCart'],
    }),
    addUserCart: build.mutation<Cart, AddQueryUserCart>({
      query: (arg) => {
        const { userId, token, payload } = arg;
        return {
          url: `cart/${userId}`,
          method: 'PUT',
          body: payload,
          headers: {
            'Content-Type': 'application/json ; charset=UTF-8',
            token: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ['AddUserCart'],
    }),
    getSingleProduct: build.query<Product, string>({
      query: (id) => `/products/find/${id}`,
      providesTags: ['GetSingleProduct'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetSearchProductQuery,
  useGetUserCartQuery,
  useCreateUserCartMutation,
  useAddUserCartMutation,
  useGetSingleProductQuery,
} = api;

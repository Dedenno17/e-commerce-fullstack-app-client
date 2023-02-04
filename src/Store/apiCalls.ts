import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Register, Login, User, Product, Cart } from '../Types';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ['Register', 'Login', 'SearchProduct', 'GetUserCart'],
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
    getUserCart: build.query<
      Cart,
      { userId: string | undefined; token: string | undefined }
    >({
      query: (arg) => {
        const { userId, token } = arg;
        return {
          url: `/cart/find/${userId}`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: `Bearer ${token}`,
          },
        };
      },
      providesTags: ['GetUserCart'],
    }),
    createUserCart: build.mutation<
      Cart[],
      { payload: Partial<Cart>; token: string }
    >({
      query: (arg) => {
        const { payload, token } = arg;
        return {
          url: `/cart`,
          method: 'POST',
          body: payload,
          headers: {
            'Content-type': 'application/json ; charset=UTF-8',
            token: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetSearchProductQuery,
  useGetUserCartQuery,
  useCreateUserCartMutation,
} = api;

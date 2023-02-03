import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Register, Login, User, Product } from '../Types';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ['Register', 'Login', 'SearchProduct'],
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
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetSearchProductQuery,
} = api;

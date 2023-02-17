import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Register,
  Login,
  User,
  Product,
  Cart,
  CartProducts,
  Blog,
} from '../Types';

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
interface FilterForProducts {
  discount: string;
  rating: number;
  categories: string;
  price: number;
  color: string;
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
    'GetProducts',
    'GetSingleProduct',
    'GetBlogs',
    'GetSingleBlog',
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
          url: `/cart/${userId}`,
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
    getProducts: build.query<Product[], any>({
      query: (par) => ({
        url: '/products',
        method: 'GET',
        params: { ...par },
      }),
      providesTags: ['GetProducts'],
    }),
    getSingleProduct: build.query<Product, string>({
      query: (id) => `/products/find/${id}`,
      providesTags: ['GetSingleProduct'],
    }),
    getBlogs: build.query<Blog[], Partial<Blog>>({
      query: () => `/blogs`,
      providesTags: ['GetBlogs'],
    }),
    getSingleBlog: build.query<Blog, string>({
      query: (id) => `/blogs/${id}`,
      providesTags: ['GetSingleBlog'],
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
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useLazyGetProductsQuery,
} = api;

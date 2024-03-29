import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Register,
  Login,
  User,
  Product,
  Cart,
  CartProducts,
  Blog,
  RelatedProducts,
  Order,
  Wishlist,
  WishlistProduct,
} from '../Types';

// interface
interface GetQueryUserCart {
  userId?: string | string[] | undefined;
  token?: string;
}
interface AddQueryUserCart {
  userId?: string;
  token: string;
  payload: Cart;
}
interface UpdateQueryUserCart {
  userId?: string | string[] | undefined;
  token?: string;
  payload: {
    products: CartProducts[];
    totalPrice: number;
  };
}
interface FilterForProducts {
  discount: string;
  rating: number;
  categories: string;
  price: number;
  color: string;
}
interface PaymentIntent {
  clientSecret?: string;
}

interface GetQueryUserWishlist {
  userId?: string | string[] | undefined;
  token?: string;
}

interface UpdateQueryUserWishlist {
  userId?: string | string[] | undefined;
  token?: string;
  payload: {
    products: WishlistProduct[];
  };
}

// create api
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: [
    'Register',
    'Login',
    'SearchProduct',
    'GetUserCart',
    'CreateUserCart',
    'UpdateUserCart',
    'AddUserCart',
    'GetProducts',
    'GetAllProduct',
    'GetSingleProduct',
    'GetRelatedProducts',
    'GetBlogs',
    'GetSingleBlog',
    'CreateCommentBlog',
    'CreatePaymentIntent',
    'CreateOrder',
    'CreateWishlist',
    'GetUserWishlist',
    'UpdateUserWishlist',
    'AddUserWishlist',
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
    updateUserCart: build.mutation<Cart, Partial<UpdateQueryUserCart>>({
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
      invalidatesTags: ['UpdateUserCart'],
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
    getRelatedProducts: build.query<RelatedProducts, string>({
      query: (productId) => `/products/similar/${productId}`,
      providesTags: ['GetRelatedProducts'],
    }),
    getAllProduct: build.query<Product[], undefined>({
      query: () => `/products`,
      providesTags: ['GetAllProduct'],
    }),
    getBlogs: build.query<Blog[], undefined>({
      query: () => `/blogs`,
      providesTags: ['GetBlogs'],
    }),
    getSingleBlog: build.query<Blog, string>({
      query: (id) => `/blogs/${id}`,
      providesTags: ['GetSingleBlog'],
    }),
    createCommentBlog: build.mutation<
      { success: boolean; message: string },
      { userId: string; blogId: string; value: string }
    >({
      query: (args) => ({
        url: `/blogs/comment/${args.userId}`,
        method: 'POST',
        body: { blogId: args.blogId, value: args.value },
        headers: {
          'Content-Type': 'application/json ; charset=UTF-8',
        },
      }),
      invalidatesTags: ['CreateCommentBlog'],
    }),
    createPaymentIntent: build.mutation<PaymentIntent, Partial<Order>>({
      query: (order) => ({
        url: '/paymentIntent',
        method: 'POST',
        body: order,
        headers: {
          'Content-type': 'application/json ; charset=UTF-8',
        },
      }),
      invalidatesTags: ['CreatePaymentIntent'],
    }),
    createOrder: build.mutation<Order, Partial<Order>>({
      query: (order) => ({
        url: '/order/create',
        method: 'POST',
        body: order,
        headers: {
          'Content-type': 'application/json ; charset=UTF-8',
        },
      }),
      invalidatesTags: ['CreateOrder'],
    }),
    createWishlistt: build.mutation<Wishlist, Partial<Wishlist>>({
      query: (payload) => ({
        url: `/wishlist/create`,
        method: 'POST',
        body: payload,
        headers: {
          'Content-Type': 'application/json ; charset=UTF-8',
        },
      }),
      invalidatesTags: ['CreateWishlist'],
    }),
    getUserWishlist: build.query<Wishlist, GetQueryUserWishlist>({
      query: (arg) => {
        const { userId, token } = arg;
        return {
          url: `/wishlist/find/${userId}`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json ; charset=UTF-8',
            token: `Bearer ${token}`,
          },
        };
      },
      providesTags: ['GetUserWishlist'],
    }),
    updateUserWishlist: build.mutation<
      Wishlist,
      Partial<UpdateQueryUserWishlist>
    >({
      query: (arg) => {
        const { userId, token, payload } = arg;
        return {
          url: `/wishlist/update/${userId}`,
          method: 'PUT',
          body: payload,
          headers: {
            'Content-Type': 'application/json ; charset=UTF-8',
            token: `Bearer ${token}`,
          },
        };
      },
      invalidatesTags: ['UpdateUserWishlist'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetSearchProductQuery,
  useGetUserCartQuery,
  useLazyGetUserCartQuery,
  useCreateUserCartMutation,
  useAddUserCartMutation,
  useUpdateUserCartMutation,
  useGetSingleProductQuery,
  useGetRelatedProductsQuery,
  useGetBlogsQuery,
  useGetSingleBlogQuery,
  useCreateCommentBlogMutation,
  useLazyGetProductsQuery,
  useGetAllProductQuery,
  useCreatePaymentIntentMutation,
  useCreateOrderMutation,
  useCreateWishlisttMutation,
  useLazyGetUserWishlistQuery,
  useUpdateUserWishlistMutation,
} = api;

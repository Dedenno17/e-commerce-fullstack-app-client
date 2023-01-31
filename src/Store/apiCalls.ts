import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Register, Login, User } from '../Types';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['Register', 'Login'],
  endpoints: (build) => ({
    register: build.mutation<Register, Partial<Register>>({
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
  }),
});

export const { useRegisterMutation, useLoginMutation } = api;

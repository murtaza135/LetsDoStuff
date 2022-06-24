import { apiSlice } from 'features/api/api.slice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    getProfile: builder.query({
      query: () => '/auth/profile'
    })
  })
});

export const { useLoginMutation, useGetProfileQuery } = authApiSlice;

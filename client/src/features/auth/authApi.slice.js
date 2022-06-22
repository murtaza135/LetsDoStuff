import { apiSlice } from 'features/api/api.slice';

export const authApiSlice = apiSlice.injectEndpoints({
  endponts: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),
  })
});

export const { useLoginMutation } = authApiSlice;

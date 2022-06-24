import { apiSlice } from 'features/api/api.slice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    getProfile: builder.query({
      query: () => '/auth/profile'
    }),
    updateProfile: builder.mutation({
      query: (credentials) => ({
        url: '/auth/profile',
        method: 'PUT',
        body: { ...credentials }
      })
    }),
    updatePassword: builder.mutation({
      query: (credentials) => ({
        url: '/auth/profile/password',
        method: 'PUT',
        body: { ...credentials }
      })
    }),
    deleteProfile: builder.mutation({
      query: () => ({
        url: '/auth/profile',
        method: 'DELETE'
      })
    }),
  })
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdatePasswordMutation,
  useDeleteProfileMutation
} = authApiSlice;

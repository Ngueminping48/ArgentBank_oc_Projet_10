import { PROFIL_URL } from '../constants/constants';
import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: PROFIL_URL,
        method: 'POST',
        body: data,
      }),
    }),

    getProfil: builder.query({
      query: () => ({
        url: PROFIL_URL,
      }),
      keepUnusedDataFor: 5,
    }),

    updateProfil: builder.mutation({
      query: (data) => ({
        url: PROFIL_URL,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useGetProfilQuery,
  useUpdateProfilMutation,
} = userApiSlice;

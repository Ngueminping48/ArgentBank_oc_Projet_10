import { PERSONEL_URL } from '../constants/constants';
import { apiSlice } from './apiSlice';

export const chargeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPersonalsCharges: builder.query({
      query: ({ selectedMonth = '' }) => ({
        url: `${PERSONEL_URL}/charge`,
        params: { selectedMonth },
      }),

      keepUnusedDataFor: 5,
    }),

    AddPersonelCharges: builder.mutation({
      query: (data) => ({
        url: PERSONEL_URL + '/charge',
        method: 'POST',
        body: data,
      }),
    }),

    eddictPersonelCharges: builder.mutation({
      query: (data) => ({
        url: PERSONEL_URL + '/charge' + '/' + data.id,
        method: 'PUT',
        body: data,
      }),
    }),

    removePersonelCharges: builder.mutation({
      query: (id) => ({
        url: PERSONEL_URL + '/charge' + '/' + id,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetPersonalsChargesQuery,
  useAddPersonelChargesMutation,
  useEddictPersonelChargesMutation,
  useRemovePersonelChargesMutation,
} = chargeApiSlice;

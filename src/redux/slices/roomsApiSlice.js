import { ROOMS_URL } from '../constants/constants';
import { apiSlice } from './apiSlice';

export const roomsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => ({
        url: ROOMS_URL,
      }),
      keepUnusedDataFor: 5,
    }),

    getAdminRooms: builder.query({
      query: ({
        startDate = '',
        endDate = '',
        roomType = '',
        title = '',
        page = 1,
      }) => ({
        url: ROOMS_URL + '/admin',
        params: { startDate, endDate, roomType, title, page },
      }),
    }),

    getStats: builder.query({
      query: () => ({
        url: ROOMS_URL + `/stats/`,
      }),
      keepUnusedDataFor: 5,
    }),

    getRoomDetails: builder.query({
      query: (id) => ({
        url: ROOMS_URL + '/' + id,
      }),
      keepUnusedDataFor: 5,
    }),

    searchRooms: builder.query({
      query: ({ checkInDate = '', checkOutDate = '' }) => ({
        url: ROOMS_URL + '/search',
        params: { checkInDate, checkOutDate },
      }),
    }),

    createRoom: builder.mutation({
      query: (data) => ({
        url: ROOMS_URL,
        method: 'POST',
        body: data,
      }),
    }),

    eddictRoom: builder.mutation({
      query: (data) => ({
        url: ROOMS_URL + '/' + data.id,
        method: 'PUT',
        body: data,
      }),
    }),

    removeRoom: builder.mutation({
      query: (id) => ({
        url: ROOMS_URL + '/' + id,
        method: 'DELETE',
      }),
    }),

    addRoomReview: builder.mutation({
      query: (data) => ({
        url: ROOMS_URL + '/' + 'reveiw',
        method: 'PUT',
        body: data,
      }),
    }),

    favorite: builder.mutation({
      query: (data) => ({
        url: ROOMS_URL + '/' + 'favarite',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useSearchRoomsQuery,
  useGetAdminRoomsQuery,
  useGetStatsQuery,
  useGetRoomDetailsQuery,
  useCreateRoomMutation,
  useEddictRoomMutation,
  useRemoveRoomMutation,
  useFavoriteMutation,
  useAddRoomReviewMutation,
} = roomsApiSlice;

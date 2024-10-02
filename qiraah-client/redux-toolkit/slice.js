import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://qiraah-backend.vercel.app",
    credentials: 'include',
  }),
  tagTypes: ["Playlist"],
  endpoints: (builder) => ({
    upload: builder.mutation({
      query: (formData) => ({
        url: '/audio/upload',
        method: 'POST',
        body: formData,
        formData: true,
      }),
      invalidatesTags: ["Playlist"]
    }),
    singleAudio: builder.mutation({
      query: (id) => ({
        url: `/audio/singleAudio`,
        method: 'POST',
        body:{id}
      }),
      transformResponse: (playlist) => playlist.data,
      providesTags: ["Playlist"]
    }),
    playlist: builder.query({
      query: () => ({
        url: '/audio/playlist',
        method: 'GET',
      }),
      transformResponse: (playlist) => playlist.data,
      providesTags: ["Playlist"]
    })
  })
});

export const { useUploadMutation,useSingleAudioMutation,usePlaylistQuery } = api;

export default api;

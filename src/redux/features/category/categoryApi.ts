/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "../../../constant/tagType.constant";
import { ErrorToast } from "../../../helper/ValidationHelper";
import { apiSlice } from "../api/apiSlice";




export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "/dashboard/all-category",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.categories],
      async onQueryStarted(_arg, { queryFulfilled}) {
        try {
          await queryFulfilled;  
        } catch (err:any) {
         ErrorToast("Server error is occured");
        }
      },
    }),
  }),
});


export const { useGetCategoriesQuery } = categoryApi;
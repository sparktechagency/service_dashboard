/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import TagTypes from "../../../constant/tagType.constant";
import { ErrorToast, SuccessToast } from "../../../helper/ValidationHelper";
import { apiSlice } from "../api/apiSlice";

export const subscriptionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubscriptions: builder.query({
      query: () => ({
        url: "/dashboard//get_all_subscriptions",
        method: "GET",
      }),
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.packges],
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err: any) {
          ErrorToast("Server error is occured");
        }
      },
    }),
    createSubscription: builder.mutation({
      query: (data) => ({
        url: "/dashboard/create_subscriptions",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.packges];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Category is created successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    updateSubscription: builder.mutation({
      query: ({id, data }) => ({
        url: `/dashboard/update_subscriptions/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.packges];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Category is updated successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
    deleteSubscription: builder.mutation({
      query: (id) => ({
        url: `/dashboard/delete_subscriptions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.packges];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Category is deleted successfully");
        } catch (err: any) {
          const message = err?.error?.data?.message;
          ErrorToast(message);
        }
      },
    }),
  }),
});

export const { useGetSubscriptionsQuery, useCreateSubscriptionMutation, useDeleteSubscriptionMutation, useUpdateSubscriptionMutation } = subscriptionApi;

import { baseApi } from "../../state/rootQuery"

import { UserType } from "./types"

export const usersApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<UserType[], null>({
      query: () => ({
        url: `/users`,
      }),
    }),
  }),
})

export const { useGetUsersQuery, useLazyGetUsersQuery } = usersApi

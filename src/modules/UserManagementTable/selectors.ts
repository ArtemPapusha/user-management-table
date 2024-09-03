import { createSelector } from "reselect"

import type { RootState } from "@state/store"

import { usersApi } from "./query"
import { reducerName } from "./slice"

const getUsersSelector = usersApi.endpoints.getUsers.select(null)

export const dataSelector = (state: RootState) => state[reducerName]

export const querySelector = (state: RootState) => getUsersSelector(state)

export const usersDataSelector = createSelector(
  querySelector,
  data => data.data
)

export const isSearchNameSelector = createSelector(
  dataSelector,
  data => data.isSearchName
)
export const isSearchUserNameSelector = createSelector(
  dataSelector,
  data => data.isSearchUserName
)
export const isSearchEmailSelector = createSelector(
  dataSelector,
  data => data.isSearchEmail
)
export const isSearchPhoneSelector = createSelector(
  dataSelector,
  data => data.isSearchPhone
)

export const searchNameSelector = createSelector(
  dataSelector,
  data => data.searchName
)
export const searchUserNameSelector = createSelector(
  dataSelector,
  data => data.searchUserName
)
export const searchEmailSelector = createSelector(
  dataSelector,
  data => data.searchEmail
)
export const searchPhoneSelector = createSelector(
  dataSelector,
  data => data.searchPhone
)

export const usersFilteredByNameSelectors = createSelector(
  usersDataSelector,
  searchNameSelector,
  (data, name) =>
    data?.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
)

export const usersFilteredByUserNameSelectors = createSelector(
  usersFilteredByNameSelectors,
  searchUserNameSelector,
  (data, userName) =>
    data?.filter(user =>
      user.username.toLowerCase().includes(userName.toLowerCase())
    )
)

export const usersFilteredByEmailSelectors = createSelector(
  usersFilteredByUserNameSelectors,
  searchEmailSelector,
  (data, email) =>
    data?.filter(user => user.email.toLowerCase().includes(email.toLowerCase()))
)

export const usersFilteredByPhoneSelectors = createSelector(
  usersFilteredByEmailSelectors,
  searchPhoneSelector,
  (data, phone) => data?.filter(user => user.phone.includes(phone))
)

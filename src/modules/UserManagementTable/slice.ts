import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface InitialState {
  isSearchName: boolean
  isSearchUserName: boolean
  isSearchEmail: boolean
  isSearchPhone: boolean
  searchName: string
  searchUserName: string
  searchEmail: string
  searchPhone: string
}

export const initialState: InitialState = {
  isSearchName: false,
  isSearchUserName: false,
  isSearchEmail: false,
  isSearchPhone: false,
  searchName: "",
  searchUserName: "",
  searchEmail: "",
  searchPhone: "",
}

const userManagementSlice = createSlice({
  name: "userManagement",
  initialState,
  reducers: {
    /** @group Set changes in the search input */
    setSearchName: (
      state,
      actions: PayloadAction<InitialState["searchName"]>
    ) => {
      state.searchName = actions.payload
    },
    setSearchUserName: (
      state,
      actions: PayloadAction<InitialState["searchUserName"]>
    ) => {
      state.searchUserName = actions.payload
    },
    setSearchEmail: (
      state,
      actions: PayloadAction<InitialState["searchEmail"]>
    ) => {
      state.searchEmail = actions.payload
    },
    setSearchPhone: (
      state,
      actions: PayloadAction<InitialState["searchPhone"]>
    ) => {
      state.searchPhone = actions.payload
    },

    /** @group Clearing the search input */
    clearSearchName: state => {
      state.searchName = ""
    },
    clearSearchUserName: state => {
      state.searchUserName = ""
    },
    clearSearchEmail: state => {
      state.searchEmail = ""
    },
    clearSearchPhone: state => {
      state.searchPhone = ""
    },
    clearAllSearch: state => {
      state.searchName = ""
      state.searchUserName = ""
      state.searchEmail = ""
      state.searchPhone = ""
    },

    /** @group Toggle the visibility of the search input. */
    toggleShowSearchName: state => {
      state.isSearchName = !state.isSearchName
    },
    toggleShowSearchUserName: state => {
      state.isSearchUserName = !state.isSearchUserName
    },
    toggleShowSearchEmail: state => {
      state.isSearchEmail = !state.isSearchEmail
    },
    toggleShowSearchPhone: state => {
      state.isSearchPhone = !state.isSearchPhone
    },
  },
})

export const reducerName = userManagementSlice.name

export const reducer = userManagementSlice.reducer

export const actions = {
  ...userManagementSlice.actions,
}

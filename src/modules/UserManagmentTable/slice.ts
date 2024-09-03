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

const userManagmentSlice = createSlice({
  name: "userManagment",
  initialState,
  reducers: {
    setSearchName: (state, actions: PayloadAction<string>) => {
      state.searchName = actions.payload
    },
    setSearchUserName: (state, actions: PayloadAction<string>) => {
      state.searchUserName = actions.payload
    },
    setSearchEmail: (state, actions: PayloadAction<string>) => {
      state.searchEmail = actions.payload
    },
    setSearchPhone: (state, actions: PayloadAction<string>) => {
      state.searchPhone = actions.payload
    },

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

export const reducerName = userManagmentSlice.name

export const reducer = userManagmentSlice.reducer

export const actions = {
  ...userManagmentSlice.actions,
}

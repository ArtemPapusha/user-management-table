import { configureStore } from "@reduxjs/toolkit"

import {
  userManagmentReducerName,
  userManagmentReducer,
} from "../modules/UserManagmentTable"

import { baseApi } from "./rootQuery"

const store = configureStore({
  devTools: true,
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [userManagmentReducerName]: userManagmentReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export default store

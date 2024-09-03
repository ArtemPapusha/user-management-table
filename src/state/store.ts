import { configureStore } from "@reduxjs/toolkit"

import { baseApi } from "./rootQuery"
import reducer from "./rootReducer"

const store = configureStore({
  devTools: true,
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export default store

import { combineReducers } from "@reduxjs/toolkit"

import {
  userManagementReducerName,
  userManagementReducer,
} from "@modules/UserManagementTable"

import { baseApi } from "./rootQuery"

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [userManagementReducerName]: userManagementReducer,
})

export default rootReducer

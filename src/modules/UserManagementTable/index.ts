export { default } from "./component"

export {
  actions as userManagementActions,
  reducer as userManagementReducer,
  reducerName as userManagementReducerName,
} from "./slice"

export * as userManagementSelectors from "./selectors"
export { default as userManagementTableEn } from "./locales/en"

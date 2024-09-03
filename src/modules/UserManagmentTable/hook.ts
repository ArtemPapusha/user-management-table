import { useSelector, useDispatch } from "react-redux"
import { usersFilteredByPhoneSelectors } from "./selectors"
import { actions } from "./slice"

const useContainer = () => {
  const dispatch = useDispatch()

  const users = useSelector(usersFilteredByPhoneSelectors)

  const handleClearSearches = () => {
    dispatch(actions.clearSearchName())
    dispatch(actions.clearSearchUserName())
    dispatch(actions.clearSearchEmail())
    dispatch(actions.clearSearchPhone())
  }

  return {
    users: users?.map(user => {
      return {
        ...user,
        key: user.id,
      }
    }),

    handleClearSearches,
  }
}

export default useContainer

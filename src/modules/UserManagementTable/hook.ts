import { useCallback, useMemo } from "react"

import { useSelector, useDispatch } from "react-redux"

import {
  userManagementSelectors,
  userManagementActions,
} from "@modules/UserManagementTable"

const useContainer = () => {
  const dispatch = useDispatch()

  const usersFilteredByPhone = useSelector(
    userManagementSelectors.usersFilteredByPhoneSelectors
  )

  const handleClearSearches = useCallback(() => {
    dispatch(userManagementActions.clearAllSearch())
  }, [dispatch])

  const users = useMemo(
    () =>
      usersFilteredByPhone?.map(user => {
        return {
          ...user,
          key: user.id,
        }
      }),
    [usersFilteredByPhone]
  )

  return {
    users,

    handleClearSearches,
  }
}

export default useContainer

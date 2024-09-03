import { useCallback } from "react"

import { useDispatch, useSelector } from "react-redux"

import {
  userManagementSelectors,
  userManagementActions,
} from "@modules/UserManagementTable"

const useContainer = () => {
  const dispatch = useDispatch()

  const isSearchUserName = useSelector(
    userManagementSelectors.isSearchUserNameSelector
  )
  const searchUserName = useSelector(
    userManagementSelectors.searchUserNameSelector
  )

  const handleSearchUserName: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      e => {
        dispatch(userManagementActions.setSearchUserName(e.target.value))
      },
      [dispatch]
    )

  const toggleShowSearchUserName: React.MouseEventHandler = useCallback(() => {
    dispatch(userManagementActions.toggleShowSearchUserName())
  }, [dispatch])

  const handleClearSearchUserName: React.MouseEventHandler = useCallback(() => {
    dispatch(userManagementActions.clearSearchUserName())
  }, [dispatch])

  return {
    isSearchUserName,
    searchUserName,

    handleSearchUserName,
    toggleShowSearchUserName,
    handleClearSearchUserName,
  }
}

export default useContainer

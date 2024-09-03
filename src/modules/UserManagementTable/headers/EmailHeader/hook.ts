import { useCallback } from "react"

import { useDispatch, useSelector } from "react-redux"

import {
  userManagementSelectors,
  userManagementActions,
} from "@modules/UserManagementTable"

const useContainer = () => {
  const dispatch = useDispatch()

  const isSearchEmail = useSelector(
    userManagementSelectors.isSearchEmailSelector
  )
  const searchEmail = useSelector(userManagementSelectors.searchEmailSelector)

  const handleSearchEmail: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      e => {
        dispatch(userManagementActions.setSearchEmail(e.target.value))
      },
      [dispatch]
    )

  const toggleShowSearchEmail: React.MouseEventHandler = useCallback(() => {
    dispatch(userManagementActions.toggleShowSearchEmail())
  }, [dispatch])

  const handleClearSearchEmail: React.MouseEventHandler = useCallback(() => {
    dispatch(userManagementActions.clearSearchEmail())
  }, [dispatch])

  return {
    isSearchEmail,
    searchEmail,

    handleSearchEmail,
    toggleShowSearchEmail,
    handleClearSearchEmail,
  }
}

export default useContainer

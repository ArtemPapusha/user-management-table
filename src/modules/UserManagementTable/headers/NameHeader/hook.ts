import { useCallback } from "react"

import { useDispatch, useSelector } from "react-redux"

import {
  userManagementSelectors,
  userManagementActions,
} from "@modules/UserManagementTable"

const useContainer = () => {
  const dispatch = useDispatch()

  const isSearchName = useSelector(userManagementSelectors.isSearchNameSelector)
  const searchName = useSelector(userManagementSelectors.searchNameSelector)

  const handleSearchName: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      e => {
        dispatch(userManagementActions.setSearchName(e.target.value))
      },
      [dispatch]
    )

  const toggleShowSearchName: React.MouseEventHandler = useCallback(() => {
    dispatch(userManagementActions.toggleShowSearchName())
  }, [dispatch])

  const handleClearSearchName: React.MouseEventHandler = useCallback(() => {
    dispatch(userManagementActions.clearSearchName())
  }, [dispatch])

  return {
    isSearchName,
    searchName,

    handleSearchName,
    toggleShowSearchName,
    handleClearSearchName,
  }
}

export default useContainer

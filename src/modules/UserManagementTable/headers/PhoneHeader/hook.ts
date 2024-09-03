import { useCallback } from "react"

import { useDispatch, useSelector } from "react-redux"

import {
  userManagementSelectors,
  userManagementActions,
} from "@modules/UserManagementTable"

const useContainer = () => {
  const dispatch = useDispatch()

  const isSearchPhone = useSelector(
    userManagementSelectors.isSearchPhoneSelector
  )
  const searchPhone = useSelector(userManagementSelectors.searchPhoneSelector)

  const handleSearchPhone: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      e => {
        dispatch(userManagementActions.setSearchPhone(e.target.value))
      },
      [dispatch]
    )

  const toggleShowSearchPhone: React.MouseEventHandler = useCallback(() => {
    dispatch(userManagementActions.toggleShowSearchPhone())
  }, [dispatch])

  const handleClearSearchPhone: React.MouseEventHandler = useCallback(() => {
    dispatch(userManagementActions.clearSearchPhone())
  }, [dispatch])

  return {
    isSearchPhone,
    searchPhone,

    handleSearchPhone,
    toggleShowSearchPhone,
    handleClearSearchPhone,
  }
}

export default useContainer

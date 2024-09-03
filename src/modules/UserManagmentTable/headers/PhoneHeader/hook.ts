import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../slice"
import { isSearchPhoneSelector, searchPhoneSelector } from "../../selectors"

const useContainer = () => {
  const dispatch = useDispatch()

  const isSearchPhone = useSelector(isSearchPhoneSelector)
  const searchPhone = useSelector(searchPhoneSelector)

  const handleSearchPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setSearchPhone(e.target.value))
  }

  const toggleShowSearchPhone = () => {
    dispatch(actions.toggleShowSearchPhone())
  }

  const handleClearSearchPhone = () => {
    dispatch(actions.clearSearchPhone())
  }

  return {
    isSearchPhone,
    searchPhone,

    handleSearchPhone,
    toggleShowSearchPhone,
    handleClearSearchPhone,
  }
}

export default useContainer

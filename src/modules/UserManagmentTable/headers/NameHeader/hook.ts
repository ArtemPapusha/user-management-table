import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../slice"
import { isSearchNameSelector, searchNameSelector } from "../../selectors"

const useContainer = () => {
  const dispatch = useDispatch()

  const isSearchName = useSelector(isSearchNameSelector)
  const searchName = useSelector(searchNameSelector)

  const handleSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setSearchName(e.target.value))
  }

  const toggleShowSearchName = () => {
    dispatch(actions.toggleShowSearchName())
  }

  const handleClearSearchName = () => {
    dispatch(actions.clearSearchName())
  }

  return {
    isSearchName,
    searchName,

    handleSearchName,
    toggleShowSearchName,
    handleClearSearchName,
  }
}

export default useContainer

import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../slice"
import {
  isSearchUserNameSelector,
  searchUserNameSelector,
} from "../../selectors"

const useContainer = () => {
  const dispatch = useDispatch()

  const isSearchUserName = useSelector(isSearchUserNameSelector)
  const searchUserName = useSelector(searchUserNameSelector)

  const handleSearchUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setSearchUserName(e.target.value))
  }

  const toggleShowSearchUserName = () => {
    dispatch(actions.toggleShowSearchUserName())
  }

  const handleClearSearchUserName = () => {
    dispatch(actions.clearSearchUserName())
  }

  return {
    isSearchUserName,
    searchUserName,

    handleSearchUserName,
    toggleShowSearchUserName,
    handleClearSearchUserName,
  }
}

export default useContainer

import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../slice"
import { isSearchEmailSelector, searchEmailSelector } from "../../selectors"

const useContainer = () => {
  const dispatch = useDispatch()

  const isSearchEmail = useSelector(isSearchEmailSelector)
  const searchEmail = useSelector(searchEmailSelector)

  const handleSearchEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setSearchEmail(e.target.value))
  }

  const toggleShowSearcрEmail = () => {
    dispatch(actions.toggleShowSearchEmail())
  }

  const handleClearSearchEmail = () => {
    dispatch(actions.clearSearchEmail())
  }

  return {
    isSearchEmail,
    searchEmail,

    handleSearchEmail,
    toggleShowSearcрEmail,
    handleClearSearchEmail,
  }
}

export default useContainer

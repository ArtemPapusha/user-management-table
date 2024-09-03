import type React from "react"
import useContainer from "./hook"
import HeaderTable from "../../../../components/HeaderTable"

const UserNameHeader: React.FC = () => {
  const {
    isSearchUserName,
    searchUserName,

    handleSearchUserName,
    toggleShowSearchUserName,
    handleClearSearchUserName,
  } = useContainer()

  return (
    <HeaderTable
      text="Username"
      isSearch={isSearchUserName}
      searchValue={searchUserName}
      handleSearch={handleSearchUserName}
      toggleShowSearch={toggleShowSearchUserName}
      handleClearSearch={handleClearSearchUserName}
    />
  )
}

export default UserNameHeader

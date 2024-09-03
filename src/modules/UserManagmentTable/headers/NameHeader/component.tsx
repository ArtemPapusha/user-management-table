import type React from "react"
import useContainer from "./hook"
import HeaderTable from "../../../../components/HeaderTable"

const NameHeader: React.FC = () => {
  const {
    isSearchName,
    searchName,

    handleSearchName,
    toggleShowSearchName,
    handleClearSearchName,
  } = useContainer()

  return (
    <HeaderTable
      text="Name"
      isSearch={isSearchName}
      searchValue={searchName}
      handleSearch={handleSearchName}
      toggleShowSearch={toggleShowSearchName}
      handleClearSearch={handleClearSearchName}
    />
  )
}

export default NameHeader

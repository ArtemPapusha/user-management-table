import type React from "react"

import HeaderTable from "@components/HeaderTable"

import useContainer from "./hook"

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
      text={{ id: "user.management.table.header.title.name" }}
      isSearch={isSearchName}
      searchValue={searchName}
      onSearch={handleSearchName}
      toggleShowSearch={toggleShowSearchName}
      onClearSearch={handleClearSearchName}
    />
  )
}

export default NameHeader

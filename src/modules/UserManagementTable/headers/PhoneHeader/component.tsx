import type React from "react"

import HeaderTable from "@components/HeaderTable"

import useContainer from "./hook"

const PhoneHeader: React.FC = () => {
  const {
    isSearchPhone,
    searchPhone,

    handleSearchPhone,
    toggleShowSearchPhone,
    handleClearSearchPhone,
  } = useContainer()

  return (
    <HeaderTable
      text={{ id: "user.management.table.header.title.phone" }}
      isSearch={isSearchPhone}
      searchValue={searchPhone}
      onSearch={handleSearchPhone}
      toggleShowSearch={toggleShowSearchPhone}
      onClearSearch={handleClearSearchPhone}
    />
  )
}

export default PhoneHeader

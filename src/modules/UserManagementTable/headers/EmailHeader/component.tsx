import type React from "react"

import HeaderTable from "@components/HeaderTable"

import useContainer from "./hook"

const EmailHeader: React.FC = () => {
  const {
    isSearchEmail,
    searchEmail,

    handleSearchEmail,
    toggleShowSearchEmail,
    handleClearSearchEmail,
  } = useContainer()

  return (
    <HeaderTable
      text={{ id: "user.management.table.header.title.email" }}
      isSearch={isSearchEmail}
      searchValue={searchEmail}
      onSearch={handleSearchEmail}
      toggleShowSearch={toggleShowSearchEmail}
      onClearSearch={handleClearSearchEmail}
    />
  )
}

export default EmailHeader

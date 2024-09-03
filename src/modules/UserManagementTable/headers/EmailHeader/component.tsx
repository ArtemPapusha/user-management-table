import type React from "react"

import HeaderTable from "@components/HeaderTable"

import useContainer from "./hook"

/**
 * EmailHeader component provides a header for the email column in the user management table with search functionality.
 *
 * @returns The EmailHeader component.
 * @component
 */
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

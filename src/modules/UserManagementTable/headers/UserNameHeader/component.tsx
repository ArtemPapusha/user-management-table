import type React from "react"

import HeaderTable from "@components/HeaderTable"

import useContainer from "./hook"

/**
 * UserNameHeader component provides a header for the username column in the user management table with search functionality.
 *
 * @returns The UserNameHeader component.
 * @component
 */
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
      text={{ id: "user.management.table.header.title.username" }}
      isSearch={isSearchUserName}
      searchValue={searchUserName}
      onSearch={handleSearchUserName}
      toggleShowSearch={toggleShowSearchUserName}
      onClearSearch={handleClearSearchUserName}
    />
  )
}

export default UserNameHeader

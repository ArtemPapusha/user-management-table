import type React from "react"

import HeaderTable from "@components/HeaderTable"

import useContainer from "./hook"

/**
 * PhoneHeader component provides a header for the phone column in the user management table with search functionality.
 *
 * @returns The PhoneHeader component.
 * @component
 */
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

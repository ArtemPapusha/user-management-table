import type React from "react"

import useContainer from "./hook"
import HeaderTable from "../../../../components/HeaderTable"

const EmailHeader: React.FC = () => {
  const {
    isSearchEmail,
    searchEmail,

    handleSearchEmail,
    toggleShowSearcрEmail,
    handleClearSearchEmail,
  } = useContainer()

  return (
    <HeaderTable
      text="Email"
      isSearch={isSearchEmail}
      searchValue={searchEmail}
      handleSearch={handleSearchEmail}
      toggleShowSearch={toggleShowSearcрEmail}
      handleClearSearch={handleClearSearchEmail}
    />
  )
}

export default EmailHeader

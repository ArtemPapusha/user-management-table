import type React from "react"

import useContainer from "./hook"
import HeaderTable from "../../../../components/HeaderTable"

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
      text="Phone"
      isSearch={isSearchPhone}
      searchValue={searchPhone}
      handleSearch={handleSearchPhone}
      toggleShowSearch={toggleShowSearchPhone}
      handleClearSearch={handleClearSearchPhone}
    />
  )
}

export default PhoneHeader

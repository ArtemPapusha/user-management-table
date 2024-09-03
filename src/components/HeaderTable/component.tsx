import type React from "react"
import { Typography, Button } from "antd"
import SearchInput from "../SearchInput"
import { SearchOutlined } from "@ant-design/icons"
import { HeaderTableProps } from "./types"

const { Text } = Typography

const HeaderTable: React.FC<HeaderTableProps> = ({
  text,
  isSearch,
  searchValue,

  handleSearch,
  toggleShowSearch,
  handleClearSearch,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Text style={{ minWidth: "max-content", marginRight: "0.5rem" }}>
        {text}
      </Text>

      {isSearch && (
        <SearchInput
          value={searchValue}
          onChange={handleSearch}
          onHideSearch={toggleShowSearch}
          onClear={handleClearSearch}
        />
      )}

      {!isSearch && (
        <Button icon={<SearchOutlined />} onClick={toggleShowSearch} />
      )}
    </div>
  )
}

export default HeaderTable

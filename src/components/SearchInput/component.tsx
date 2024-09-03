import type React from "react"

import type { SearchInputProps } from "./types"
import { Input, Button } from "antd"
import { CloseOutlined } from "@ant-design/icons"
import useContainer from "./hook"

const SearchInput: React.FC<SearchInputProps> = ({
  value,

  onChange,
  onHideSearch,
  onClear,
}) => {
  const { inputRef } = useContainer(value)

  return (
    <Input
      ref={inputRef}
      suffix={
        <>
          <Button onClick={onClear} style={{ padding: "4px" }}>
            clear
          </Button>
          
          <CloseOutlined onClick={onHideSearch} />
        </>
      }
      onChange={onChange}
      value={value}
    />
  )
}

export default SearchInput

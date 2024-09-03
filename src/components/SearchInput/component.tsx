import type React from "react"

import type { SearchInputProps } from "./types"
import { Input } from "antd"
import { CloseOutlined, UndoOutlined } from "@ant-design/icons"
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
          <UndoOutlined onClick={onClear} />
          <CloseOutlined onClick={onHideSearch} />
        </>
      }
      onChange={onChange}
      value={value}
    />
  )
}

export default SearchInput

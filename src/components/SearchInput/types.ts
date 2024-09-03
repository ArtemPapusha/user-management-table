import type React from "react"

export interface SearchInputProps {
  value: string

  onChange: React.ChangeEventHandler
  onHideSearch: React.MouseEventHandler
  onClear: React.MouseEventHandler
}

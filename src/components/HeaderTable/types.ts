import type React from "react"

import type { IntlMessage } from "@type/app"

export interface HeaderTableProps {
  text: string | IntlMessage
  isSearch: boolean
  searchValue: string

  onSearch: React.ChangeEventHandler
  toggleShowSearch: React.MouseEventHandler
  onClearSearch: React.MouseEventHandler
}

import type React from "react"

import { Empty, Button } from "antd"
import { FormattedMessage } from "react-intl"

import type { TableEmptyStateProps } from "./types"

const TableEmptyState: React.FC<TableEmptyStateProps> = ({ onClear }) => {
  return (
    <Empty
      description={<FormattedMessage id="user.management.table.empty.text" />}
    >
      <Button onClick={onClear}>
        <FormattedMessage id="user.management.table.empty.button.reset" />
      </Button>
    </Empty>
  )
}

export default TableEmptyState

import type React from "react"

import { Empty, Button } from "antd"
import { FormattedMessage } from "react-intl"

import type { TableEmptyStateProps } from "./types"

/**
 * TableEmptyState component displays a custom empty state with a reset button for tables.
 *
 * @param props - The props for the TableEmptyState component.
 * @param props.onClear - Function to handle clearing or resetting the table data.
 * @returns The TableEmptyState component.
 * @component
 */
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

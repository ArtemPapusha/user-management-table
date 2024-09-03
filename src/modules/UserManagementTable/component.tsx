import type React from "react"

import { LoadingOutlined } from "@ant-design/icons"
import { Table, Spin, Flex } from "antd"

import { columns } from "./columns"
import useContainer from "./hook"
import { useGetUsersQuery } from "./query"
import styles from "./styles.module.scss"
import TableEmptyState from "./TableEmptyState"

/**
 * UserManagementTable component displays a table of users with loading and empty state handling.
 *
 * @returns The UserManagementTable component.
 * @component
 */
const UserManagementTable: React.FC = () => {
  const {
    users,

    handleClearSearches,
  } = useContainer()
  const { isLoading } = useGetUsersQuery(null)

  if (isLoading) {
    return (
      <Flex align="center" justify="center" className={styles.container}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 72 }} spin />} />
      </Flex>
    )
  }

  return (
    <Flex justify="center" className={styles.container}>
      <Table
        dataSource={users}
        columns={columns}
        pagination={false}
        className={styles.table}
        locale={{
          emptyText: <TableEmptyState onClear={handleClearSearches} />,
        }}
      />
    </Flex>
  )
}

export default UserManagementTable

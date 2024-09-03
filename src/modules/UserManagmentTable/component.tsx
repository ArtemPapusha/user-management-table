import type React from "react"

import { Table, Spin, Flex, Empty, Button } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

import { useGetUsersQuery } from "./query"
import useContainer from "./hook"
import { columns } from "./columns"

const UserManagmentTable: React.FC = () => {
  const {
    users,

    handleClearSearches,
  } = useContainer()
  const { isLoading } = useGetUsersQuery(null)

  if (isLoading) {
    return (
      <Flex align="center" justify="center" style={{ width: "100vw" }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 72 }} spin />} />
      </Flex>
    )
  }

  return (
    <Flex
      align="center"
      justify="center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Table
        dataSource={users}
        columns={columns}
        pagination={false}
        style={{ width: "100%", height: "100%" }}
        locale={{
          emptyText: (
            <Empty description="No Data">
              <Button onClick={handleClearSearches}>
                Reset the search filter
              </Button>
            </Empty>
          ),
        }}
      />
    </Flex>
  )
}

export default UserManagmentTable

import type { TableColumnsType } from "antd"

import { COLUMN_WIDTH } from "./constants"
import EmailHeader from "./headers/EmailHeader"
import NameHeader from "./headers/NameHeader"
import PhoneHeader from "./headers/PhoneHeader"
import UserNameHeader from "./headers/UserNameHeader"
import type { UserType } from "./types"

export const columns: TableColumnsType<UserType> = [
  {
    title: <NameHeader />,
    dataIndex: "name",
    key: "name",
    width: COLUMN_WIDTH,
  },
  {
    title: <UserNameHeader />,
    dataIndex: "username",
    key: "username",
    width: COLUMN_WIDTH,
  },
  {
    title: <EmailHeader />,
    dataIndex: "email",
    key: "email",
    width: COLUMN_WIDTH,
  },
  {
    title: <PhoneHeader />,
    dataIndex: "phone",
    key: "phone",
    width: COLUMN_WIDTH,
  },
]

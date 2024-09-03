import { TableColumnsType } from "antd"
import { UserType } from "./types"
import NameHeader from "./headers/NameHeader"
import UserNameHeader from "./headers/UserNameHeader"
import EmailHeader from "./headers/EmailHeader"
import PhoneHeader from "./headers/PhoneHeader"

export const columns: TableColumnsType<UserType> = [
  {
    title: <NameHeader />,
    dataIndex: "name",
    key: "name",
    width: 400,
  },
  {
    title: <UserNameHeader />,
    dataIndex: "username",
    key: "username",
    width: 400,
  },
  {
    title: <EmailHeader />,
    dataIndex: "email",
    key: "email",
    width: 400,
  },
  {
    title: <PhoneHeader />,
    dataIndex: "phone",
    key: "phone",
    width: 400,
  },
]

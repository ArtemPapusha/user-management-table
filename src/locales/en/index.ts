import { userManagementTableEn } from "@modules/UserManagementTable"

import shared from "./shared"

export default {
  locale: "en" as const,
  messages: { ...shared, ...userManagementTableEn },
}

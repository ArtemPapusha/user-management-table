import type React from "react"

import { SearchOutlined } from "@ant-design/icons"
import { Typography, Button, Flex } from "antd"
import { FormattedMessage } from "react-intl"

import SearchInput from "../SearchInput"

import styles from "./styles.module.scss"
import type { HeaderTableProps } from "./types"

const { Text } = Typography

/**
 * HeaderTable component provides a customizable table header with optional search functionality.
 *
 * @param props - The props for the HeaderTable component.
 * @param props.text - The title text for the header, can be a string or an internationalized message object.
 * @param props.isSearch - A flag indicating if the search input is visible.
 * @param props.searchValue - The current value of the search input.
 * @param props.onSearch - Function to handle changes in the search input.
 * @param props.toggleShowSearch - Function to toggle the visibility of the search input.
 * @param props.onClearSearch - Function to handle clearing the search input.
 * @returns The HeaderTable component.
 * @component
 */
const HeaderTable: React.FC<HeaderTableProps> = ({
  text,
  isSearch,
  searchValue,

  onSearch,
  toggleShowSearch,
  onClearSearch,
}) => {
  return (
    <Flex align="center">
      <Text className={styles.headerTableTitle}>
        {typeof text === "string" ? text : <FormattedMessage {...text} />}
      </Text>

      {isSearch && (
        <SearchInput
          value={searchValue}
          onChange={onSearch}
          onHideSearch={toggleShowSearch}
          onClear={onClearSearch}
        />
      )}

      {!isSearch && (
        <Button icon={<SearchOutlined />} onClick={toggleShowSearch} />
      )}
    </Flex>
  )
}

export default HeaderTable

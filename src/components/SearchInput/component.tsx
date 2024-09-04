import type React from "react"

import { Input } from "antd"

import InputController from "@components/InputController"

import useContainer from "./hook"
import styles from "./styles.module.scss"
import type { SearchInputProps } from "./types"

/**
 * SearchInput component is an input field with additional features such as clearing and hiding the search.
 *
 * @param props - The props for the SearchInput component.
 * @param props.value - The value of the input field.
 * @param props.onChange - Function to handle the change in the input field.
 * @param props.onHideSearch - Function to handle hiding the search input.
 * @param props.onClear - Function to handle clearing the input field.
 * @returns The SearchInput component with additional controls.
 * @component
 */
const SearchInput: React.FC<SearchInputProps> = ({
  value,

  onChange,
  onHideSearch,
  onClear,
}) => {
  const { inputRef } = useContainer(value)

  return (
    <Input
      ref={inputRef}
      suffix={<InputController onClear={onClear} onHideSearch={onHideSearch} />}
      onChange={onChange}
      value={value}
      className={styles.inputWrapper}
    />
  )
}

export default SearchInput

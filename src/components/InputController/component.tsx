import type React from "react"

import { Button } from "antd"
import { FormattedMessage } from "react-intl"

import styles from "./styles.module.scss"
import type { InputControllerProps } from "./types"

/**
 * InputController component provides buttons to clear the input field and hide the search input.
 *
 * @param props - The props for the InputController component.
 * @param props.onClear - Function to handle clearing the input field.
 * @param props.onHideSearch - Function to handle hiding the search input.
 * @returns The InputController component with action buttons.
 * @component
 */
const InputController: React.FC<InputControllerProps> = ({
  onClear,
  onHideSearch,
}) => {
  return (
    <>
      <Button onClick={onClear} className={styles.inputCloseButton}>
        <FormattedMessage id="shared.button.clear" />
      </Button>

      <Button onClick={onHideSearch} className={styles.inputCloseButton}>
        <FormattedMessage id="shared.button.close" />
      </Button>
    </>
  )
}

export default InputController

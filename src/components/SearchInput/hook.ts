import { useEffect, useRef } from "react"

import type { InputRef } from "antd"

const useContainer = (value: string) => {
  const inputRef = useRef<InputRef>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [value])

  return { inputRef }
}

export default useContainer

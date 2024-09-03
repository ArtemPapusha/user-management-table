import { InputRef } from "antd"
import { useEffect, useRef } from "react"

const useContainer = (value: string) => {
  const inputRef = useRef<InputRef>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [value])

  return { inputRef }
}

export default useContainer

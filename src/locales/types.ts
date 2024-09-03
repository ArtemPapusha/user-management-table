import type { ElementType, ReactElement, ReactNode } from "react"

import type { MessageDescriptor } from "react-intl"

export interface IntlMessage<
  V extends Record<string, unknown> = Record<string, ReactNode>,
> extends MessageDescriptor {
  values?: V
  tagName?: ElementType
  children?(nodes: Iterable<ReactNode>): ReactElement | null
}

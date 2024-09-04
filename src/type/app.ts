import type { ReactNode, ReactElement, ElementType } from "react"

import type { MessageDescriptor } from "@formatjs/intl"
import type { Options } from "intl-messageformat"

import type locales from "@locales/en"

export type LocaleMessages = keyof typeof locales.messages

export interface IntlMessage<
  V extends Record<string, unknown> = Record<string, ReactNode>,
> extends MessageDescriptor {
  values?: V
  tagName?: ElementType
  children?(nodes: Iterable<ReactNode>): ReactElement | null
  ignoreTag?: Options["ignoreTag"]
}

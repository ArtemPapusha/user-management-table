import type { LocaleMessages } from "@type/app"

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: LocaleMessages
    }
  }
}

export {}

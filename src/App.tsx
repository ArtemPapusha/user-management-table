import type React from "react"
import { StrictMode } from "react"

import { IntlProvider } from "react-intl"
import { Provider } from "react-redux"

import locales from "@locales/en"
import UserManagement from "@pages/UserManagement"
import store from "@state/store"

const App: React.FC = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <IntlProvider {...locales}>
          <UserManagement />
        </IntlProvider>
      </Provider>
    </StrictMode>
  )
}

export default App

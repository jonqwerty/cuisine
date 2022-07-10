import * as React from "react"
import { Provider } from "react-redux"
import AppNavigation from "./src/navigation/AppNavigation"
import store from "./src/redux/redux-store"

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App

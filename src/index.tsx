import "./index.css"

import { BrowserRouter } from "react-router-dom"
import { Main } from "./Main"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"
import { store } from "./Store"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Main></Main>
    </Provider>
  </BrowserRouter>
)

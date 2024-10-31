import "./index.css"

import { BrowserRouter } from "react-router-dom"
import { Store } from "./Store"
import { createRoot } from "react-dom/client"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Store></Store>
  </BrowserRouter>
)

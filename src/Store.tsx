import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import {
  productReducer,
  productsReducer,
  userReducer,
  usersReducer,
} from "./reducers"

import { thunk } from "redux-thunk"

const reducer = combineReducers({
  user: userReducer,
  users: userReducer,
  product: productReducer,
  products: productsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

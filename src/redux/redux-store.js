import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from "redux-thunk"

import mainReducer from "./mainReducer"

let reducers = combineReducers({
  main: mainReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

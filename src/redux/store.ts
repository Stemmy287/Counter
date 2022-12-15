import {combineReducers, createStore} from "redux";
import {valueReducer} from "./valueReducer";

export type AppReduxStore = ReturnType<typeof reducers>

const reducers = combineReducers({
    valueState: valueReducer
})

export const store = createStore(reducers)
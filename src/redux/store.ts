import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {valueReducer} from "./valueReducer";
import thunk from 'redux-thunk'
import {loadState, saveState} from "../utils/localStorageUtils";

export type AppReduxStore = ReturnType<typeof reducers>

const reducers = combineReducers({
    valueState: valueReducer
})

export const store = legacy_createStore(reducers, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState(store.getState())
})
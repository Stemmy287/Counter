import {AppReduxStore} from "../redux/store";

export const saveState = (state: AppReduxStore) => {
    localStorage.setItem('state', JSON.stringify(state))
}

export const loadState = () => {
    const allLocalStorageState = localStorage.getItem('state')
    if (allLocalStorageState) {
        return JSON.parse(allLocalStorageState)
    }
}
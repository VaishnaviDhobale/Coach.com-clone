import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import {reducer as womensReducer} from "./womens/reducer"


let rootReducer = combineReducers({
    womensReducer,
})

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))
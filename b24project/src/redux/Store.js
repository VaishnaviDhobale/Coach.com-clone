import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import {reducer as womensReducer} from "./womens/reducer"
import {reducer as mensReducer} from "./mens/reducer"


let rootReducer = combineReducers({
    womensReducer,
    mensReducer
})

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk))
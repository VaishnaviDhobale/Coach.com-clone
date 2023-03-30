import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import {reducer as womensReducer} from "./womens/reducer"
import {reducer as mensReducer} from "./mens/reducer"
import {reducer as ordersReducer} from "./Orders/reducer"


let rootReducer = combineReducers({
    womensReducer,

    mensReducer

    ordersReducer,
})

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
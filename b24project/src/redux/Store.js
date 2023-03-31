
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import {reducer as womensReducer} from "./womens/reducer"
import {reducer as mensReducer} from "./mens/reducer"
import {reducer as ordersReducer} from "./Orders/reducer"
import {reducer as cartReducer} from "./carts/reducer"


let rootReducer = combineReducers({
    womensReducer,
    mensReducer,
    ordersReducer,
    cartReducer,
})


export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));

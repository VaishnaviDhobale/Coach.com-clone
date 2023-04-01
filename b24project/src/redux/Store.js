import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as womensReducer } from "./womens/reducer";
import { reducer as mensReducer } from "./mens/reducer";
import { reducer as ordersReducer } from "./Orders/reducer";
import { reducer as productsReducer } from "./products/reducer";

let rootReducer = combineReducers({
  womensReducer,
  productsReducer,
  mensReducer,

  ordersReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));

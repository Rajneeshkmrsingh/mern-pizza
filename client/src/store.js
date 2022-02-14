import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { getAllPizzasReducer,addPizzaReducer,getPizzaByIdReducer,updatePizzaReducer } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducer";
import { userRegisterReducer,userLoginReducer,getAllUsersReducer } from "./reducers/userReducer";
import { placeOrderReducer,getOrderReducer,getAllOrderReducer,orderDeliverReducer } from "./reducers/orderReducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  userRegisterReducer: userRegisterReducer,
  userLoginReducer:userLoginReducer,
  placeOrderReducer:placeOrderReducer,
  getOrderReducer:getOrderReducer,
  addPizzaReducer:addPizzaReducer,
  getPizzaByIdReducer:getPizzaByIdReducer,
  updatePizzaReducer:updatePizzaReducer,
  getAllOrderReducer:getAllOrderReducer,
  orderDeliverReducer:orderDeliverReducer,
  getAllUsersReducer:getAllUsersReducer

});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")):null;
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  userLoginReducer:{
    currentUser:currentUser
  }
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;

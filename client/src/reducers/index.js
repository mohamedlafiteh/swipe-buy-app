import { combineReducers } from "redux";
import products from "./productsReducers";
import user from "./usersReducers";
import cart from "./cartReducer";

export default combineReducers({ products, user, cart });

import { combineReducers } from "redux";
import products from "./productsReducers";
import user from "./usersReducers";

export default combineReducers({ products, user });

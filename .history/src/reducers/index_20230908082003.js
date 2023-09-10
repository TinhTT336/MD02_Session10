import { combineReducers } from "redux";
import { listProduct } from "./listProduct";
import { listCart } from "./listCard";

export const reducer = combineReducers({ listProduct, listCart });

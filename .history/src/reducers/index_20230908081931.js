import { combineReducers } from "redux";
import { listProduct } from "./listProduct";
import { listCard } from "./listCard";

export const reducer = combineReducers({ listProduct, listCard });

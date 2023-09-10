import { ACT_ADD_CART, ACT_DECREASE } from "../contrains/actionTypes";

export const act_add = (product) => {
  return {
    type: ACT_ADD_CART,
    payload: product,
  };
};

export const act_decrease = (id) => {
  return {
    type: ACT_DECREASE,
    payload: id,
  };
};

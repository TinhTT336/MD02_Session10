import { ACT_ADD_CART } from "../contrains/actionTypes";

export const act_add = (product) => {
  return {
    type: ACT_ADD_CART,
    payload: product,
  };
};

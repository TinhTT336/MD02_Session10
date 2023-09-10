import { ACT_REGISTER } from "../contrains/actionTypes";

export const act_register = (user) => {
  return {
    type: ACT_REGISTER,
    payload: user,
  };
};

import { ACT_LOGIN, ACT_REGISTER } from "../contrains/actionTypes";

export const act_register = (user) => {
  return {
    type: ACT_REGISTER,
    payload: user,
  };
};

export const act_login = (user) => {
  return {
    type: ACT_LOGIN,
    payload: user,
  };
};

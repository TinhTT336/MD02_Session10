import { ACT_REGISTER } from "../contrains/actionTypes";

const initialState = JSON.parse(localStorage.getItem("listUser")) || [];

export const listUser = (state = initialState, action) => {
  switch (action.type) {
    case ACT_REGISTER:
      //   clone du lieu ra mang moi
      const newUser = [...state];
      console.log(action.payload);
      newUser.push(action.payload);
      return newUser;
    default:
      return state;
  }
};

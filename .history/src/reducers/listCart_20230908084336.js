const initialState = JSON.parse(localStorage.getItem("cards")) || [];
export const listCart = (state = initialState, action) => {
  switch (action.type) {
    case "ACT_ADD_CART":
      break;

    default:
      break;
  }
};

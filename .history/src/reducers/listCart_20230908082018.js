const initialState = JSON.parse(localStorage.getItem("cards")) || [];
export const listCart = (state = initialState, action) => {
  return state;
};

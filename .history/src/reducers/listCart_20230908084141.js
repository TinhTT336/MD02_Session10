const initialState = JSON.parse(localStorage.getItem("cards")) || [];
export const listCart = (state = initialState, action) => {
  console.log(action);
  return state;
};

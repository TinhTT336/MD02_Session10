const initialState = JSON.parse(localStorage.getItem("cards")) || [];
export const listCard = (state = initialState, action) => {
  return state;
};

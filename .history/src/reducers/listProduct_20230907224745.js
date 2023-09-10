import products from "../data/products.json";
export const listProduct = (state = products, action) => {
  console.log(state);
  return state;
};

const initialState = JSON.parse(localStorage.getItem("cards")) || [];

// ham lay ra vi tri cua product trong listProduct
const findIndexProduct = (id, arr) => {
  const productIndex = arr.findIndex((p) => p.product_id === id);
  return productIndex;
};
export const listCart = (state = initialState, action) => {
  switch (action.type) {
    case ACT_ADD_CART:
      //b1:clone mang cu
      const newCards = [...state];
      // b2: kiem tra san pham da ton tai torng gio hang chua?

      // neu da ton tai thi tang so luong
      // neu chua thi them vao gio hang
      // b3: luu giu lieu len local
      // b4: return mang moi
      break;

    default:
      break;
  }
};

const initialState = JSON.parse(localStorage.getItem("cards")) || [];

/**
 * ham lay ra vi tri cua product trong listProduct
 * @param {*} id id can kiem tra
 * @param {*} arr mang can kiem tra
 * @returns neu tim thay ban ghi thi tra ra vi tri, neu khong tra ra -1
 * Author: TinhTT(08/09/2023)
 */
const findIndexProduct = (id, arr) => {
  const productIndex = arr.findIndex((p) => p.product_id === id);
  return productIndex;
};
export const listCart = (state = initialState, action) => {
  switch (action.type) {
    case ACT_ADD_CART:
      //b1:clone mang cu
      const newCarts = [...state];
      // b2: kiem tra san pham da ton tai torng gio hang chua?
      if (findIndexProduct(action.payload.product_id, newCarts))
        // neu da ton tai thi tang so luong
        // neu chua thi them vao gio hang
        // b3: luu giu lieu len local
        // b4: return mang moi
        break;

    default:
      break;
  }
};

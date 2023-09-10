const initialState = JSON.parse(localStorage.getItem("carts")) || [];

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
      // vi tri can lay
      const indexProduct = findIndexProduct(action.payload.product_id, state);
      // b2: kiem tra san pham da ton tai torng gio hang chua?
      if (indexProduct !== -1) {
        //b1:clone mang cu
        const newCarts = [...state];
        // neu da ton tai thi tang so luong
        newCarts[indexProduct].quantity += 1;
        // b3: luu giu lieu len local
        localStorage.setItem("carts", JSON.stringify(newCarts));
        // b4: return mang moi
        return newCarts;
      } else {
        // neu chua thi them vao gio hang
        const newAddCarts = [...state, { ...action.payload, quantity: 1 }];
      }
      break;

    default:
      break;
  }
};

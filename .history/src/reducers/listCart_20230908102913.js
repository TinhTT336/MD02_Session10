import {
  ACT_ADD_CART,
  ACT_DECREASE,
  ACT_DELETE,
  ACT_INCREASE,
} from "../contrains/actionTypes";

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
      //b1:clone mang cu
      const newCarts = [...state];
      // vi tri can lay
      const indexProduct = findIndexProduct(
        action.payload.product_id,
        newCarts
      );
      // b2: kiem tra san pham da ton tai torng gio hang chua?
      if (indexProduct !== -1) {
        // neu da ton tai thi tang so luong
        newCarts[indexProduct].quantity += 1;
        // b3: luu giu lieu len local
        localStorage.setItem("carts", JSON.stringify(newCarts));
        // b4: return mang moi
        return newCarts;
      } else {
        // neu chua thi them vao gio hang
        const newAddCarts = [...state, { ...action.payload, quantity: 1 }];
        // b3: luu giu lieu len local
        localStorage.setItem("carts", JSON.stringify(newAddCarts));
        // b4: return mang moi
        return newAddCarts;
      }
    case ACT_DECREASE:
      // clone ra mang moi
      const newArr = [...state];
      // tim vi tri san pham
      const indexProductDecrease = findIndexProduct(action.payload, newArr);
      // neu so luong sp lon hon 0 thi giam di
      if (newArr[indexProductDecrease].quantity > 1) {
        newArr[indexProductDecrease].quantity -= 1;
        localStorage.setItem("carts", JSON.stringify(newArr));
        return newArr;
      } else {
        // neu so luong bang 0 thi clear khoi gio hang
        newArr.splice(indexProductDecrease, 1);
        localStorage.setItem("carts", JSON.stringify(newArr));
        return newArr;
      }
    case ACT_INCREASE:
      // tim vi tri san pham
      const indexProductIncrease = findIndexProduct(action.payload, state);
      // clone ra mang moi
      const newArrIncrease = [...state];
      newArrIncrease[indexProductIncrease].quantity += 1;
      localStorage.setItem("carts", JSON.stringify(newArrIncrease));
      return newArrIncrease;
    case ACT_DELETE:
      // clone ra mang moi
      const newArrDelete = [...state];
      // loc ra cac san pham co id khac voi id cua sp can xoa
      const newArrAfterDelete = newArrDelete.filter(
        (p) => p.product_id !== action.payload
      );
      // luu giu lieu len local
      localStorage.setItem("carts", JSON.stringify(newArrAfterDelete));
      // return mang moi
      return newArrAfterDelete;
    default:
      return state;
  }
};

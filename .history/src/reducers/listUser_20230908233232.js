import { notification } from "antd";
import { ACT_LOGIN, ACT_REGISTER } from "../contrains/actionTypes";

const initialState = JSON.parse(localStorage.getItem("listUser")) || [];

export const listUser = (state = initialState, action) => {
  switch (action.type) {
    case ACT_REGISTER:
      //   clone du lieu ra mang moi
      const newUser = [...state];

      //   validate form dang ky
      //   kiem tra userName khong duoc de trong
      if (action.payload.userName == "") {
        notification.warning({
          message: "Vui lòng nhập tên đăng nhập",
          //   description: "Vui lòng nhập tên",
          //   placement: "bottomRight"
        });
        return;
      } else {
        //   kiem tra xem ten dang nhap da ton tai chua
        const userNameChecking = newUser.find(
          (user) => user.userName === action.payload.userName
        );
        if (userNameChecking) {
          notification.warning({
            message: "Tên đăng nhập đã tồn tại",
            //   description: "Tên đăng nhập đã tồn tại",
          });
          return;
        }
      }

      //   kiem tra email khong duoc de trong
      if (action.payload.email === "") {
        notification.warning({
          message: "Vui lòng nhập email",
          //   description: "Vui lòng nhập email",
        });
        return;
      } else if (
        //   kiem tra email co dung dinh dang khong
        !action.payload.email.match(
          /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        )
      ) {
        notification.warning({
          message: "Email không đúng định dạng",
          //   description: "Email không đúng định dạng",
        });
        return;
        //   kiem tra xem email da ton tai chua
      } else if (newUser.find((user) => user.email == action.payload.email)) {
        notification.warning({
          message: "Email đã tồn tại",
          //   description: "Email đã tồn tại",
        });
        return;
      }

      //   kiem tra password khong duoc de trong
      if (action.payload.password === "") {
        notification.warning({
          message: "Vui lòng nhập password",
          //   description: "Vui lòng nhập password",
        });
        return;
      } else if (
        //   kiem tra mat khau co dung dinh dang khong (toi thieu 6 ky tu, it nhat 1 chu cai, 1 so)
        !action.payload.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
      ) {
        notification.warning({
          message: "Password không đúng định dạng",
          description: "Password tối thiểu 6 ký tự, ít nhất 1 chữ cái và 1 số",
        });
        return;
      }
      //   them thong tin dang nhap hop le vao mang
      newUser.push(action.payload);
      //   luu du lieu len local
      localStorage.setItem("listUser", JSON.stringify(newUser));
      //   return mang moi
      return newUser;
    case ACT_LOGIN:
      //   clone du lieu ra mang moi
      const newUserLogin = [...state];
      //   kiem tra tinh hop le cua thong tin dang nhap
      //   kiem tra email khong duoc de trong
      if (action.payload.email === "") {
        notification.warning({
          message: "Vui lòng nhập email",
          //   description: "Vui lòng nhập email",
        });
        return;
      } else {
        //   kiem tra xem email da duoc dang ky chua
        const indexEmail = newUserLogin.findIndex(
          (user) => user.email == action.payload.email
        );
        if (indexEmail == -1) {
          notification.warning({
            message: "Email chưa đăng ký",
          });
          return;
        }
      }
      //   kiem tra password khong duoc de trong
      if (password === "") {
        notification.warning({
          message: "Vui lòng nhập password",
        });
        return;
      } else {
        //   kiem tra password co khop khong
        if (newUserLogin[indexEmail].password != action.payload.password) {
          notification.warning({
            message: "Password không đúng",
          });
          return;
        }
      }

    default:
      return state;
  }
};

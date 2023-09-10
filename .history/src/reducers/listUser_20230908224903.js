import { notification } from "antd";
import { ACT_REGISTER } from "../contrains/actionTypes";

const initialState = JSON.parse(localStorage.getItem("listUser")) || [];

export const listUser = (state = initialState, action) => {
  switch (action.type) {
    case ACT_REGISTER:
      //   clone du lieu ra mang moi
      const newUser = [...state];
      console.log(action.payload);
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
          } else if (!(action.payload.email).match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
              notification.warning({
                  message: "Email không đúng định dạng",
                  //   description: "Email không đúng định dạng",
                  
              });
              return;
          }
              
          }
    const isEmail
      newUser.push(action.payload);
      return newUser;
    default:
      return state;
  }
};

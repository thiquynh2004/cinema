

import { quanLyNguoiDungService } from "../service/QuanLyNguoiDungService";
import { openNotificationWithIcon } from "../types/notificationMovie";
import { DANG_NHAP_ACTION } from "./types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {

  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        openNotificationWithIcon("success", "Login successfully");
        // history.push("/home")
      } else {
        openNotificationWithIcon("error", "Login failed");
      }
      console.log(result);
    } catch (error) {
      console.log("error", error.response?.data);
      openNotificationWithIcon(
        "error",
        "Login failed",
        error.response?.data.content
      );
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);
            console.log(result);
            if(result.status === 200){
                openNotificationWithIcon("success", "Sign up is successful")
            }
            else{
                openNotificationWithIcon("error", "Sign up is error")
            }
        } catch (error) {
            console.log("error", error.response?.data);
            openNotificationWithIcon("error", "Sign up failed", error.response?.data.content)
        }
    }
}
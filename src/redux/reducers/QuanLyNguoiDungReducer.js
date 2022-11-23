import { TOKEN, USER_LOGIN } from "../../utils/config";
import { DANG_NHAP_ACTION } from "../actions/types/QuanLyNguoiDungType";
let user = {}
    if(localStorage.getItem(USER_LOGIN)){
        user = JSON.parse(localStorage.getItem(USER_LOGIN));
    
}
  const initialState = {
    userLogin: user
  };
  
  export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
      case DANG_NHAP_ACTION:
        const {thongTinDangNhap} = action;
        localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
        localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
        // state.arrHeThongRap = action.arrHeThongRap;
        return { ...state, userLogin:thongTinDangNhap };
     
      default:
        return { ...state };
    }
  };
  
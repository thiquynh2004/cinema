// import { quanLyPhimService } from "../../service/QuanLyPhimService"
import { quanLyPhimService } from "../service/QuanLyPhimService";
import {
  LAY_DANH_SACH_BANNER,
  LAY_DANH_SACH_PHIM,
  LAY_THONG_TIN_PHIM,
} from "./types/QuanLyPhimType";

export const layDanhSachBannerAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachBanner();
      dispatch({
        type: LAY_DANH_SACH_BANNER,
        arrBanner: result.data.content,
      });
      console.log(result);
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const layDanhSachPhimAction = (tenPhim='') => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim(tenPhim);
      dispatch({
        type: LAY_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
      console.log("result", result);
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const layThongTinPhimAction = (MaPhim) => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layThongTinPhim(MaPhim);
      console.log("result", result);
      if (result.status === 200) {
        dispatch({
          type: LAY_THONG_TIN_PHIM,
          filmDetail: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

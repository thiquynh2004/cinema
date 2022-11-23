import { quanLyRapService } from "../../service/QuanLyRapService";
import { LAY_THONG_TIN_PHIM } from "./types/QuanLyPhimType";
import {
  LAY_THONG_TIN_CUM_RAP_THEO_HE_THONG,
  LAY_THONG_TIN_HE_THONG_RAP,
} from "./types/QuanLyRapType";

// export const layThongTinHeThongRapAction = () => {
//   return async (dispatch) => {
//     try {
//       const result = await quanLyRapService.layThongTinHeThongRap();
//       dispatch({
//         type: LAY_THONG_TIN_HE_THONG_RAP,
//         arrHeThongRap: result.data.content,
//       });
//       console.log("result", result);
//     } catch (error) {
//       console.log("error", error.response?.data);
//     }
//   };
// };

export const layThongTinCumRapTheoHeThongAction = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinCumRapTheoHeThong(
        maHeThongRap
      );
      console.log("result", result);
      if (result.status === 200) {
        dispatch({
          type: LAY_THONG_TIN_CUM_RAP_THEO_HE_THONG,
          arrCumRap: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const layThongTinLichChieuHeThongRapAction = (maHeThongRap="") => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinLichChieuHeThongRap(maHeThongRap);
      console.log("result", result);
      if(result.status === 200){
        dispatch({
            type: LAY_THONG_TIN_HE_THONG_RAP,
            arrHeThongRap: result.data.content
        })
      }
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const layThongTinPhimAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layThongTinPhim(id);
      console.log(result)
      if(result.status === 200){
        dispatch({
          type: LAY_THONG_TIN_PHIM,
          filmDetail: result.data.content
        })
      }
    } catch (error) {
      console.log("error", error.response?.data);
    }
  }
}
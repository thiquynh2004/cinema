import {
  LAY_THONG_TIN_CUM_RAP_THEO_HE_THONG,
  LAY_THONG_TIN_HE_THONG_RAP,
} from "../actions/types/QuanLyRapType";

const initialState = {
  arrHeThongRap: [],
  arrCumRap: [],
};

export const QuanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_THONG_TIN_HE_THONG_RAP:
      state.arrHeThongRap = action.arrHeThongRap;
      return { ...state };
    case LAY_THONG_TIN_CUM_RAP_THEO_HE_THONG:
      state.arrCumRap = action.arrCumRap;
      return { ...state };
    default:
      return { ...state };
  }
};

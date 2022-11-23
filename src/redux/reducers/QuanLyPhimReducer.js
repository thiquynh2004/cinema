import {
  LAY_DANH_SACH_BANNER,
  LAY_DANH_SACH_DANG_CHIEU,
  LAY_DANH_SACH_PHIM,
  LAY_DANH_SACH_SAP_CHIEU,
  LAY_THONG_TIN_PHIM,
} from "../actions/types/QuanLyPhimType";

const initialState = {
  arrBanner: [],
  arrFilm: [
    {
      maPhim: 1333,
      tenPhim: "Trainwreckk",
      biDanh: "trainwreckk",
      trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/trainwreckk_gp05.jpg",
      moTa: "<p>Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.</p>",
      maNhom: "GP05",
      ngayKhoiChieu: "2021-01-11T00:00:00",
      danhGia: 10,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
  ],
  arrDefault: [],
  filmDetail: {},
  dangChieu: false,
  sapChieu: false,
};

export const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_BANNER:
      state.arrBanner = action.arrBanner; 
      return { ...state };
    case LAY_DANH_SACH_PHIM:
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;

      return { ...state };
    case LAY_DANH_SACH_DANG_CHIEU:
      // state.dangChieu == stat;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    case LAY_DANH_SACH_SAP_CHIEU:
      // state.sapChieu = !state.sapChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    case LAY_THONG_TIN_PHIM:
      state.filmDetail = action.filmDetail;
      return { ...state };
    default:
      return { ...state };
  }
};

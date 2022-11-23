import {configureStore} from "@reduxjs/toolkit";
import { LoadingReducer } from "../reducers/LoadingReducer";
import { QuanLyNguoiDungReducer } from "../reducers/QuanLyNguoiDungReducer";
import { QuanLyPhimReducer } from "../reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "../reducers/QuanLyRapReducer";

const store = configureStore({
    reducer: {
        LoadingReducer,
        QuanLyPhimReducer,
        QuanLyRapReducer,
        QuanLyNguoiDungReducer
    }
})
export default store;
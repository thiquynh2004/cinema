/* eslint-disable no-useless-constructor */
// import { GROUP_ID } from "../utils/config";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService  extends baseService {
    constructor(){
        super();
    }
    dangNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    }
    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy)
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
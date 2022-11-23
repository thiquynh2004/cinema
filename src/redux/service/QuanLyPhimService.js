/* eslint-disable no-useless-constructor */
// import { GROUP_ID } from "../utils/config";
import { GROUP_ID } from "../../utils/config";
import { baseService } from "./baseService";

export class QuanLyPhimService  extends baseService {
    constructor(){
        super();
    }
    layDanhSachBanner = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }
    layDanhSachPhim = (tenPhim='') => {
        if(tenPhim.trim() !==''){
            return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID
            }&tenPhim=${tenPhim}`)
          }
          return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID
          }`)
    }
    layThongTinPhim = (MaPhim) => {
        return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${MaPhim}`)
    }
}

export const quanLyPhimService = new QuanLyPhimService();
/* eslint-disable no-useless-constructor */
import { GROUP_ID } from "../utils/config";
import { baseService } from "./baseService";

export class QuanLyRapService  extends baseService {
    constructor(){
        super();
    }
    layThongTinHeThongRap = () => {
        return this.get(`api/QuanLyRap/LayThongTinHeThongRap`)
    }
    layThongTinCumRapTheoHeThong = (maHeThongRap) => {
        return this.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }
    layThongTinLichChieuHeThongRap = (maHeThongRap) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${GROUP_ID}`)
    }
    layThongTinPhim = (MaPhim) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${MaPhim}`)
    }
}
export const quanLyRapService = new QuanLyRapService();
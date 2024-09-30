import { Phim } from "../@types";
import { apiInstance } from "../constants";

const api = apiInstance.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim",
});

export const quanLyPhimServices = {
  // sử dụng query để truyền động vào, không để cố định là maNhom hay maPhim ...
  getDanhSachPhim: (query = "") =>
    api.get<HttpResponse<Phim[]>>(`/LayDanhSachPhim${query}`),
  getPhimDetailById: (query = "") =>
    api.get<HttpResponse<Phim>>(`/LayThongTinPhim${query}`),
  // ${query} cho truyền động vào , có thể tái sử dụng khi có thể truyền thêm dữ liệu khác ngoài ID mã phim
};

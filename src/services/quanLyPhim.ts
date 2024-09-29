import { Banner, Phim } from '../@types'
import { apiInstance } from '../constants'

const api = apiInstance.create({ baseURL: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim' })

export const quanLyPhimServices = {

    getDanhSachPhim: (query = '') => api.get<HttpResponse<Phim[]>>(`/LayDanhSachPhim${query}`),

    getPhimDetailById: (query = "") => {
        return api.get<HttpResponse<Phim>>(`/LayThongTinPhim${query}`);
      },
      deletePhim: (query = "") => {
        return api.delete<HttpResponse<Phim>>(`/XoaPhim${query}`);
      },
      layDanhSachBanner: () => {
        return api.get<HttpResponse<Banner>>(`/LayDanhSachBanner`);
      },
}

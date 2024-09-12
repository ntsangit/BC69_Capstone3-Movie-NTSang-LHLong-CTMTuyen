import { ThongTinLichChieu } from '../@types'
import { apiInstance } from '../constants'

const api = apiInstance.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api/QuanLyRap',
})

export const quanLyRap = {
    getShowtimesById: (query = '') =>
        api.get<HttpResponse<ThongTinLichChieu>>(
            `/LayThongTinLichChieuPhim${query}`
        ),
}

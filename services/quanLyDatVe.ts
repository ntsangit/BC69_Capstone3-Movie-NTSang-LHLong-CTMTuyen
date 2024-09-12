import { DanhSachPhongVe } from '../@types'
import { apiInstance } from '../constants'

const api = apiInstance.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api/QuanLyDatVe',
})
export const quanLyDatVe = {
    layDanhSachPhongVe: (query = '') =>
        api.get<HttpResponse<DanhSachPhongVe>>(`LayDanhSachPhongVe${query}`),
}

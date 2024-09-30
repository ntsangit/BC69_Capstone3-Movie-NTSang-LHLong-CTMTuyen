
import { ThongTinLichChieu } from "../@types"
import { apiInstance } from "../constants"
import { useGetShowtimesById } from "../hooks/api"


const api = apiInstance.create({
    // truyền vào base url đối với những url giống nhau nhưng chỉ khác phần đuôi, để tối ưu code,
    baseURL: 'https://movienew.cybersoft.edu.vn/api/QuanLyRap',
})

export const quanLyRap =  {
    getShowTimesById: (query = "") =>
        api.get<HttpResponse<ThongTinLichChieu>>(`/LayThongTinLichChieuPhim${query}`),
  
}

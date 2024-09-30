import { LoginSchemaType, RegisterSchemaType } from '../schemas'
import { apiInstance } from '../constants'
import { LoginAPIResponse, RegisterAPIResponse } from '../@types'

const api = apiInstance.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung',
})

export const quanLyNguoiDungServices = {
    // dangKy: (payload: any) => {
    //     return axios.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy', payload, {
    //         headers: {
    //             TokenCybersoft:
    //                 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODI4MTYwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NDI5MjAwfQ.bsAaudu2iAsJe1QzbsWWy0HG7ofC_8rFKL-MG_jW1ig',
    //         },
    //     })
    // },
    // dangNhap: (payload: any) => {
    //     return axios.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy', payload, {
    //         headers: {
    //             TokenCybersoft:
    //                 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODI4MTYwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NDI5MjAwfQ.bsAaudu2iAsJe1QzbsWWy0HG7ofC_8rFKL-MG_jW1ig',
    //         },
    //     })
    // },

    dangKy: (payload: RegisterSchemaType) =>
        api.post<HttpResponse<RegisterAPIResponse>>('/DangKy', payload),

    dangNhap: (payload: LoginSchemaType) =>
        api.post<HttpResponse<LoginAPIResponse>>('/DangNhap', payload),
}


import { LoginAPIResponse, RegisterAPIResponse } from "../@types"
import { apiInstance } from "../constants"
import { LoginSchemaType, registerSchemaType } from "../schemas"

const api = apiInstance.create({
    // truyền vào base url đối với những url giống nhau nhưng chỉ khác phần đuôi, để tối ưu code,
    baseURL: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung',
})

export const quanLyNguoiDungServices = {
    // dangKy: (payload: any) => {
    //     return axios.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy', payload,{
    //         headers:{
    //             TokenCyberSoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODI4MTYwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NDI5MjAwfQ.bsAaudu2iAsJe1QzbsWWy0HG7ofC_8rFKL-MG_jW1ig',
    //         }
    //     })
    // },
    // dangNhap: (payload: any) => {
    //     return axios.post('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap', payload,{
    //         headers:{
    //             TokenCyberSoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODI4MTYwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NDI5MjAwfQ.bsAaudu2iAsJe1QzbsWWy0HG7ofC_8rFKL-MG_jW1ig',
    //         }
    //     })
    // }

    // chỉ cần thêm /dangKy hoặc /DangNhap là có đường dẫn api tương ứng
    // truyền generic <> để cho phép định nghĩa lại kiểu dữ liệu trả về trong content
    dangKy: (payload: registerSchemaType) =>
        api.post<HttpResponse<RegisterAPIResponse>>('/DangKy', payload),

    dangNhap: (payload: LoginSchemaType) =>
        api.post<HttpResponse<LoginAPIResponse>>('/DangNhap', payload),
}



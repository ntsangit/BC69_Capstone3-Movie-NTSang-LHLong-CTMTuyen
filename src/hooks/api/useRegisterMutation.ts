import { useMutation } from "@tanstack/react-query"
import { registerSchemaType } from "../../schemas"
import { sleep } from "../../utils"
import { quanLyNguoiDungServices } from "../../services/quanLyNguoiDung"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { PATH } from "../../constants"

/**
 * @param a: string, b: number
 * @returns registerMutation
 * @description thực hiện đăng kí user
 */


export const useRegisterMutation = () => {
    const navigate = useNavigate()
    const registerMutation = useMutation({
        mutationKey: ['Register'],
        mutationFn: async (payload: registerSchemaType)=> {
          await sleep(2000)
          quanLyNguoiDungServices.dangKy(payload)
        } ,
        onSuccess:()=> {
          //Hàm đc gọi khi API thành công
          toast.success('Đăng ký thành công')

          //chuyển user đến trang đăng nhập
          navigate(PATH.login)
        },
        onError: (errors: any) => {
          //hàm đc gọi khi API thất bại
          toast.error(errors?.response?.data?.content)
        }
      })
  return registerMutation
}

// rafc

import { useMutation } from '@tanstack/react-query'
import { RegisterSchemaType } from '../../schemas'
import { sleep } from '../../utils'
import { quanLyNguoiDungServices } from '../../services'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constants'

// JS docs để note document

/**
 * @param a: string, b: number
 * @returns registerMuatation
 * @description thực hiện đăng ký user
 */

export const useRegisterMutation = () => {
    const navigate = useNavigate()
    const registerMutation = useMutation({
        mutationKey: ['Register'],
        // mutationFn: (payload: RegisterSchemaType) => quanLyNguoiDungServices.dangKy(payload),
        mutationFn: async (payload: RegisterSchemaType) => {
            await sleep(2000)
            return quanLyNguoiDungServices.dangKy(payload)
        },
        onSuccess: () => {
            // Hàm đc gọi khi API thành công
            toast.success('Đăng ký thành công')

            // Chuyển user đến trang đăng nhập
            navigate(PATH.login)
        },
        onError: (err: any) => {
            //Hàm đc gọi khi API thất bại
            toast.error(err?.response?.data?.content)
        },
    })

    return registerMutation
}

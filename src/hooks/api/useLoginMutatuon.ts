import { useMutation } from '@tanstack/react-query'
import { LoginSchemaType } from '../../schemas'
import { useAppDispatch } from '../../store'
import { quanLyNguoiDungActions } from '../../store/quanLyNguoiDung'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { quanLyNguoiDungServices } from '../../services'

export const useLoginMutatuon = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loginMutation = useMutation({
        mutationFn: (payload: LoginSchemaType) => quanLyNguoiDungServices.dangNhap(payload),
        onSuccess: (data) => {
            // console.log('data: ', data.data.content)
            // Lưu thông tin đăng nhập của user vào redux
            dispatch(quanLyNguoiDungActions.setUser(data.data.content))

            // Điều hướng về trang chủ
            navigate('/')
        },
        onError: (err: any) => {
            console.log('err: ', err)
            toast.error(err.response.data.content)
        },
    })

    return loginMutation
}

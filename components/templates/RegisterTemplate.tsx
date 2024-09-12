// rafc

import { Button, Input } from 'antd'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema, RegisterSchemaType } from '../../schemas'
import { toast } from 'react-toastify'
// import { sleep } from '../../utils'
// import { quanLyNguoiDungServices } from '../../services'
// import { useState } from 'react'
// import { RootState } from '../../store'
// import { useDispatch, useSelector } from 'react-redux'

import { quanLyNguoiDungThunks, useQuanLyNguoiDungSelector } from '../../store/quanLyNguoiDung'
import { useAppDispatch } from '../../store'
import { useMutation, useQuery } from '@tanstack/react-query'
import { quanLyNguoiDungServices } from '../../services'
import { sleep } from '../../utils'
import { useRegisterMutation } from '../../hooks/api'

// useMutation: sử dụng khi thay đổi database (gọi API xóa, sửa, thêm mới)

export const RegisterTemplate = () => {
    // const [isLoading, setIsLoading] = useState(false)

    // const registerMutation = useMutation({
    //     mutationKey: ['Register'],
    //     // mutationFn: (payload: RegisterSchemaType) => quanLyNguoiDungServices.dangKy(payload),
    //     mutationFn: async (payload: RegisterSchemaType) => {
    //         await sleep(2000)
    //         return quanLyNguoiDungServices.dangKy(payload)
    //     },
    //     onSuccess: () => {
    //         // Hàm đc gọi khi API thành công
    //         toast.success('Đăng ký thành công')
    //     },
    //     onError: (err: any) => {
    //         //Hàm đc gọi khi API thất bại
    //         toast.error(err?.response?.data?.content)
    //     },
    // })

    const registerMutation = useRegisterMutation()

    // const deleteUserMutation = useMutation({
    //     mutationKey: ['Register'],
    //     mutationFn: (payload: RegisterSchemaType) => quanLyNguoiDungServices.delete(payload),
    // })

    // Tạo dispatch từ useAppdispatch
    const dispatch = useAppDispatch()

    // const { isLoadingRegister } = useSelector((state: RootState) => state.quanLyNguoiDungReducer)
    const { isLoadingRegister } = useQuanLyNguoiDungSelector()

    // RegisterSchemaType: Kiểu dữ liệu trả về của useForm
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RegisterSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(RegisterSchema),
    })

    console.log('errors: ', errors)

    // onSubmit chỉ đc gọi khi validation ko có errors
    const onSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
        // C1:
        // try {
        //     console.log(values)
        //     setIsLoading(true)
        //     await sleep(5000)
        //     // Gọi API đăng ký user
        //     await quanLyNguoiDungServices.dangKy(values)
        //     toast.success('Đăng ký thành công')
        // } catch (errors: any) {
        //     console.log('errors: ', errors)
        //     toast.error(errors?.response?.data?.content)
        // } finally {
        //     // Chạy sau khi gọi API xong
        //     // Luôn luôn chạy vào đây
        //     setIsLoading(false)
        // }
        // C2: Dùng redux
        // try {
        //     const result = await dispatch(quanLyNguoiDungThunks.dangKy(values)).unwrap()
        //     toast.success('Đăng ký thành công')
        // } catch (err: any) {
        //     toast.error(err?.response?.data?.content)
        // }

        // C3: react - query

        // try {
        //     //
        //     // registerMutation.mutate()
        //     await registerMutation.mutateAsync(values)
        //     toast.success('Đăng ký thành công')
        // } catch (err: any) {
        //     console.log('err: ', err)
        //     toast.error(err?.response?.data?.content)
        // }
        registerMutation.mutate(values)
    }

    return (
        <div>
            <h2 className="text-white text-36 font-700 mb-30">Đăng ký</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className="text-white text-16 mb-10">
                    Họ tên <span className="text-red-500">*</span>
                </p>
                <Controller
                    name="hoTen"
                    control={control}
                    render={({ field }) => <Input status={errors.hoTen && 'error'} {...field} />}
                />
                {errors.hoTen && <p className="text-red-500">{errors.hoTen.message}</p>}

                <p className="text-white text-16 mb-10">
                    Email <span className="text-red-500">*</span>
                </p>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                <p className="text-white text-16 mb-10">
                    Số điện thoại <span className="text-red-500">*</span>
                </p>
                <Controller
                    name="soDt"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.soDt && <p className="text-red-500">{errors.soDt.message}</p>}

                <p className="text-white text-16 mb-10">
                    Mã nhóm <span className="text-red-500">*</span>
                </p>
                <Controller
                    name="maNhom"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.maNhom && <p className="text-red-500">{errors.maNhom.message}</p>}

                <p className="text-white text-16 mb-10">
                    Tài khoản <span className="text-red-500">*</span>
                </p>
                <Controller
                    name="taiKhoan"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                />
                {errors.taiKhoan && <p className="text-red-500">{errors.taiKhoan.message}</p>}

                <p className="text-white text-16 mb-10">
                    Mật khẩu <span className="text-red-500">*</span>
                </p>
                <Controller
                    name="matKhau"
                    control={control}
                    render={({ field }) => <Input.Password {...field} />}
                />
                {errors.matKhau && <p className="text-red-500">{errors.matKhau.message}</p>}

                <Button
                    // loading={isLoadingRegister}
                    loading={registerMutation.isPending}
                    htmlType="submit"
                    type="primary"
                    danger
                    className="!w-full mt-30 !h-[50px]"
                >
                    Đăng Ký
                </Button>
            </form>
        </div>
    )
}

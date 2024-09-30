// rafc

import { Button, Input } from "antd";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from "../../schemas";
import { quanLyNguoiDungServices } from "../../services/quanLyNguoiDung";
import { toast } from "react-toastify";
import { useState } from "react";
import { sleep } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { quanLyNguoiDungThunks, useQuanLyNguoiDungSelector } from "../../store/quanLyNguoiDung";
import {useAppDispatch, type RootState} from '../../store'
import { useMutation } from "@tanstack/react-query";
import { useRegisterMutation } from "../../hooks/api";
// useMutation sử dụng khi thay đổi database (gọi API xóa sửa, thêm mới)

export const RegisterTemplate = () => {

  // const registerMutation = useMutation({
  //   mutationKey: ['Register'],
  //   mutationFn: async (payload: registerSchemaType)=> {
  //     await sleep(2000)
  //     quanLyNguoiDungServices.dangKy(payload)
  //   } ,
  //   onSuccess:()=> {
  //     //Hàm đc gọi khi API thành công
  //     toast.success('Đăng ký thành công')
  //   },
  //   onError: (errors: any) => {
  //     //hàm đc gọi khi API thất bại
  //     toast.error(errors?.response?.data?.content)
  //   }
  // })
  const registerMutation = useRegisterMutation()

  //Tạo dispatch từ useAppdispatch
  const dispatch = useAppDispatch()

    const [isLoading, setIsLoading] = useState(false)
    console.log("isLoading: ", isLoading);

    // const {isLoadingRegister} = useSelector((state: RootState) => state.quanLyNguoiDungReducer)
    const {isLoadingRegister}= useQuanLyNguoiDungSelector()
    // sử dụng hàm useSelector ở dạng file selector để gọi hàm nhanh cho những component khác, ko cần phải import RootState và useSelector cho mỗi lần gọi hàm

    // const dispatch = useDispatch<any>()

  // RegisterSchemaType: Kiểu dữ liệu trả về của useForm

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<registerSchemaType>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
    //resolver dùng để validation
  });

  console.log("errors: ", errors);




  //onSubmit chỉ đc gọi khi validation ko có errors
  const onSubmit: SubmitHandler<registerSchemaType> = async (values) => {
    // try {
    //     console.log(values)
    //     setIsLoading(true)
    //     // dùng setTimeout như dòng dưới để delay tránh người dùng click quá nhiều
    //     // await new Promise((resolve)=>setTimeout(resolve,2000))
    //     await sleep(5000)

    //     //Gọi API đăng ký user
    //     await quanLyNguoiDungServices.dangKy(values)
    //     // values sẽ có giá trị như <registerSchemaType đã đc khai báo ở trên


    //     toast.success('Đăng ký thành công')
    // } catch (errors: any) {
    //     console.log("errors: ", errors);
    //     toast.error(errors?.response?.data?.content)

    // } finally {
    //     //chạy sau khi gọi API xong
    //     // luôn luôn chạy vào đây
    //     setIsLoading(false)
    // }
    

    // Cách 2 : dùng redux xử lí bất đồng bộ
//      try {
//       const result = await dispatch(quanLyNguoiDungThunks.dangKy(values)).unwrap()
//       toast.success('Đăng ký thành công')
// } catch (errors: any){
//   toast.error(errors?.response?.data?.content)
// }

// cách 3 : react - query - useMutation
// try{

//   // registerMutation.mutate()
//   await registerMutation.mutateAsync(values)
//   toast.success('Đăng ký thành công')
// } catch(errors: any){
//   console.log("errors: ", errors);
//   toast.error(errors?.response?.data?.content)
// }



  registerMutation.mutate(values)
  }
  return (
    <div>
        {/* <DemoComponent>
            <div className="text-white">Hello children</div>
        </DemoComponent> */}
      <h2 className="text-white text-36 font-700 mb-30">Đăng ký</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-white text-16 mb-3">
          Họ tên <span className="text-red-500">*</span>
        </p>
        <Controller
        // dùng Controller lấy giá trị ở trường nhập
          name="hoTen"
          // name phải khai báo giá trị đã đc định nghĩa ở registerSchema
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.hoTen && <p className="text-red-500">{errors.hoTen?.message}</p>}
        <p className="text-white text-16 mb-3">
          Số điện thoại <span className="text-red-500">*</span>
        </p>
        <Controller
          name="soDt"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.soDt && <p className="text-red-500">{errors.soDt?.message}</p>}

        <p className="text-white text-16 mb-3">
          Email <span className="text-red-500">*</span>
        </p>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
        

        <p className="text-white text-16 mb-3">
          Mã nhóm <span className="text-red-500">*</span>
        </p>
        <Controller
          name="maNhom"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.maNhom && <p className="text-red-500">{errors.maNhom?.message}</p>}

        <p className="text-white text-16 mb-3">
          Tài khoản <span className="text-red-500">*</span>
        </p>
        <Controller
          name="taiKhoan"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.taiKhoan && <p className="text-red-500">{errors.taiKhoan?.message}</p>}

        <p className="text-white text-16 mb-3">
          Mật khẩu <span className="text-red-500">*</span>
        </p>

        <Controller
          name="matKhau"
          control={control}
          render={({ field }) => <Input.Password {...field} />}
        />

        {errors.matKhau && <p className="text-red-500">{errors.matKhau?.message}</p>}

        <Button
        loading={isLoadingRegister}
          htmlType="submit"
          type="primary"
          danger
          className="!w-full mt-30 !h-[50px]"
        >
          Đăng Ký
        </Button>
      </form>
    </div>
  );
};

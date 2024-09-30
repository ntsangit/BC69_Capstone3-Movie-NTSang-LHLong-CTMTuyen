import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "antd";
import { LoginSchema, LoginSchemaType } from "../../schemas/LoginSchema";
import { Controller, useForm } from "react-hook-form";
import { useLoginMutatuon } from "../../hooks/api";

export const LoginTemplate = () => {
  const loginMutation = useLoginMutatuon();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });
  return (
    <form
      onSubmit={handleSubmit((values) => {
        console.log("values: ", values);
        //gọi API đăng nhập = useMutation({})
        loginMutation.mutate(values);
      })}
    >
      <h2 className="text-white text-36 font-bold text-5xl mb-5">Đăng nhập</h2>

      <p className="text-white text-16 mb-1">
        Tài khoản <span className="text-red-500">*</span>
      </p>

      <Controller
        control={control}
        name="taiKhoan"
        render={({ field }) => <Input {...field} />}
      />
      {errors?.taiKhoan && (
        <p className="text-red-500">{errors.taiKhoan.message}</p>
      )}
      <p className="text-white text-16 mb-1 mt-5">
        Mật khẩu <span className="text-red-500">*</span>
      </p>
      <Controller
        control={control}
        name="matKhau"
        render={({ field }) => <Input.Password {...field} />}
      />
      {errors?.matKhau && (
        <p className="text-red-500">{errors.matKhau.message}</p>
      )}
      <Button
        htmlType="submit"
        type="primary"
        danger
        className="!w-full mt-30 !h-[50px] text-white mt-7"
        loading={loginMutation.isPending}
      >
        Đăng nhập
      </Button>
    </form>
  );
};

import z from "zod";
export const registerSchema = z.object({
  taiKhoan: z
  .string({ message: "Vui lòng nhập thông tin tài khoản" })
  // .optional() thuộc tính không bắt buộc
  .min(5, 'Tài khoản tối thiểu 5 kí tự'),
  
  matKhau: z.string({ message: "Vui lòng nhập thông tin mật khẩu" }),
  email: z
    .string({ message: "Vui lòng nhập email" })
    .email({ message: "Vui lòng nhập đúng email" }),
  soDt: z.string({ message: "Vui lòng nhập số điện thoại" }),
  maNhom: z.string({ message: "Vui lòng nhập mã nhóm" }),
  hoTen: z.string({ message: "Vui lòng nhập họ tên" }),
});

export type registerSchemaType = z.infer<typeof registerSchema>;

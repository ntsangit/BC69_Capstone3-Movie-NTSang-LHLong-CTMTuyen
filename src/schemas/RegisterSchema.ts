import z from 'zod'

// Validation và quy định kiểu dữ liệu trả về của Form tương ứng vs schema
export const RegisterSchema = z.object({
    taiKhoan: z
        .string({ message: 'Vui lòng nhập thông tin tài khoản' })
        // .optional() // Thuộc tính ko bắt buộc
        .min(5, 'Tài khoản tối thiểu 5 ký tự'),
    // .max(10, 'Tài khoản tối đa 10 ký tự'),

    matKhau: z.string({ message: 'Vui lòng nhập thông tin mật khẩu' }),
    email: z
        .string({ message: 'Vui lòng nhập email' })
        .email({ message: 'Vui lòng nhập đúng email' }),

    soDt: z.string({ message: 'Vui lòng nhập số điện thoại' }),
    maNhom: z.string({ message: 'Vui lòng nhập mã nhóm' }),
    hoTen: z.string({ message: 'Vui lòng nhập họ tên' }),

    // url: z
    //     .string()
    //     .regex(
    //         /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
    //         'URL ko đúng'
    //     ),
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>

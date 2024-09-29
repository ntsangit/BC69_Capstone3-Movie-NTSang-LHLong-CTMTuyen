import z from 'zod'

export const FilmManageSchema = z.object({
    maPhim: z.string({ message: "Vui lòng nhập mã phim" }),
    tenPhim: z.string({ message: "Vui lòng nhập tên phim" }),
    biDanh: z.string({ message: "Vui lòng nhập bí danh" }).optional(),
    trailer: z.string({ message: "Vui lòng nhập trailer" }).optional(),
    hinhAnh: z.any().transform((value) => {
      return value as FileList;
    }),
    moTa: z.string({ message: "Vui lòng nhập mô tả" }).optional(),
    maNhom: z.string({ message: "Vui lòng nhập mã nhóm" }),
    ngayKhoiChieu: z.string({ message: "Vui lòng nhập ngày khởi chiếu" }).nullable(),
    danhGia: z.string({ message: "Vui lòng nhập số sao" }).optional(),
    hot: z.boolean().optional(),
    dangChieu: z.boolean().optional(),
    sapChieu: z.boolean().optional(),
})

export type FilmManageSchemaType = z.infer<typeof FilmManageSchema>

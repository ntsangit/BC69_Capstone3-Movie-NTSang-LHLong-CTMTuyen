export type Phim = {
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: string;
    danhGia: number;
    hot: boolean;
    dangChieu: boolean;
    sapChieu: boolean;
}

export type PhimTable = {
    maPhim: number;
    tenPhim: string;
    hinhAnh: string;
  };
export type Banner = {
    [x: string]: any;
    maBanner: number;
    maPhim: number;
    hinhAnh: string;
  };
  
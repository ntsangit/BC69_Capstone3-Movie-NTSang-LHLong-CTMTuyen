export interface ThongTinLichChieu {
    heThongRapChieu: HeThongRapChieu[]
    maPhim: number
    tenPhim: string
    biDanh: string
    trailer: string
    hinhAnh: string
    moTa: string
    maNhom: string
    hot: boolean
    dangChieu: boolean
    sapChieu: boolean
    ngayKhoiChieu: string
    danhGia: number
  }
  export interface HeThongRapChieu {
    cumRapChieu: CumRapChieu[]
    maHeThongRap: string
    tenHeThongRap: string
    logo: string
  }
  
  export interface CumRapChieu {
    lichChieuPhim: LichChieuPhim[]
    maCumRap: string
    tenCumRap: string
    hinhAnh: string
    diaChi: string
  }
  
  export interface LichChieuPhim {
    maLichChieu: string
    maRap: string
    tenRap: string
    ngayChieuGioChieu: string
    giaVe: number
    thoiLuong: number
  }
  

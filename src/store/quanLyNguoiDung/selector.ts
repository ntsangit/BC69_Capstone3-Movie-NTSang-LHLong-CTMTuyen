import { useSelector } from "react-redux"
import { RootState } from "../index"

export const useQuanLyNguoiDungSelector = () => useSelector((state: RootState)=> state.quanLyNguoiDungReducer)
import { useSelector } from 'react-redux'
import { RootState } from '..'

export const useQuanLyNguoiDungSelector = () =>
    useSelector((state: RootState) => state.quanLyNguoiDungReducer)

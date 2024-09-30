import { configureStore } from "@reduxjs/toolkit";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung";
import { useDispatch } from "react-redux";

export const store = configureStore ({
    reducer: {
        quanLyNguoiDungReducer,
    },
})

type AppDispatch = (typeof store)['dispatch']

export const useAppDispatch:()=>AppDispatch = useDispatch

export type RootState = ReturnType<(typeof store)['getState']>
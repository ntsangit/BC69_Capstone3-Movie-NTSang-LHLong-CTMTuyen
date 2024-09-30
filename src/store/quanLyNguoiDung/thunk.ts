// Sử dụng thunk làm midleware trong redux toolkit

import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { quanLyNguoiDungServices } from "../../services/quanLyNguoiDung";
import { registerSchemaType } from "../../schemas";
import { sleep } from "../../utils";

const dangKy = createAsyncThunk(
  // payload: giá trị truyền vào khi action đc dispatch
  "quanLyNugoiDung/dangKy",
  async (payload: registerSchemaType, {rejectWithValue}) => {
    try {
        console.log("payload: ", payload);
        await sleep(2000)
        const result =  await quanLyNguoiDungServices.dangKy(payload)
        console.log("result: ", result);
        return result.data.content
    } catch (err) {
        console.log("err: ", err);
        return rejectWithValue(err)

    }
    
  }
);
export const quanLyNguoiDungThunks = { dangKy };

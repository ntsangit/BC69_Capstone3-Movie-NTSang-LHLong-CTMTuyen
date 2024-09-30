import { createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungThunks } from "./thunk";
import { any, boolean } from "zod";
import { registerSchemaType } from "../../schemas";
import { storage } from "../../utils";
import { localStorageKey } from "../../constants";
import { LoginAPIResponse } from "../../@types";

const { dangKy } = quanLyNguoiDungThunks;
type InitialState = {
  isLoadingRegister: boolean;
  userRegister?: registerSchemaType;
  //Lưu thông tin đăng nhập của user
  user: LoginAPIResponse | null;
};

const initialState: InitialState = {
  isLoadingRegister: false,
  userRegister: undefined,
  user: storage(localStorageKey.USER),
};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,

  // xử lí đồng bộ
  reducers: {
    setAbc: () => {},
    setUser: (state, { payload }) => {
      state.user = payload;

      // Lưu user vào local storage
      localStorage.setItem(localStorageKey.USER, JSON.stringify(payload));
    },
    logOut: (state) => {
      //xóa thông tin user ở store
      state.user = null
      
      //xóa thông tin user ở local storage
      localStorage.removeItem(localStorageKey.USER)
    }
  },

  //xử lí action bất đồng bộ (gọi API)
  extraReducers(builder) {
    builder
      .addCase(quanLyNguoiDungThunks.dangKy.pending, (state) => {
        state.isLoadingRegister = true;
        console.log("pending: ");
      })
      // Gọi API thành công
      .addCase(dangKy.fulfilled, (state, { payload }) => {
        console.log("payload: ", payload);
        console.log("fulfilled");
        state.isLoadingRegister = false;
        state.userRegister = payload;
      })

      // Gọi API thất bại
      .addCase(dangKy.rejected, (state) => {
        console.log("rejected: ");
        state.isLoadingRegister = false;
      });
  },
});

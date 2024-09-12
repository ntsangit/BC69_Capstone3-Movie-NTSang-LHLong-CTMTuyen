import { createSlice } from '@reduxjs/toolkit'
import { quanLyNguoiDungThunks } from './thunk'
import { RegisterSchemaType } from '../../schemas'
import { storage } from '../../utils'
import { localStorageKey } from '../../constants'
import { LoginAPIResponse } from '../../@types'

type InitialState = {
    isLoadingRegister: boolean
    userRegister?: RegisterSchemaType

    // Lưu thông tin đăng nhập của user
    user: LoginAPIResponse | null
}

const initialState: InitialState = {
    isLoadingRegister: false,
    userRegister: undefined,
    user: storage(localStorageKey.USER),
}

const { dangKy } = quanLyNguoiDungThunks

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = createSlice({
    name: 'quanLyNguoiDung',
    initialState,

    // Xử lý action đồng bộ.
    reducers: {
        setAbc: () => {},
        setUser: (state, { payload }) => {
            state.user = payload

            // Lưu user vào local storage
            localStorage.setItem(localStorageKey.USER, JSON.stringify(payload))
        },
        logOut: (state) => {
            // Xóa thông tin user ở store
            state.user = null

            //  Xóa thông tin user ở local storage
            localStorage.removeItem(localStorageKey.USER)
        },
    },

    // Xử lý action bất đồng bộ (gọi API)
    extraReducers(builder) {
        builder
            .addCase(dangKy.pending, (state) => {
                state.isLoadingRegister = true
                console.log('pending')
            })

            // Gọi API thành công
            .addCase(dangKy.fulfilled, (state, { payload }) => {
                console.log('payload: ', payload)
                console.log('fulfilled')
                state.isLoadingRegister = false
                state.userRegister = payload
            })

            // Gọi API thất bại
            .addCase(dangKy.rejected, (state) => {
                console.log('rejected')
                state.isLoadingRegister = false
            })
    },
})

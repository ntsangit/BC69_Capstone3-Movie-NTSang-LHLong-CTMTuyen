import { createAsyncThunk } from '@reduxjs/toolkit'
import { quanLyNguoiDungServices } from '../../services'
import { RegisterSchemaType } from '../../schemas'
import { sleep } from '../../utils'

const dangKy = createAsyncThunk(
    'quanLyNguoiDung/dangKy',
    // payload: Giá trị truyền vào khi action đc dispatch
    async (payload: RegisterSchemaType, { rejectWithValue }) => {
        try {
            console.log('payload: ', payload)

            await sleep(2000)

            const result = await quanLyNguoiDungServices.dangKy(payload)
            console.log('result: ', result)

            return result.data.content
        } catch (err) {
            console.log('err: ', err)
            return rejectWithValue(err)
        }
    }
)

export const quanLyNguoiDungThunks = { dangKy }

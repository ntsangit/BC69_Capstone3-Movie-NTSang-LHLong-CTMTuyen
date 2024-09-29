import { createSlice } from "@reduxjs/toolkit"

interface Film {
    maPhim: string;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: string;
    danhGia: string;
    hot: boolean;
    dangChieu: boolean;
    sapChieu: boolean;
}

const initialState: {
    FilmList: Film[];
    FilmEdit: Film | null;
} = {
    FilmList: [],
    FilmEdit: null,
};

export const { reducer: FilmManageReducer, actions: FilmManageAction } = createSlice(
    {
        name: 'FilmManage',
        initialState,
        reducers: {
            setProductList: (state, action) => {
                console.log("action: ", action);
                state.FilmList.push(action.payload);
            },
            deleteProduct: (state, { payload }) => {
                console.log('payload: ', payload)
                state.FilmList = state.FilmList.filter((item) => item.maPhim !== payload)
            },
            editProduct: (state, { payload }) => {
                console.log("action: ", payload);
                state.FilmList = payload;

            },

            updateProduct: (state, { payload }) => {
                console.log("action: ", payload);
                state.FilmList = state.FilmList.map((item) => {
                    if (item.maPhim === payload.maPhim) return payload;
                    return item;
                });
            },
        }

    })
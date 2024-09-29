import { useSelector } from 'react-redux'
import { RootState } from '..'

export const useFilmManageSelector = () =>
    useSelector((state: RootState) => state.FilmManageReducer)
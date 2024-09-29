import { useRoutes } from 'react-router-dom'
import { PATH } from '../constants'
import {  Home, Login, Register,FilmManagement } from '../pages'
import { AuthLayout, MainLayout } from '../components'
import { AdminLayOut } from '../components/layouts/AdminLayout'

export const routers = () =>
    useRoutes([
        {
            element: <AuthLayout />,
            children: [
                {
                    path: PATH.register,
                    element: <Register />,
                },
                {
                    path: PATH.login,
                    element: <Login />,
                },
            ],
        },
        {
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                }
            ],
        },
        {
          element: <AdminLayOut />,
          children: [
            {
              path: PATH.FilmManament,
              element: <FilmManagement />,
            },
          ],
        },
    ])

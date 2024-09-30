// rafc
import { Fragment, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
    children: ReactNode
}

export const ToastifyProvider = ({ children }: Props) => {
    return (
        <Fragment>
            <ToastContainer position="top-right" pauseOnHover={false} pauseOnFocusLoss={false} />
            {children}
        </Fragment>
    )
}

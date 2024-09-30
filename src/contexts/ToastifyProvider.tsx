import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react/jsx-runtime';

type Props = {
    children: ReactNode,
}

export const ToastifyProvider = ({children}: Props) => {
  return (
    <Fragment>
        <ToastContainer/>
        {children}
    </Fragment>
    
  )
}

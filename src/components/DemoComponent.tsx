// rafc

import { ReactNode } from 'react'

type Props = {
    color?: string
    handleClick?: () => void
    handleClick1?: (a: number) => void
    children: ReactNode
}

// export const Abc: React.FC<Props> = (props) => {
//     return <div>ABC</div>
// }

export const DemoComponent = (props: Props) => {
    const { color, handleClick, handleClick1 } = props
    // const { isLoadingRegister } = useSelector((state: RootState) => state.quanLyNguoiDungReducer)

    console.log('color: ', color)

    return (
        <>
            <div onClick={handleClick}>DemoComponent</div>
            {props.children}
            <div onClick={() => handleClick1?.(123)}>Handle click 1</div>

            <h1 className="text-[#FFF] bg-[#EE0000] text-10 font-600 hover:bg-green-400 transition-all cursor-pointer">
                Demo tailwind css
            </h1>
        </>
    )
}

import { ReactNode } from "react"



// khi tạo props, bên đây có color thì bên app.tsx cũng phải có color, và không có thêm thuộc tính khác, bên đây truyền xuống cái gì thì bên kia bắt buộc phải nhận cái đó, hoặc có thể thêm ? vào để ko bắt buộc bên kia phải nhận
type Props = {
    color?: string
    handleClick: ()=> void
    handleClick1: (a: number)=> void
    children: ReactNode
}

// export const Abc: React.FC<string,number> = (props) => {
//     return <div>ABC</div>
// }

export const DemoComponent = (props: Props) => {
    const {color, handleClick, handleClick1} = props
    console.log("color: ", color);

  return (
    <div>
<a onClick={handleClick}>DemoComponent</a>
<a onClick={()=>handleClick1(10)}>Handle click 1</a>
<h1 className='bg-green-600 text-[#EC4738] text-30 hover:bg-violet-500 transition-all cursor-pointer font-900'>DEMO tailwind css</h1>
    </div>
    

  )
  
}

// rafc
import { useQuery } from '@tanstack/react-query'
import { quanLyPhimServices } from '../../services/quanLyPhim'
import { Button, Card, Skeleton } from 'antd'
import { sleep } from '../../utils'
import { Phim } from '../../@types'
import { generatePath, useNavigate } from 'react-router-dom'
import { PATH } from '../../constants'

export const HomeTemplate = () => {

    const navigate = useNavigate()

    // API A => B

    // const {data: dataA, isFetching: isFetchingA} = useQuery()

    // Lấy danh sách phim
    const { data, isFetching } = useQuery({
        queryKey: ['DanhSachPhim'],
        // queryFn: () => quanLyPhimServices.getDanhSachPhim('?maNhom=GP01'),
        queryFn:async () => {
            await sleep(1000 * 1)
            return quanLyPhimServices.getDanhSachPhim('?maNhom=GP01')
        },

        staleTime: 5*60*1000,
        // true:  gọi API, false: ko gọi
        enabled: true
    })

    const renderPhim = (data: Phim[] = [])=>{
        return data.map((phim)=>{
            return (
                <div key={phim.maPhim} className='flex justify-center'>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={phim.hinhAnh} />}
                    >
                        <Card.Meta title={phim.tenPhim} />
                        <Button className='mt-10' onClick={()=>{
                            const path = generatePath(PATH.phimDetail, {id: phim.maPhim})
                            navigate(path)
                        }}>Đặt vé</Button>
                    </Card>
                </div>
            )
        })
    }

    if(isFetching){
        return <div className='grid grid-cols-4 gap-40 container'>
            {
                [...Array(12)].map(()=>{
                    return <div>
                        <Skeleton.Input active className='!h-[350px] !w-full'/>
                        <Skeleton.Input active className='mt-2 !w-full'/>
                        <Skeleton.Input active className='mt-2 !w-[80px]'/>
                    </div>
                })
            }
            Loading....
        </div>
    }

    console.log('data: ', data)
    return (
        <div className="container m-auto">
            <p className='font-600 text-30 mb-30'>Phim đang chiếu</p>
            <div className="grid grid-cols-4 gap-20">
                {
                    renderPhim(data?.data.content?.filter(item => item.dangChieu))
                }
                {/* {data?.data.content?.filter(item => item.dangChieu).map((phim) => {
                    return (
                        <div key={phim.maPhim} className='flex justify-center'>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={phim.hinhAnh} />}
                            >
                                <Card.Meta title={phim.tenPhim} />
                            </Card>
                        </div>
                    )
                })} */}
            </div>

            <p className='font-600 text-30 mb-30'>Phim sắp chiếu</p>
            <div className="grid grid-cols-4 gap-20">
                {
                    renderPhim(data?.data.content?.filter(item => !item.dangChieu))
                }
                {/* {data?.data.content?.filter(item => !item.dangChieu).map((phim) => {
                    return (
                        <div key={phim.maPhim} className='flex justify-center'>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={phim.hinhAnh} />}
                            >
                                <Card.Meta title={phim.tenPhim} />
                            </Card>
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}

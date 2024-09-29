import { useNavigate, useParams } from 'react-router-dom'
import { useGetShowtimesById, usePhimDetailById } from '../../hooks/api'
import { Tabs, Collapse, Button, Modal } from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { quanLyDatVe } from '../../services'
import { objectToQueryString } from '../../utils'
import cn from 'classnames'
import { styled } from 'styled-components'
import { LoaiGhe } from '../../@types'
export const FimDetailTemplate = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [maLichChieu, setMaLichChieu] = useState<string | undefined>()
    const { id = '' } = useParams()
    console.log('id: ', id)

    // const queryString = stringify({
    //   maPhim: id
    // }, {
    //   addQueryPrefix:true
    // })

    // console.log('queryString: ', queryString);

    // Gọi API lấy chi tiết phim
    // const {data} = useQuery({
    //   queryKey: ['PhimDetail', id],
    //   queryFn: ()=> {
    //     const queryString = objectToQueryString({
    //       maPhim: id
    //     })
    //     return quanLyPhimServices.getPhimDetailById(queryString)
    //   }
    // })

    const { data } = usePhimDetailById({ id })

    // Lấy chi tiết lịch chiếu phim

    const { data: showtimes } = useGetShowtimesById({ id })

    console.log('showtimes: ', showtimes)
    const { data: danhSachPhongVe } = useQuery({
        queryKey: ['DanhSachPhongVe', maLichChieu],
        queryFn: () =>
            quanLyDatVe.layDanhSachPhongVe(
                objectToQueryString({
                    MaLichChieu: maLichChieu,
                })
            ),
        enabled: !!maLichChieu,
    })
    console.log(danhSachPhongVe)
    // const navigate = useNavigate()
    // back về trang trước đó navigate(-1)
    return (
        <div className="container">
            <div className="grid grid-cols-2">
                <div>
                    <img src={data?.hinhAnh} alt="..." />
                </div>
                <div>
                    <p>{data?.tenPhim}</p>
                    <p>{data?.moTa}</p>
                </div>
            </div>

            <div>
                <Tabs
                    items={showtimes?.heThongRapChieu.map((item) => ({
                        key: item?.maHeThongRap,
                        label: (
                            <div className="uppercase">
                                {item?.tenHeThongRap}
                            </div>
                        ),
                        children: (
                            <div>
                                <Collapse
                                    items={item?.cumRapChieu.map((cumRap) => ({
                                        key: cumRap.maCumRap,
                                        label: (
                                            <div>
                                                <p className="font-600 text-[16px]">
                                                    {cumRap.tenCumRap}
                                                </p>
                                                <p className="text-[14px] italic">
                                                    {cumRap.diaChi}
                                                </p>
                                            </div>
                                        ),
                                        children: (
                                            <div className="flex gap-10 flex-wrap">
                                                {cumRap.lichChieuPhim.map(
                                                    (lichChieu) => (
                                                        <Button
                                                            type="primary"
                                                            onClick={() => {
                                                                setIsOpenModal(
                                                                    true
                                                                )
                                                                setMaLichChieu(
                                                                    lichChieu.maLichChieu
                                                                )
                                                            }}
                                                        >
                                                            {dayjs(
                                                                lichChieu.ngayChieuGioChieu
                                                            ).format(
                                                                'DD-MM-YYYY, HH:mm'
                                                            )}{' '}
                                                            -
                                                            {dayjs(
                                                                lichChieu.ngayChieuGioChieu
                                                            )
                                                                .add(
                                                                    lichChieu.thoiLuong,
                                                                    'minutes'
                                                                )
                                                                .format(
                                                                    'HH:mm'
                                                                )}
                                                        </Button>
                                                    )
                                                )}
                                            </div>
                                        ),
                                    }))}
                                />
                            </div>
                        ),
                    }))}
                />
            </div>
            {/* Modal đặt vé */}
            <Modal
                open={isOpenModal}
                width={800}
                onCancel={() => {
                    setIsOpenModal(false)
                    setMaLichChieu(undefined)
                }}
            >
                {/* Nội dung Modal, hiện số ghế đặt vé */}
                Đặt vé
                <div className="grid grid-cols-12 gap-[10px] mt-20">
                    {danhSachPhongVe?.data.content?.danhSachGhe?.map((ghe) => (
                        // <div className="w-[40px] h-[40px] bg-red-500 flex items-center justify-center text-white rounded-md text-center ">
                        //     {ghe.tenGhe}
                        // </div>
                        <Ghe
                            className={cn({
                                daDat: ghe.daDat,
                                gheThuong: ghe.loaiGhe === LoaiGhe.THUONG,
                                gheVip: ghe.loaiGhe === LoaiGhe.VIP,
                            })}
                        >
                            {ghe.tenGhe}
                        </Ghe>
                    ))}
                </div>
            </Modal>
        </div>
    )
}
//Styled-------------------------------------
const Ghe = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    color: wheat;
    justify-content: center;
    border-radius: 6px;
    background: red;
    &.gheThuong {
        background: #116;
    }
    &.gheVip {
        background: red;
    }
`

// map có thể bỏ return bằng cách map((item)=>({}))
// dùng tab, collapse của ant.design
// dùng tab, Acod của MUI
// muốn dùng scss thì phải cài npm i sass
// hoặc dùng style css
// cài npm j dayjs để format time

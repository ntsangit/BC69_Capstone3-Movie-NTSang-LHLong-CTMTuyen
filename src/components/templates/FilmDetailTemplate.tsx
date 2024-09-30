import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { quanLyPhimServices } from "../../services/quanLyPhim";
import { objectToQueryString } from "../../utils";
import { useGetShowtimesById, usePhimDetailById } from "../../hooks/api";
import { Button, Collapse, Modal, Tabs } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { quanLyDatVe } from "../../services";
import cn from 'classnames'
import styled from "styled-components";
import { LoaiGhe } from "../../@types";

export const FilmDetailTemplate = () => {
  const { id = "" } = useParams();
  console.log("id: ", id);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [maLichChieu, setMaLichChieu] = useState<string | undefined>();
  console.log("maLichChieu: ", maLichChieu);

  // const queryString = stringify({
  //     maPhim: id
  // },{
  //     addQueryPrefix:true
  // })

  // Gọi API lấy chi tiết phim
  // const {data} = useQuery({
  //     queryKey: ['PhimDetail', id],
  //     queryFn: ()=> {
  //       const queryString = objectToQueryString({
  //         maPhim: id
  //       })
  //       return quanLyPhimServices.getPhimDetailById(queryString)
  //     }
  //   })

  //     console.log('data: ', data);

  const { data } = usePhimDetailById({ id });

  // Lấy chi tiết lịch chiếu phim
  const { data: showtimes } = useGetShowtimesById({ id });
  console.log("showtimes: ", showtimes);

  // lấy danh sách phòng vé
  const { data: danhSachPhongVe } = useQuery({
    // khi maLichChieu thay đổi sẽ tiến hành gọi lại api
    queryKey: ["DanhSachPhongVe", maLichChieu],
    queryFn: () =>
      quanLyDatVe.layDanhSachPhongVe(
        objectToQueryString({
          maLichChieu,
        })
      ),
    // enabled: false => ko call API
    enabled: !!maLichChieu,
  });

  console.log("danhSachPhongVe: ", danhSachPhongVe);

  const navigate = useNavigate()
  // back về trang trước đó : navigate(-1)

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={data?.hinhAnh} alt="..." />
      </div>
      <div>
        <p>{data?.tenPhim}</p>
        <p>{data?.moTa}</p>
      </div>
      <div>
        <Tabs
          items={showtimes?.heThongRapChieu.map((item) => ({
            key: item.maHeThongRap,
            label: item.tenHeThongRap,
            children: (
              <div>
                <Collapse
                  items={item?.cumRapChieu.map((cumRap) => {
                    // logic....
                    return {
                      key: cumRap.maCumRap,
                      label: (
                        <div>
                          <p className="font-600 text-[16px]">
                            {cumRap.tenCumRap}
                          </p>
                          <p className="text-[14px] italic">{cumRap.diaChi}</p>
                        </div>
                      ),
                      children: (
                        <div className="flex gap-10 flex-wrap">
                          {cumRap.lichChieuPhim.map((lichChieu) => (
                            <Button
                              type="primary"
                              onClick={() => {
                                setIsOpenModal(true);
                                setMaLichChieu(lichChieu.maLichChieu);
                              }}
                            >
                              {dayjs(lichChieu.ngayChieuGioChieu).format(
                                "DD-MM-YYYY, HH:mm"
                              )}{" "}
                              -{" "}
                              {dayjs(lichChieu.ngayChieuGioChieu)
                                .add(lichChieu.thoiLuong, "minutes")
                                .format("HH:mm")}
                            </Button>
                          ))}
                        </div>
                      ),
                    };
                  })}
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
          setIsOpenModal(false);
          setMaLichChieu(undefined);
        }}
      >
        {/* nội dung modal */}
        Đặt vé
        <div className="grid grid-cols-12 gap-[10px] mt-20">
          {danhSachPhongVe?.data.content?.danhSachGhe?.map((ghe) => (
            // <div
            //   className="w-[40px] h-[40px] bg-red-800 space-x-2 text-neutral-50 flex place-items-center justify-center"
            //   key={ghe.maGhe}
            // >
            //   {ghe.tenGhe}
            // </div>
            <Ghe className={cn({
              "daDat": ghe.daDat,
              "gheThuong": ghe.loaiGhe === LoaiGhe.THUONG,
              "gheVip": ghe.loaiGhe === LoaiGhe.VIP
            })}>{ghe.tenGhe}</Ghe>
          ))}
        </div>
      </Modal>
    </div>
  );
};

//styled
const Ghe = styled.div`
width: 40px;
height:40px;
display:flex;
align-items:center;
justify-content:center;
color: #fff;
border-radius: 10%;
background: red;
&.gheThuong {
background: #111;
}
&.gheVip {
background: #999
}
`

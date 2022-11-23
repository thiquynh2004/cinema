/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import moment from "moment";
import ReactPlayer from "react-player";
import {  Modal, Rate } from "antd";
import { layThongTinPhimAction } from "../../redux/actions/QuanLyPhimAction";
import "./fimDetail.scss";
export default function FilmDetail() {
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const { maPhim } = useParams();
  const dispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setPlaying(false);
  };
  const handleCancel = () => {
    setPlaying(false);
    setIsModalOpen(false);
  };
  useEffect(() => {
    dispatch(layThongTinPhimAction(maPhim));
    window.scrollTo(0, 0);
  }, [playing]);

  // const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  return (
    <>
      <div style={{ paddingTop: "40px" }}>
        <section className="text-gray-600 body-font overflow-hidden ">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded my-0 mx-auto"
                style={{ height: "75vh", width: "auto" }}
                src={filmDetail.hinhAnh}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <NavLink
                  to="/"
                  className="text-white text-xl hover:text-green-500"
                >
                  Home
                </NavLink>
                <span className="text-2xl">||</span>
                <span className="text-sm title-font text-cyan-200 tracking-widest">
                  Movie
                </span>

                <h1 className="text-white text-3xl title-font font-medium mb-1">
                  {filmDetail.tenPhim}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <Rate value={filmDetail.danhGia} count={10} />
                    {/* <span className="text-gray-600 ml-3"></span> */}
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 text-white text-lg border-gray-200 space-x-2s">
                    ( {filmDetail.danhGia} vote )
                  </span>
                </div>
                <p className="leading-relaxed text-white opacity-50">
                  {filmDetail.moTa}
                </p>
                <div className="leading-relaxed text-white my-2">
                  Ngày khởi chiếu:{" "}
                  {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                </div>

                <div className="flex ">
                  <button
                    className=" m-4 text-white bg-orange-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded"
                    onClick={showModal}
                  >
                    Watch Trailer
                  </button>
                  <Modal
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    className="w-full h-full text-gray-500"
                    width={600}
                  >
                    <ReactPlayer
                      className="react-player"
                      url={filmDetail.trailer}
                      width="100%"
                      playing={playing}
                    />
                  </Modal>
                  <button className=" m-4 text-white bg-cyan-700 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-500 rounded"
                  onClick={()=>{
                    navigate("/checkout")
                  }}
                  >
                    Buy Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Outlet/> */}
      </div>
    </>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SearchOutlined } from "@ant-design/icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../components/Banner/banner.scss";
import "./listfilm.scss";
// import ReactPlayer from 'react-player/youtube'
// import required modules
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  LAY_DANH_SACH_DANG_CHIEU,
  LAY_DANH_SACH_SAP_CHIEU,
} from "../../../redux/actions/types/QuanLyPhimType";
import { Input } from "antd";
import { layDanhSachPhimAction } from "../../../redux/actions/QuanLyPhimAction";
// import { layDanhSachPhimAction } from "../../../redux/actions/QuanLyPhimAction";
const { Search } = Input;

export default function ListFilm(props) {
  const { arrFilm, dangChieu, sapChieu } = props;
  const [activeButton, setActiveButton] = useState({
    dangChieu: false,
    sapChieu: false,
  });
  console.log("dangChieu", dangChieu);
  console.log("sapChieu", sapChieu);
  const dispatch = useDispatch();
  console.log(arrFilm);
  const navigate = useNavigate();
  // const {value, setValue} = useState("")

  // const activeDangChieu = dangChieu === true ? "active" : "";
  // const activeSapChieu = sapChieu === true ? "active" : "";

  const renderFilm = () => {
    return arrFilm.map((film, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="container">
            <div className="card">
              <figure
                className="card__thumb cursor-pointer"
                onClick={() => {
                  navigate(`/detail/${film.maPhim}`);
                }}
              >
                <img
                  src={film.hinhAnh}
                  alt={film.tenPhim}
                  className="card__image"
                />
                <figcaption className="card__caption">
                  <button
                    className="card__button bg-cyan-400 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => {
                      navigate(`/detail/${film.maPhim}`);
                    }}
                  >
                    Book ticket
                  </button>
                </figcaption>
              </figure>
            </div>
            <h1 className="text-white title-font font-medium mb-1">
              {film.tenPhim}
            </h1>
          </div>
        </SwiperSlide>
      );
    });
  };
  const handleSearch = (value) => {
    console.log(value);
    dispatch(layDanhSachPhimAction(value));
  };

  // useEffect(() => {
  //   dispatch(layDanhSachPhimAction())
  // },[])
  return (
    <div className="list-film my-9">
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="header-film flex justify-end  gap-x-3 my-5  ">
            <div className="button-header flex gap-x-3">
              <button>Now Showing</button>
              <button>Coming soon</button>
            </div>
            <div className="search-film flex items-center gap-2.5">
              <Search
                placeholder="Search Film"
                enterButton="Search"
                size="large"
                onSearch={handleSearch}
                
              />
             
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {renderFilm()}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

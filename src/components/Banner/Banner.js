/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.scss";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachBannerAction } from "../../redux/actions/QuanLyPhimAction";
import { NavLink } from "react-router-dom";

export default function Banner() {
  const { arrBanner } = useSelector((state) => state.QuanLyPhimReducer);
  // const {filmDetail} = useSelector((state) =>state.QuanLyPhimReducer);
  // console.log(filmDetail);
  console.log(arrBanner);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachBannerAction());
    // dispatch(layThongTinPhimAction(arrBanner.maPhim));
  }, []);
  // const arrBanner = { props };
  // console.log(arrBanner);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {arrBanner.map((banner, index) => {
          return (
            <NavLink to="#" key={index}>
              <SwiperSlide
                className=""
                key={index}
                style={{
                  backgroundImage: `url(${banner.hinhAnh})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "100vh",
                }}
              ></SwiperSlide>
            </NavLink>
          );
        })}
      </Swiper>
    </>
  );
}

// const FilmDetail = (props) => {
//   const film = props.banner;
//   const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
//   console.log(filmDetail);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(layThongTinPhimAction(film.maPhim));
//   }, []);
//   console.log(film.maPhim);
//   return (
//     <div
//       className="text-white w-1/3 "
//       style={{
//         padding: '0 3rem',
//         backgroundColor: "rgba(255, 255, 255,)",
//         position: "absolute",
//         left: "5%",
//         textAlign: "initial",
//       }}
//     >
//       <h1>{filmDetail.tenPhim}</h1>
//       {/* <h4>2017, David Ayer</h4> */}
//       {/* <span className="minutes">117 min</span> */}
//       {/* <p className="type">Action, Crime, Fantasy</p> */}

//       <div className="movie_desc">
//         <p className="text">
//           {filmDetail.moTa}
//         </p>
//       </div>
//     </div>
//   );
// };

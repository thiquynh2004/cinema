/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../components/Banner/Banner'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction'
import ListFilm from './ListFilm/ListFilm'


export default function Home() {
  const {arrFilm, dangChieu, sapChieu} = useSelector((state)=> state.QuanLyPhimReducer);

  console.log(arrFilm)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhimAction())

  },[])
  // const handleSearch =(value) => {
  //   console.log(value);
  //   dispatch(layDanhSachPhimAction(value))
  // }
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // })
  return (
    <>
      <Banner/>
      <ListFilm arrFilm={arrFilm} dangChieu={dangChieu} sapChieu={sapChieu}/>
    </>
  )
}

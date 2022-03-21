import React from 'react'
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        style={{ height: '80vh' }}
        className=" shadow-lg rounded-lg"
      >
        <SwiperSlide>
          <img src={require('../../../assets/Carousel/植物.jpg')} alt='植物' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../assets/Carousel/樹.jpg')} alt='樹' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../assets/Carousel/大理石.jpg')} alt='大理石' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../../../assets/Carousel/船.jpg')} alt='船' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carousel
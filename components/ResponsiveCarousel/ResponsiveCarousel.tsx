"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const ResponsiveCarousel = () => {
  // const { responsive } = items;

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div className='swiper-item'>
          <div className="card">
            <img src="/images/featured-1.jpg" alt="featured-1" />
            <div className="text-container">
              <h1>date</h1>
              <h4>title</h4>
              <p>description</p>
            </div>
          </div>
          <div className="card">
            <img src="/images/featured-1.jpg" alt="featured-1" />
            <div className="text-container">
              <h1>date</h1>
              <h4>title</h4>
              <p>description</p>
            </div>
          </div>
        </div>

      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}

export default ResponsiveCarousel;
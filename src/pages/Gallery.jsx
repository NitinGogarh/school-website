
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import slide_image_1 from '/assets/sports.jpg';
import slide_image_2 from '/assets/science.jpg';
import slide_image_3 from '/assets/library.jpg';
import slide_image_4 from '/assets/class.jpg';
import slide_image_5 from '/assets/cultural.jpg';
import slide_image_6 from '/assets/cultural_fest.jpg';
import slide_image_7 from '/assets/sports_day.jpg';
import './Gallery.css'
function Gallery() {
  return (
    <div className="container1 pt-[100px] min-h-[87vh] overflow-hidden" >
    
      <h1 className="text-5xl font-bold mb-6 text-center about">Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container1"
      >
        <SwiperSlide className='swiper-slide1'>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide  className='swiper-slide1'>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide  className='swiper-slide1'>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide  className='swiper-slide1'>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide  className='swiper-slide1'>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide  className='swiper-slide1'>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide  className='swiper-slide1'>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  
  );
}

export default Gallery;

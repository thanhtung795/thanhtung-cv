// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
// import { Autoplay } from 'swiper';

import Selenium from './../../../../assets/Selenium.png';
import TestUnit from './../../../../assets/test unit.png';
import Agile from './../../../../assets/agile.png';
import GitHub from './../../../../assets/git hub.png';


 function SwiperSkillsTestAndGroup() {
  return (
    <div className='container-Swiper'>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={1}
        delay={0}
        speed={1000}
        watchSlidesProgress={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 1000, // Tăng delay lên để dễ nhìn hơn, 100ms quá nhanh
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='row'>
            <img src={Selenium} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Selenium</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={TestUnit} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Test Unit</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={Agile} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Agile</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={GitHub} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Git Hub</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default  SwiperSkillsTestAndGroup;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
// import { Autoplay } from 'swiper';

import Mysql from './../../../../assets/my sql.png';
import Sqlserver from './../../../../assets/sql server.png';
import PostgreSql from './../../../../assets/postgre Sql.png';


 function SwiperSkillsDB() {
  return (
    <div className='container-Swiper'>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        delay={0}
        speed={1000}
        watchSlidesProgress={true}
        grabCursor={true}
        spaceBetween={1}
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
            <img src={Mysql} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>My Sql</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={PostgreSql} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Postgre Sql</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={Sqlserver} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Sql Server</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={PostgreSql} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Postgre Sql</h2>
          </div>
        </SwiperSlide>
        
      
      </Swiper>
    </div>
  );
}
export default  SwiperSkillsDB;

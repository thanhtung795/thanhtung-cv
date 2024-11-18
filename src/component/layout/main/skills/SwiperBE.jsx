// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import Java from './../../../../assets/java.png';
import SpringBoot from './../../../../assets/spring boot.png';
import SpringSecutity from './../../../../assets/spring security.png';
import MyBatis from './../../../../assets/my batis.png';



function SwiperSkillsBE() {
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
            <img src={Java} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Java</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={SpringBoot} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Spring Boot</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={SpringSecutity} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Spring secutity</h2>
          </div>
        </SwiperSlide>
      
        <SwiperSlide>
        <div className='row'>
            <img src={MyBatis} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>My batis</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default  SwiperSkillsBE;


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
// import { Autoplay } from 'swiper';
import Bootstrap from './../../../../assets/bootstrap.png';
import ReactJs from './../../../../assets/react js.png';
import VueJs from './../../../../assets/vue js.png';
import ReactNative from './../../../../assets/react native.png';


 function SwiperSkillsFE() {
  return (
    <div className='container-Swiper'>
      <Swiper
        modules={[Autoplay]}
        delay={0}
        speed={1000}
        watchSlidesProgress={true}
        grabCursor={true}
        slidesPerView={3}
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
            <img src={Bootstrap}  className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Bootstrap</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={ReactJs} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>React Js</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={VueJs} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>Vue Js</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='row'>
            <img src={ReactNative} className='img-skill' alt="" />
          </div>
          <div className='row mt-3 title-skill'>
            <h2>React Native</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default  SwiperSkillsFE;

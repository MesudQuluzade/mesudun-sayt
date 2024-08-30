import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Hero.css';
import { Autoplay, Pagination } from 'swiper/modules';

const Hero: React.FC = () => {
  return (
    <section className='hero my-[18px]'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="slide">
            <div className="hero-left">
              <h2 className='mt-[25px] text-[48px]'>Xəyallarınızın veb saytını bu gün sifariş edin!</h2>
              <p>Onlayn satışda lider olmaq üçün veb saytlarımızı seçin və rəqibləri qabaqlayın!</p>
              <button className="order mt-[25px]">Sayt Sifariş Et</button>
            </div>
            <div className="hero-right hidden md:flex">
              <img src="/images/amico.svg" alt="Web Developer" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="hero-left">
              <h2 className='text-[48px]'>Yeni Təkliflər və Xidmətlər</h2>
              <p className='text-[16px]'>Ən son təkliflərimiz və xidmətlərimizlə tanış olun.</p>
              <button className="order mt-[25px]">Daha Ətraflı</button>
            </div>
            <div className="hero-right hidden md:flex">
              <img src= "/images/amico.svg" alt="Web Developer" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;

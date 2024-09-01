import React from 'react'
import css from "../Styles/HeroStyle.module.css"
import { Hero_carousel } from './data/Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"

 
function Hero(){



  return (
    <div className={css.hero}>
        <Swiper
         modules={[Pagination, Navigation, Autoplay]}
         className='my-swiper'
         autoplay = {{ delay: 5000 }}
         slidesPerView={1}
         spaceBetween={40}
         slidesPerGroup={1}
         loop={true}>
            {Hero_carousel.map((item, index) => (
            <SwiperSlide key={index}>
                <img src={process.env.PUBLIC_URL + item.image } alt="" />
                    <div className={css.hero_txt}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <a href="/" className={css.show}>En savoir plus</a>
                    </div>
            </SwiperSlide> 
            ))}
        </Swiper>
    </div>
  )
}

export default Hero

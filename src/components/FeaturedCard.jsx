import React, { useRef, useEffect } from 'react';
import { featured } from "./data/Data"
import css from "../Styles/Featured.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"

 
const FeaturedCard = () => {

  

  return (
    <>
      <div className={css.container}>
        <Swiper
         modules={[Pagination, Navigation, Autoplay]}
         className='my-swiper'
         autoplay = {{ delay: 1000 }}
         slidesPerView={1}
         spaceBetween={40}
         slidesPerGroup={1}
         loop={true}>
          {featured.map((items, index) => (
            <SwiperSlide>
              <div className={css.box} key={index}>
                {items.icon?items.icon:<img src={process.env.PUBLIC_URL + items.cover} alt='' />}
                <h4>{items.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default FeaturedCard


import { featured } from './data/Data'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"

 
const CardSimple = () => {


  return (
    <Swiper
    modules={[Pagination, Navigation, Autoplay]}
    className='my-swiper'
    autoplay = {{ delay: 5000 }}
    slidesPerView={5}
    spaceBetween={40}
    slidesPerGroup={1}
    loop={true}>
      <div className='container'>
        {featured.map((items, index) => (
          <SwiperSlide>
            <div className='box' key={index}>
              <img src={items.cover} alt='' className='img_box' />
              <h4>{items.name}</h4>           
            </div>
          </SwiperSlide>
        ))}
      </div>
   </Swiper>
  )
}

export default CardSimple



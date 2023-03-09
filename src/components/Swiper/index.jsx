import { autoParamSwiper } from 'constant'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

function SwiperCarosel() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        {...autoParamSwiper}
      >
        <SwiperSlide>
          1
        </SwiperSlide>
        <SwiperSlide>
          2
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperCarosel

/* eslint-disable no-unused-vars */
import { CardGlobal } from 'components'
import { attributeSwiper } from 'constant'
import React, { useMemo } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StyledSwiper } from './styled'

function SwiperCarosel({ listCourse }) {
  const renderSlider = useMemo(() => listCourse?.map((course) => (
    <SwiperSlide key={course.maKhoaHoc}>
      <CardGlobal course={course} />
    </SwiperSlide>
  )), [listCourse])
  return (
    <StyledSwiper>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        {...attributeSwiper}
      >
        {renderSlider}
      </Swiper>
    </StyledSwiper>
  )
}

export default SwiperCarosel

import { CardGlobal } from 'components'
import { attributeSwiper } from 'constant'
import React, { useMemo } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { StyledSwiper } from './styled'

function SlideCourses({ title, courses }) {
  const renderCourses = useMemo(() => courses?.map((course) => (
    <SwiperSlide key={course.maKhoaHoc}>
      <CardGlobal course={course} />
    </SwiperSlide>
  )), [courses])

  return (
    <>
      <h6>{title}</h6>
      <StyledSwiper>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          {...attributeSwiper}
        >
          {renderCourses}
        </Swiper>
      </StyledSwiper>
    </>
  )
}

export default SlideCourses

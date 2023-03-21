import { CardCourse } from 'components'
import React, { useMemo } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { attributeSwiper } from 'constant'
import { StyledSwiper } from './styled'

function Content({ courses }) {
  const renderCourses = useMemo(() => courses?.map((course, index) => (
    <SwiperSlide key={course.maKhoaHoc}>
      <CardCourse course={course} index={index} />
    </SwiperSlide>
  )), [courses])

  return (
    <StyledSwiper>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        {...attributeSwiper}
      >
        {renderCourses}
      </Swiper>
    </StyledSwiper>
  )
}

export default Content

import { autoParamSwiper } from 'constant'
import { DATA_INSTRUTOR } from 'data'
import React, { useMemo } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardIns from './cardIns'
import { StyledInstrutor } from './styled'

function Instrutor() {
  const renderSlider = useMemo(() => DATA_INSTRUTOR.map((item) => (
    <SwiperSlide key={item.id}>
      <CardIns data={item} />
    </SwiperSlide>
  )), [])
  return (
    <StyledInstrutor className="mt-5">
      <h6>Giảng viên hàng đầu</h6>
      <div className="intstructor__item">
        <div className="row mt-4">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            {...autoParamSwiper}
          >
            {renderSlider}
          </Swiper>
        </div>
      </div>
    </StyledInstrutor>
  )
}

export default Instrutor

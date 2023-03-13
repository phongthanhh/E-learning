export const autoParamSwiper = {
  spaceBetween: 50,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  freeMode: true,
  grabCursor: true,
  navigation: true,
  slidesPerView: 'auto',
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    400: {
      slidesPerView: 2
    },
    639: {
      slidesPerView: 3
    },
    865: {
      slidesPerView: 4
    },
    1000: {
      slidesPerView: 5
    },
    1500: {
      slidesPerView: 6
    }
  }
}

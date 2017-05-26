import Swiper from 'swiper';

export default function () {
  const ReviewsSlider = new Swiper('.slider', {
    loop: true,
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 40,
    speed: 700,
    nextButton: '.slider__next',
    prevButton: '.slider__prev',
    breakpoints: {
      1480: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    },
    slideClass: 'slider__item',
    wrapperClass: 'slider__wrapper',
    slidesPerGroup: 1,
    loopedSlides: 1
  });
};

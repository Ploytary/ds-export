import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

export function initStepsSection() {
  new Swiper('.steps-section__slider', {
    modules: [Autoplay, Pagination],
    pagination: {
      el: '.brand-slider__pagination',
      clickable: true,
    },
  });
}

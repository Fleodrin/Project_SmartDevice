new Swiper('.swiper', {
  loop: true,
  pagination: {
    bulletClass: 'swiper__pagination-bullet',
    bulletActiveClass: 'swiper__pagination-bullet--active',
    horizontalClass: 'swiper__pagination--horizontal',
    clickableClass: 'swiper__pagination--clickable',
    el: '.swiper__pagination',
    clickable: true,
    style: false,
  },
  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },
  speed: 500,
  // autoplay: {
  //   delay: 12000,
  //   disableOnInteraction: false,
  // },
});

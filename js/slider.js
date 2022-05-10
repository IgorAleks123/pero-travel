  var mySwiper = new Swiper('.swiper', {
    slidesPerView: 3,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

   spaceBetween: 20,

    slidesPerGroup: 2,

    //количество слайдов
    initialSlide: 1,

    loop: false,

    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
      }
    },
});
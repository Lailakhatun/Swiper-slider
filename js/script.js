$(function(){
    "use strict"
    const swiper = new Swiper('.swiper-container', {
// demo effect cube
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });

});
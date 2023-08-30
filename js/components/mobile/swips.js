import Swiper from 'swiper/bundle';

export function swipToTracks (){
    const swiper = new Swiper('.swiper', {

        pagination: {
          el: '.swiper-pagination',
        },

        autoHeight: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },

      });
}
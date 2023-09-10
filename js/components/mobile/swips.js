import Swiper from 'swiper/bundle';

export function swipToTracks (){
    let swiper = new Swiper('.swiper', {

        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        

        autoHeight: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },

      });
      return swiper
}
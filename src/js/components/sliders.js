import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';

const socialsslider = new Swiper('.header__socials-slider', {
    direction: 'vertical',
    modules: [Autoplay],
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
    speed: 2500, 
    spaceBetween: 1,
    resistance: true,
    resistanceRatio: 0,
    loop: true,
    allowTouchMove: false,
});

const doingnow = new Swiper('.doingnow__slider', {
    modules: [Autoplay],
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    speed: 3900,
    freeMode: true,
    autoplay: {
        delay: 10,
        disableOnInteraction: false
    },
    slidesPerView: "auto",
});

// doingnow.el.addEventListener('mouseenter', () => {
//     doingnow.autoplay.stop(); 
// });

// doingnow.el.addEventListener('mouseleave', () => {
//     doingnow.autoplay.start();
// });

const stages = new Swiper('.stages-slider', {
    modules: [FreeMode],
    spaceBetween: 15,
    slidesPerView: "auto",
    breakpoints: {
        260: {
            initialSlide: 0,
            centerInsufficientSlides: true,
            freeMode: true,
            freeModeSticky: true,
            slidesPerView: 'auto'
        },
        962: {
            slidesPerView: "auto",
        }
    }
});


const blogslider = new Swiper('.blog__slider', {
    modules: [FreeMode],
    spaceBetween: 15,
    slidesPerView: 3,
    breakpoints: {
        260: {
            initialSlide: 0,
            centerInsufficientSlides: true,
            freeMode: true,
            freeModeSticky: true,
            slidesPerView: 'auto'
        },
        962: {
            slidesPerView: 3
        }
    }
});

const service = new Swiper('.service__slider', {
    modules: [Autoplay],
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    speed: 5900,
    freeMode: true,
    autoplay: {
        delay: 30,
        disableOnInteraction: false
    },
    slidesPerView: "auto",
  });

  const blogs = new Swiper('.blog-section__slider', {
    slidesPerView: '4',
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 'auto',
        },
        962: {
            slidesPerView: '4',
        },
    }
  });

document.addEventListener('DOMContentLoaded', () => {
    function initSwiper() {
      if (window.innerWidth < 962) {
        const cases = new Swiper('.cases__slider', {
            modules: [FreeMode],
            spaceBetween: 15,
            slidesPerView: "auto",
        });
      }

      if (window.innerWidth < 962) {
        const services = new Swiper('.service-main__developers', {
            modules: [FreeMode],
            spaceBetween: 25,
            slidesPerView: "auto",
        });
      }
    }

    // Initialize Swiper on load
    initSwiper();

    // Re-initialize Swiper on window resize if necessary
    window.addEventListener('resize', () => {
      // Optionally, destroy the swiper instance and reinitialize if necessary
      // if (swiperInstance) swiperInstance.destroy();
      initSwiper();
    });
  });
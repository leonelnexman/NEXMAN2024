import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode, Thumbs, EffectFade } from 'swiper/modules';

const socialsslider = new Swiper('.header__socials-slider', {
    direction: 'vertical',
    modules: [Autoplay],
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidesPerView: "auto",
    speed: 2500, 
    spaceBetween: 1,
    resistance: true,
    resistanceRatio: 0,
    loop: true,
    allowTouchMove: false,
});

const imgSlider = new Swiper('.img-slider', {
    modules: [EffectFade, Pagination],
    spaceBetween: 1,
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// const sliderElement = document.querySelector('.img-slider');

// sliderElement.addEventListener('mouseenter', () => {
//     imgSlider.slideTo(1, 600); // Slide to the second slide with a smooth transition
// });

// sliderElement.addEventListener('mouseleave', () => {
//     imgSlider.slideTo(0, 600); // Slide back to the first slide with a smooth transition
// });

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

  const similar = new Swiper('.similar-projects__slider', {
    modules: [Autoplay],
    spaceBetween: 15,
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

  const swiper1 = new Swiper(".mySwiper", {
    modules: [Thumbs],
    spaceBetween: 6,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            spaceBetween: 1,
            slidesPerView: 'auto',
        },
        962: {
            spaceBetween: 1,
            slidesPerView: 'auto',
        },
    },
    on: {
        init() {
            const { slides } = this;
            slides.forEach((slide, index) => {
                if (index >= 6) {
                    slide.style.display = 'none';
                    slide.style.pointerEvents = 'none'; // Disable interaction
                }
            });
        },
        slideChange() {
            const { slides } = this;
            slides.forEach((slide, index) => {
                if (index >= 6) {
                    slide.style.display = 'none';
                    slide.style.pointerEvents = 'none'; // Disable interaction
                }
            });
        }
    }
});


const line = new Swiper('.marqee-line__slider', {
    modules: [Autoplay],
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    speed: 7900,
    freeMode: true,
    autoplay: {
        delay: 30,
        disableOnInteraction: false
    },
    slidesPerView: "auto",
  });

  const swiper2 = new Swiper(".mySwiper2", {
    modules: [Thumbs, Navigation],
    spaceBetween: 6,
    slidesPerView: 1,
    navigation: {
      nextEl: "#next-slide",
      prevEl: "#prev-slide",
    },
    thumbs: {
      swiper: swiper1,
    },
    on: {
      init() {
          const { slides } = this;
          slides.forEach((slide, index) => {
              if (index >= 6) {
                  slide.style.display = 'none';
                  slide.style.pointerEvents = 'none'; // Disable interaction
              }
          });
      },
      slideChange() {
          const { slides } = this;
          slides.forEach((slide, index) => {
              if (index >= 6) {
                  slide.style.display = 'none';
                  slide.style.pointerEvents = 'none'; // Disable interaction
              }
          });
      }
  }
  });

  const how = new Swiper('.how__slider', {
    slidesPerView: 'auto',
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

      if (window.innerWidth < 962) {
        const services = new Swiper('.imgs-sliders', {
            modules: [FreeMode],
            spaceBetween: 15,
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
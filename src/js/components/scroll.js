import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 0.17,
    smoothMobile: true, 
    getDirection: true,
    getSpeed: true,
});

// scroll.on('scroll', () => {
//     window.wow.sync();
// });
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const illustations = gsap.utils.toArray(".projects-hero__illustration");

    if (illustations.length) {
        gsap.set(illustations, {
            rotate: (index) => index * 3.9,
            zIndex: (index) => illustations.length - index,
        });

        const tl = gsap.timeline({
            defaults: {
                duration: 1.5,
                ease: "power1.out"
            },
            scrollTrigger: {
                trigger: '.projects-hero__illustrations',
                start: window.innerWidth > 599 ? 'start start' : 'start 10%',
                end: window.innerWidth > 599 ? '+=2000 start' : '250% start',
                toggleActions: "play none resume reset",
                markers: false,
                id: "footer",
                scrub: true,
                pin: window.innerWidth > 599,
            }
        });

        tl.to(illustations, {
            duration: .1,
            rotate: (index) => index * 9.76,
        }, 0)
        .to(illustations[1], {
            xPercent: -400,
            transform: "matrix(0.81, -0.81, -0.45, 0.77, 0, 0)",
        }, ">")
        .to(illustations[3], {
            xPercent: -200,
            yPercent: -200,
            transform: "matrix(0.82, 0.17, 0.89, 0.96, 0, 0)",
        }, "<")
        .to(illustations[0], {
            xPercent: -50,
            yPercent: -300,
            transform: "matrix(0.77, 0.46, 0.81, 0.81, 0, 0)",
        }, "<")
        .to(illustations[2], {
            xPercent: 200,
            yPercent: -300,
            transform: "matrix(0.82, 0, 1, 1, 0, 0)",
        }, "<")
        .to(illustations[4], {
            xPercent: 400,
            transform: "matrix(0.87, 0.45, 0.53, 0.88, 0, 0)",
        }, "<");
    }
});
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const elements = [".elem1", ".elem2", ".elem3"];
const fastElements = [".elem4 img", ".elem5 img"];

ScrollTrigger.matchMedia({
    "(min-width: 963px)": function() {
        elements.forEach((elem) => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 150%",  // Start animation when the top of the element is 80% from the top of the viewport
                    end: "bottom 10%", // End animation when the bottom of the element is 10% from the top of the viewport
                    scrub: 1,          // Smooth scrubbing
                },
                y: 350,                // Move the element further up
                opacity: 0,
                ease: "power2.out",    // Ease for smooth animation
                duration: 1            // Default duration for most elements
            });
        });

        fastElements.forEach((elem) => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 250%",  // Start animation when the top of the element is 70% from the top of the viewport
                    end: "bottom 10%", // End animation when the bottom of the element is 10% from the top of the viewport
                    scrub: 1,          // Smooth scrubbing
                },
                y: 800,                // Move the element further up
                opacity: 0,
                ease: "power3.out",    // Ease for faster and sharper animation
                duration: 0.3         // Shorter duration for faster animation
            });
        });
    }
});

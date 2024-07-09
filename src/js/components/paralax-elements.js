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
                    start: "top 150%",  
                    end: "bottom 10%", 
                    scrub: 1,          
                },
                y: 350,                
                opacity: 0,
                ease: "power2.out",    
                duration: 1            
            });
        });

        fastElements.forEach((elem) => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 250%",  
                    end: "bottom 10%",
                    scrub: 1,          
                },
                y: 800,                
                opacity: 0,
                ease: "power3.out",    
                duration: 0.3         
            });
        });
    }
});

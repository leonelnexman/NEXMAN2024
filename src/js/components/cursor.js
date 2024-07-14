import gsap from 'gsap';

let cx;
let cy;
let clientX;
let clientY;
let dx;
let dy;
let tiltx;
let tilty;
let radius;
let degree;

const cursor = document.getElementById('cursor');
const follower = document.getElementById('aura');

function updateMe() {
    dx = clientX - cx;
    dy = clientY - cy;
    tiltx = dy / cy;
    tilty = dx / cx;
    radius = Math.sqrt(tiltx**2 + tilty**2);
    degree = radius * 12;
    gsap.to('.content', 1, { transform: `rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)` });
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;

    body.addEventListener('mousemove', e => {
        clientX = e.pageX;
        clientY = e.pageY;
        updateMe();

        if (cursor) {
            gsap.set(cursor, {
                x: clientX,
                y: clientY
            });
        }

        if (follower) {
            gsap.set(follower, {
                x: clientX - 24,
                y: clientY - 24
            });
        }

        if (cursor) cursor.classList.remove('hidden');
        if (follower) follower.classList.remove('hidden');
    });

    const addHoverEffect = (elements, className) => {
        elements.forEach(element => {
            element.addEventListener('mouseover', () => {
                if (cursor) cursor.classList.add(className);
                if (follower) follower.classList.add(className);
            });
            element.addEventListener('mouseout', () => {
                if (cursor) cursor.classList.remove(className);
                if (follower) follower.classList.remove(className);
            });
        });
    };

    addHoverEffect(document.querySelectorAll('a, button'), 'active');
    addHoverEffect(document.querySelectorAll('.swiper'), 'slider');
    addHoverEffect(document.querySelectorAll('.info-title'), 'info');
    addHoverEffect(document.querySelectorAll('.link-open'), 'open');

    if (body) {
        body.addEventListener('mouseout', () => {
            if (cursor) cursor.classList.add('hidden');
            if (follower) follower.classList.add('hidden');
        });
    }
});

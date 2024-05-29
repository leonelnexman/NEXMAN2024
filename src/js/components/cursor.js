import gsap from 'gsap';

let cx;
let cy;
let mouseX;
let mouseY;
let posX;
let posY;
let clientX;
let clientY;
let dx;
let dy;
let tiltx;
let tilty;
let request;
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
    gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` });
}

function mouseCoords(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;

    body.addEventListener('mousemove', e => {
        clientX = e.pageX;
        clientY = e.pageY;
        request = requestAnimationFrame(updateMe);
        mouseCoords(e);
        if(cursor) cursor.classList.remove('hidden');
        if(follower) follower.classList.remove('hidden');
    });

    const links = document.querySelectorAll('a, button');
    const swiperWrappers = document.querySelectorAll('.swiper');
    const infoTitles = document.querySelectorAll('.info-title');
    const linkOpens = document.querySelectorAll('.link-open');

    mouseX = 0;
    mouseY = 0;
    posX = 0;
    posY = 0;

    gsap.to({}, .01, {
        repeat: -1,
        onRepeat: () => {
            posX += (mouseX - posX) / 5;
            posY += (mouseY - posY) / 5;

            if(cursor) {
                gsap.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });
            }

            if(follower) {
                gsap.set(follower, {
                    css: {
                        left: posX - 24,
                        top: posY - 24
                    }
                });
            }
        }
    });

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', () => {
            if(cursor) cursor.classList.add('active');
            if(follower) follower.classList.add('active');
        });

        links[i].addEventListener('mouseout', () => {
            if(cursor) cursor.classList.remove('active');
            if(follower) follower.classList.remove('active');
        });
    }

    for (let i = 0; i < swiperWrappers.length; i++) {
        swiperWrappers[i].addEventListener('mouseover', () => {
            if(follower) follower.classList.add('slider');
        });

        swiperWrappers[i].addEventListener('mouseout', () => {
            if(follower) follower.classList.remove('slider');
        });
    }

    for (let i = 0; i < infoTitles.length; i++) {
        infoTitles[i].addEventListener('mouseover', () => {
            if(follower) follower.classList.add('info');
        });

        infoTitles[i].addEventListener('mouseout', () => {
            if(follower) follower.classList.remove('info');
        });
    }

    for (let i = 0; i < linkOpens.length; i++) {
        linkOpens[i].addEventListener('mouseover', () => {
            if(follower) follower.classList.add('open');
        });

        linkOpens[i].addEventListener('mouseout', () => {
            if(follower) follower.classList.remove('open');
        });
    }

    if(body) {
        body.addEventListener('mouseout', () => {
            if(cursor) cursor.classList.add('hidden');
            if(follower) follower.classList.add('hidden');
        });
    }
});

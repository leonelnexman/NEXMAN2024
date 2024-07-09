const modal = document.getElementById('myModal');
const btns = document.querySelectorAll('.open-modal');
const span = document.getElementsByClassName('close')[0];
const mobileText = document.querySelector('.mobile-text');
const {body} = document;

btns.forEach((btn) => {
    btn.onclick = function() {
        modal.classList.add('visible');
        body.classList.add('overflow-hidden');
    };
});

span.onclick = function() {
    modal.classList.remove('visible');
    body.classList.remove('overflow-hidden');
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove('visible');
        body.classList.remove('overflow-hidden');
    }
};

function updateMobileText() {
    if (window.innerWidth < 962) {
        mobileText.textContent = 'Отправить заявку!';
    } else {
        mobileText.textContent = 'Получить предложение';
    }
}

// Update text on window resize
window.onresize = updateMobileText;

// Initial check
updateMobileText();
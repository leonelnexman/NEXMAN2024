function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${  date.toUTCString()}`;
    document.cookie = `${name  }=${  value  };${  expires  };path=/`;
}

function getCookie(name) {
    const nameEQ = `${name  }=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function() {
    const cookiesBanner = document.querySelector('.cookies');
    if (getCookie('cookiesAccepted')) {
        cookiesBanner.classList.add('hidden');
    } else {
        cookiesBanner.classList.remove('hidden');
    }
};

document.querySelector('.cookies__btn').addEventListener('click', () => {
    setCookie('cookiesAccepted', 'true', 365);
    document.querySelector('.cookies').classList.add('hidden');
});
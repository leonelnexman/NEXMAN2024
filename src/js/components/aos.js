import AOS from 'aos';

AOS.init();

AOS.init({
    disable: 'mobile',
    offset: 120,
    delay: 0, 
    duration: 1000,
});

function removeAOSClasses() {
  if (window.innerWidth < 962) {
      // Находим все элементы с классом aos-init или aos-animate
      const elements = document.querySelectorAll('.aos-init, .aos-animate');
      
      // Удаляем классы aos-init и aos-animate у каждого элемента
      elements.forEach(element => {
          element.classList.remove('aos-init');
          element.classList.remove('aos-animate');
      });
  }
}

// Запуск функции при загрузке страницы
window.onload = removeAOSClasses;

// Запуск функции при изменении размера окна
window.onresize = removeAOSClasses;
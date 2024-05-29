import AOS from 'aos';

AOS.init();

AOS.init({
    // disable: 'mobile',
    offset: 120,
    delay: 0, 
    duration: 1000,
});

function removeAOSClasses() {
  if (window.innerWidth < 962) {
      const elements = document.querySelectorAll('.aos-init, .aos-animate');
      
      elements.forEach(element => {
          element.classList.remove('aos-init');
          element.classList.remove('aos-animate');
      });
  }
}

window.onload = removeAOSClasses;

window.onresize = removeAOSClasses;
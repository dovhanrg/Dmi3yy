function menuToggle () {
    const headerMenu = document.querySelector('.header-menu');
    headerMenu.classList.toggle('header-menu--hidden');
}

	
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
 
function nextSlide() {
    goToSlide(currentSlide+1);
}
 
function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

document.querySelector('.menu-toggle').addEventListener('click', menuToggle);
document.querySelectorAll('button.btn').forEach(element => element.addEventListener('click', nextSlide));
function menuToggle () {
    var headerMenu = document.querySelector('.header-menu');
    headerMenu.classList.toggle('header-menu--hidden');
}

	
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
 
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

document.querySelector('.prev').addEventListener('click', previousSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.menu-toggle').addEventListener('click', menuToggle);
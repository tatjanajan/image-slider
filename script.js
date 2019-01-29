const slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.slider__dot-nav li');
let currentSlide = 0,
    slideInterval = setInterval(nextSlide,2500);


function nextSlide() {
    goToSlide(currentSlide+1)
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    dots[currentSlide].className = '';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide slide--showing';
    dots[currentSlide].className = 'slider__dot--active';
}

//funkcija kojom pomožu točkica odabiremo pojedini slajd
function selectSlide(n) {
    clearInterval(slideInterval);
    goToSlide(n);
    slideInterval = setInterval(nextSlide,2500);
}




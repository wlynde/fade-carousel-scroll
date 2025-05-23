const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

let currentIndex = 0;
const totalSlides = slides.length;
const intervalTime = 8000; // 8 seconds
let autoSlideInterval;

function goToSlide(index) {
  currentIndex = index % totalSlides;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  goToSlide((currentIndex + 1) % totalSlides);
}

function prevSlide() {
  goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
}

function startAutoplay() {
  autoSlideInterval = setInterval(nextSlide, intervalTime);
}

function stopAutoplay() {
  clearInterval(autoSlideInterval);
  startAutoplay(); // restart after click
}

nextBtn.addEventListener('click', () => {
  stopAutoplay();
  nextSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoplay();
  prevSlide();
});

// Start the carousel
goToSlide(0);
startAutoplay();

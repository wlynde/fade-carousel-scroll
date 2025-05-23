const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

let currentIndex = 0;
const intervalTime = 8000; // 8 seconds
let autoSlideInterval;
const totalSlides = slides.length;

// Slide to a specific index
function goToSlide(index) {
  track.style.transition = 'transform 1s ease-in-out';
  track.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

// Jump instantly (no animation)
function jumpToStart() {
  track.style.transition = 'none';
  track.style.transform = `translateX(0%)`;
  currentIndex = 0;
}

// Looping autoplay
function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(currentIndex + 1); // Go to cloned slide
    setTimeout(jumpToStart, 1000); // After transition, snap to Slide 1
  }
}

function prevSlide() {
  if (currentIndex === 0) {
    jumpToStart();
  } else {
    goToSlide(currentIndex - 1);
  }
}

function startAutoplay() {
  autoSlideInterval = setInterval(nextSlide, intervalTime);
}

function resetAutoplay() {
  clearInterval(autoSlideInterval);
  startAutoplay();
}

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoplay();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoplay();
});

// Init
goToSlide(0);
startAutoplay();

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const leftArrow = document.querySelector(".carousel__button--left");
const rightArrow = document.querySelector(".carousel__button--right");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth);

//Position slides next to each other

// slides[0].style.left = 0;
// slides[1].style.left = slideWidth + "px";
// slides[2].style.left = 2 * slideWidth + "px";
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

//Click on left
leftArrow.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
});

//Click on right
rightArrow.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
});

//Nav indicator click

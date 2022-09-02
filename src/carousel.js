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

const updateDots = (currentDot, clickedDot) => {
  currentDot.classList.remove("current-slide");
  clickedDot.classList.add("current-slide");
};

const toggleArrows = (targetIndex) => {
  if (targetIndex === 0) {
    leftArrow.classList.add("hidden");
    rightArrow.classList.remove("hidden");
  } else if (targetIndex === slides.length - 1) {
    rightArrow.classList.add("hidden");
    leftArrow.classList.remove("hidden");
  } else {
    leftArrow.classList.remove("hidden");
    rightArrow.classList.remove("hidden");
  }
};

//Click on left
leftArrow.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;

  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;

  const nextIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  toggleArrows(nextIndex);
});

//Click on right
rightArrow.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;

  const targetIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  toggleArrows(targetIndex);
});

//Nav indicator click

dotsNav.addEventListener("click", (e) => {
  const clickedDot = e.target.closest("button");
  if (!clickedDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === clickedDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, clickedDot);
  toggleArrows(targetIndex);
});

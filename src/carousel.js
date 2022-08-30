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

//Click on left

//Click on right

//Nav indicator click

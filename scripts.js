const slider = document.querySelector(`.slides`);
const slides = document.querySelectorAll(`iframe`);
const controls = document.querySelectorAll(`.control`);
const portfolio = document.querySelector(`.portfolio`);

let currentIndex = 0;

function addIndicators() {
  const indicatorsContainer = document.createElement(`ol`);
  indicatorsContainer.classList.add(`slider__indicators`);

  for (let i = 0; i < slides.length; i++) {
    let sliderIndicatorsItem = document.createElement(`li`);
      sliderIndicatorsItem.setAttribute("data-slide", i);
      indicatorsContainer.appendChild(sliderIndicatorsItem);
    }
  portfolio.appendChild(indicatorsContainer);
};
addIndicators();
const indicatorItems = portfolio.querySelectorAll(`.slider__indicators > li`);
indicatorItems[currentIndex].classList.add(`active`);

function move(newIndex) {
  slides[newIndex].style.display = `block`;
  indicatorItems[currentIndex].classList.remove(`active`);
  indicatorItems[newIndex].classList.add(`active`);
  slides[currentIndex].style.animation = `fade 0.7s 1`;
  slides[newIndex].style.animation = `display 1s 1`;

  setTimeout(() => {
    slides[currentIndex].style.display = `none`;
    currentIndex = newIndex;
  }, 700);
}

function slide() {
  let firstSlide = 0;
  let lastSlide = slides.length - 1;

  let isLast = currentIndex < lastSlide;
  let next = isLast ? (+currentIndex + 1) : firstSlide;

  let isFirst = currentIndex === 0;
  let prev = isFirst ? lastSlide : (+currentIndex - 1);

  this.classList.contains(`next`) ? move(next) : move(prev);
}

function toMove(evt) {
  if (currentIndex === evt.target.dataset.slide) return;
  move(evt.target.dataset.slide);
}

controls.forEach(control => control.addEventListener(`click`, slide));
indicatorItems.forEach(indicatorItem => indicatorItem.addEventListener(`click`, toMove));

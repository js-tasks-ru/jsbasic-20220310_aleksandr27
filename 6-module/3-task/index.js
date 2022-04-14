import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideNumber = 0;
    this.elem = this.render();
    initCarousel.call(this);
  }

  render() {
    const carouselMain = document.createElement("div");
    carouselMain.className = "carousel";

    const carouselInner = document.createElement("div");
    carouselInner.className = "carousel__inner";

    carouselMain.append(carouselInner);

    const carousel = this.slides.map(item => {
      return `<div class="carousel__slide" data-id="${item.id}">
        <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`;
    }).join("");

    const arrows = createElement(`
      <div>
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
      </div>
    `);

    carouselMain.append(arrows);

    carouselInner.insertAdjacentHTML("beforeEnd", carousel);

    this.carouselInner = carouselInner;

    this.carouselInner.addEventListener("click", event => {
      if (event.target.tagName === "BUTTON") {
        let id = event.target.closest('[data-id]').dataset.id;
        const pressEvent = new CustomEvent("product-add", {
          detail: id,
          bubbles: true
        });
        this.carouselInner.dispatchEvent(pressEvent);
      }
    });

    return carouselMain;
  }
}

function initCarousel() {
  let carouselArrowRight = this.elem.querySelector(".carousel__arrow_right");
  let carouselArrowLeft = this.elem.querySelector(".carousel__arrow_left");
  let carouselInner2 = this.elem.querySelector(".carousel__inner");

  carouselArrowLeft.style.display = "none";

  function arrowsHideShow() {
    if (this.currentSlideNumber === 0) {
      carouselArrowLeft.style.display = "none";
    } else {
      carouselArrowLeft.style.display = "";
    }

    if (this.currentSlideNumber === this.slides.length - 1) {
      carouselArrowRight.style.display = "none";
    } else {
      carouselArrowRight.style.display = "";
    }
  }

  carouselArrowRight.addEventListener("click", () => {
    this.currentSlideNumber += 1;
    let offset = this.elem.offsetWidth * this.currentSlideNumber;
    carouselInner2.style.transform = `translateX(${-offset}px)`;
    arrowsHideShow.call(this);
  });

  carouselArrowLeft.addEventListener("click", () => {
    this.currentSlideNumber -= 1;
    let offset = this.elem.offsetWidth * this.currentSlideNumber;
    carouselInner2.style.transform = `translateX(${-offset}px)`;
    arrowsHideShow.call(this);
  });

}
import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
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
          <span class="carousel__price">€${item.price}</span>
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
        const pressEvent = new CustomEvent("product-add", {
          detail: slides.id,
          bubbles: true
        });
        this.carouselInner.dispatchEvent(pressEvent);
      }
    });

    document.addEventListener("DOMContentLoaded", function() {
      initCarousel() 
    });
    
    return carouselMain;
  }
}



function initCarousel() {
  let carouselArrowRight = document.querySelector(".carousel__arrow_right");
  let carouselArrowLeft = document.querySelector(".carousel__arrow_left");
  let carouselInner2 = document.querySelector(".carousel__inner");
  let carouselSlide = document.querySelector(".carousel__slide");
  let carouselImg = document.querySelectorAll(".carousel__img");
  let offsetWidth = carouselSlide.offsetWidth;
  let offset = 0;
  let offsetMax = (carouselImg.length - 1) * offsetWidth ;

  carouselArrowLeft.style.display = "none";

  function arrowsHideShow() {
    if (offsetMax <= offset) {
      carouselArrowRight.style.display = "none";
    } else if (offsetMax >= offset) {
      carouselArrowRight.style.display = "flex";
    }

    if ( offset <= 0){
      carouselArrowLeft.style.display = "none";
    } else if (offsetMax >= offset) {
      carouselArrowLeft.style.display = "flex";
    }
  }

  carouselArrowRight.addEventListener("click", function() {
    offset += offsetWidth;
    carouselInner2.style.transform = `translateX(${-offset}px)`;
    arrowsHideShow()
  });

  carouselArrowLeft.addEventListener("click", function() {
    offset -= offsetWidth;
    carouselInner2.style.transform = `translateX(${-offset}px)`;
    arrowsHideShow()
  });

}

function initCarousel() {
  let carouselArrowRight = document.querySelector(".carousel__arrow_right");
  let carouselArrowLeft = document.querySelector(".carousel__arrow_left");
  let carouselInner = document.querySelector(".carousel__inner");
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
    carouselInner.style.transform = `translateX(${-offset}px)`;
    arrowsHideShow()
  });

  carouselArrowLeft.addEventListener("click", function() {
    offset -= offsetWidth;
    carouselInner.style.transform = `translateX(${-offset}px)`;
    arrowsHideShow()
  });

}

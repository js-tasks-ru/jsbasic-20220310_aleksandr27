import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }

  render () {
    let ribbon = document.createElement("div");
    ribbon.className = "ribbon";

    let ribbonInner = document.createElement("nav");
    ribbonInner.className = "ribbon__inner";

    const categor = this.categories.map(item => {
      return `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`
    }).join("");

    const arrowLeft = createElement(`
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);

    const arrowRight = createElement(`
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);

    ribbon.append(arrowLeft);
    ribbon.append(arrowRight);
    ribbon.append(ribbonInner);

    ribbonInner.insertAdjacentHTML("beforeEnd", categor);

    this.ribbon = ribbon;

    this.ribbon.addEventListener("click", event => {
      if (event.target.classList.contains("ribbon__item")) {
        let id = event.target.closest('[data-id]').dataset.id;
        const pressEvent = new CustomEvent("ribbon-select", {
          detail: id,
          bubbles: true
        });
        this.ribbon.dispatchEvent(pressEvent);
      }
    });

    this.ribbon.addEventListener("click", event => {
      let ribbonarrowright = document.querySelector(".ribbon__arrow_right");
      let ribbonarrowleft = document.querySelector(".ribbon__arrow_left");

      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      
      if (event.target.classList.contains("ribbon__arrow_right")) {
        console.log("Click right");
        ribbonInner.scrollBy(350, 0);
      }

      if (event.target.classList.contains("ribbon__arrow_left")) {
        console.log("Click left");
        ribbonInner.scrollBy(-350, 0);
      }

      if ( scrollLeft > 0 ) {
        ribbonarrowleft.classList.add("ribbon__arrow_visible");
      } else {
        ribbonarrowleft.classList.remove("ribbon__arrow_visible");
      }

      if (scrollRight < 1 ) {
        ribbonarrowright.classList.remove("ribbon__arrow_visible");
      } else {
        ribbonarrowright.classList.add("ribbon__arrow_visible");
      }

    });

    return ribbon;
  }
}

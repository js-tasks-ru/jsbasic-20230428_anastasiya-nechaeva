import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
  }

  render() {
    const elem = createElement(this.template());
    
    elem.querySelectorAll('.carousel__slide').forEach(slide => {
      slide.querySelector('.carousel__button').addEventListener('click', function () {
        elem.dispatchEvent(new CustomEvent("product-add", {
          detail: slide.dataset.id,
          bubbles: true
        }));
      });
    });

    const left = elem.querySelector('.carousel__arrow_left');
    left.style.display = 'none';

    const right= elem.querySelector('.carousel__arrow_right');
    const carousel = elem.querySelector('.carousel__inner');

    let currentOffsetWidth = 0;
    let currentImg = 1;

    right.addEventListener('click', () => {
      currentOffsetWidth -= carousel.offsetWidth;
      carousel.style.transform = `translateX(${currentOffsetWidth}px)`;
      currentImg += 1;

      if (currentImg >= Array.from(this.slides).length) {
        right.style.display = 'none';
      } else {
        right.style.display = '';
      }
      if (currentImg < 1) {
        left.style.display = 'none';
      } else {
        left.style.display = '';
      }
    });

    left.addEventListener('click', () => {
      currentOffsetWidth += carousel.offsetWidth;
      carousel.style.transform = `translateX(${currentOffsetWidth}px)`;
      currentImg -= 1;

      if (currentImg >= 4) {
        right.style.display = 'none';
      } else {
        right.style.display = '';
      }
      if (currentImg <= 1) {
        left.style.display = 'none';
      } else {
        left.style.display = '';
      }
    });

    
    return elem;
  }

  template() {  
    const arrowsTemplate = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `;

    const slidesTemplate = this.slides.map(slide => {
      return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `;
    }).join('');

    return `
      <div class="carousel">
        ${arrowsTemplate}
        <div class="carousel__inner">
          ${slidesTemplate}
        </div>
      </div>
    `;
  }
}
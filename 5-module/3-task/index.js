function initCarousel() {
  let position = 0
  const carouselInner = document.querySelector('.carousel__inner');
  const right = document.querySelector('.carousel__arrow_right');
  const left = document.querySelector('.carousel__arrow_left');
  const carouselSlide = document.querySelector('.carousel__slide');
  const width = carouselSlide.offsetWidth;

  function positionCheck() 
  {
    if (position == 0) {
      right.style.display = '';
      left.style.display = 'none';
    } 
    else if (position == 3)
    {
      left.style.display = '';
      right.style.display = 'none';
    }
  }

  positionCheck();

  right.addEventListener('click', function () {
    position = position + 1
    carouselInner.style.transform = 'translateX(-'+ position * width +'px)';
    positionCheck();
  });

  left.addEventListener('click', function () {
    position = position - 1
    carouselInner.style.transform = 'translateX(-'+ position * width +'px)'
    positionCheck();
  });
}


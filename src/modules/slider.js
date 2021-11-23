const slider = () => {
  const slider = document.querySelector('.slider');

  const getGoods = async () => {
    const result = await fetch('./db.json');
    if (!result.ok) {
      throw 'Error: ' + result.status + result.statusText;
    }
    return await result.json();
  };

  const renderSlides = () => {
    const slide = slider.querySelectorAll('.slider__item');
    let currentSlide = 0;

    slider.addEventListener('click', (event) => {
      let target = event.target;
      slide[currentSlide].classList.remove('slider__item--active');

      if (target.classList.contains('slider__button--next')) {
        currentSlide++;
      } else if (target.classList.contains('slider__button--prev')) {
        currentSlide--;
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      slide[currentSlide].classList.add('slider__item--active');
    });
  };

  getGoods().then(renderSlides);
};

export default slider;
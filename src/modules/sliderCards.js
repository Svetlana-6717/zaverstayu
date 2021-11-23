const sliderCards = () => {
  const sliderWrapper = document.querySelector('.slider-wrapper');

  const getGoods = async () => {
    const result = await fetch('./db.json');
    if (!result.ok) {
      throw 'Error: ' + result.status + result.statusText;
    }
    return await result.json();
  };

  const addToCart = (cartItem) => {
    const cartArray = localStorage.getItem('cart') ?
      JSON.parse(localStorage.getItem('cart')) : [];

    if (cartArray.some((item) => item.id === cartItem.id)) {
      cartArray.map((item) => {
        if (item.id === cartItem.id) {
          item.count++;
        }
        return item;
      })
    } else {
      cartArray.push(cartItem);
    }
    localStorage.setItem('cart', JSON.stringify(cartArray));
  };

  const createCard = (data) => {

    const { name, text, size, price, img, id } = data;

    const card = document.createElement('li');
    card.className = 'slider__item';

    card.innerHTML = `
    <div class="slider-info">
      <h3 class="slider-info__title">${name}</h3>
      <p class="slider-info__text">${text}</p>
      <span class="slider-info__size">${size} см</span>
      <span class="slider-info__price">${price} руб.</span>
      <button class="button slider-info__button" type="button" data-id=${id}>Заказать</button>
    </div>
    <div class="slider-image">
      <img src="img/popular/${img}" alt="${name}" width="387" height="438">
    </div>
    `;

    card.querySelector('.slider-info__button').addEventListener('click', () => {
      const cartItem = { name, price, id, img, count: 1 };
      addToCart(cartItem);
    })

    return card;
  };

  const renderCards = (data) => {

    sliderWrapper.textContent = '';
    const cards = data.map(createCard);

    cards.forEach(card => {
      sliderWrapper.append(card);
    })
    cards[0].classList.add('slider__item--active');
  };

  getGoods().then(renderCards);
}

export default sliderCards;
const basket = () => {
  const basketWrapper = document.querySelector('.basket__wrapper');
  const basketList = document.querySelector('.basket__list');
  const basketSubtotalAmount = document.querySelector('.basket__subtotal-amount');

  const getGoods = async () => {
    const result = await fetch('./db.json');
    if (!result.ok) {
      throw 'Error: ' + result.status + result.statusText;
    }
    return await result.json();
  };

  const incrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    cartArray.map((item) => {
      if (item.id === id) {
        item.count++;
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(cartArray));
    renderBasket(cartArray);
  };

  const decrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    cartArray.map(item => {
      if (item.id === id) {
        if (item.count > 1) {
          item.count--;
        }
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(cartArray));
    renderBasket(cartArray);
  };

  const deleteItem = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    const newArr = cartArray.filter(item => id !== item.id);
    localStorage.setItem('cart', JSON.stringify(newArr));
    renderBasket(newArr);
  };

  const renderBasket = () => {
    if (!localStorage.getItem('cart')) {
      basketWrapper.classList.add('basket__wrapper--empty');
      basketWrapper.textContent = 'Корзина пуста';
    } else {
      basketList.textContent = '';
      const cartArray = JSON.parse(localStorage.getItem('cart'));
      let totalPrice = 0;

      cartArray.forEach((item) => {
        const { id, name, price, count, img } = item;
        const li = document.createElement('li');
        li.className = 'basket__item';
        li.dataset.id = id;

        li.innerHTML = `
        <div class="basket__image">
          <img src="img/popular/${img}" alt="${name}" width="140" height="140"></img>
        </div>
        <div class="basket__details">
          <h3 class="basket__details-title">${name}</h3>
          <div class="basket__details-content">
            <div class="basket__buttons">
            ${count > 1 ?
            `<button class="basket__btn basket__btn-dec"></button>` :
            `<button class="basket__btn basket__btn-delete"></button>`}
              <input class="basket__counter" type="text" value="${count}">
              <button class="basket__btn basket__btn-inc"></button>
            </div>
            <span class="basket__total">${price * count} &#8381;</span>
          </div>
        </div> 
      `;

        basketList.append(li);
      });

      totalPrice = cartArray.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
      basketSubtotalAmount.textContent = totalPrice + ' ₽';
    }

    if (basketList.textContent === '') {
      basketWrapper.classList.add('basket__wrapper--empty');
      basketWrapper.textContent = 'Корзина пуста';
      localStorage.removeItem('cart');
    }
  };

  basketList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
      const id = target.closest('.basket__item').dataset.id;

      if (target.classList.contains('basket__btn-inc')) {
        incrementCount(id);
      } else if (target.classList.contains('basket__btn-dec')) {
        decrementCount(id);
      } else if (target.classList.contains('basket__btn-delete')) {
        deleteItem(id);
      }
    }
  });

  getGoods().then(renderBasket);
};

export default basket;
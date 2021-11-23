const cartModal = () => {
  const cartBtn = document.querySelector('.navbar__btn-cart');
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartList = cartOverlay.querySelector('.cart__list');
  const cartBtnTotal = cartOverlay.querySelector('.cart__button-total');
  const menu = document.querySelector('.navbar-menu');
  const btnMenu = document.querySelector('.navbar__btn-menu');

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
    renderCart(cartArray);
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
    renderCart(cartArray);
  };

  const deleteItem = (id) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    const newArr = cartArray.filter(item => id !== item.id);
    localStorage.setItem('cart', JSON.stringify(newArr));
    renderCart(newArr);
  };

  const renderCart = () => {
    cartList.textContent = '';
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    let totalPrice = 0;

    cartArray.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'cart__item';
      li.dataset.id = item.id;

      li.innerHTML = `
        <h3 class="cart__item-title">${item.name}</h3>
        <div class="cart__details">
            <div class="cart__buttons">
            ${item.count > 1 ?
          `<button class="cart__btn cart__btn-dec"></button>` :
          `<button class="cart__btn cart__btn-delete"></button>`}
              <input class="cart__counter" type="text" value="${item.count}">
              <button class="cart__btn cart__btn-inc"></button>
            </div>
            <span class="cart__total">${item.price * item.count} &#8381;</span>
          </div>       
      `;

      cartList.append(li);
    });

    totalPrice = cartArray.reduce((sum, item) => {
      return sum + item.price * item.count;
    }, 0);
    cartBtnTotal.textContent = totalPrice + ' ₽';

    if (cartList.textContent === '') {
      cartList.textContent = 'Корзина пуста';
      localStorage.removeItem('cart');
    }
  };

  const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    document.body.dbScrollY = window.scrollY;
    document.body.style.cssText = `
      position: fixed;
      top: ${-window.scrollY}px;
      left: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      padding-right: ${widthScroll}px;
    `
  };

  const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
      top: document.body.dbScrollY,
    })
  };

  const cartModalOpen = () => {
    if (localStorage.getItem('cart')) {
      renderCart(JSON.parse(localStorage.getItem('cart')));
      menu.classList.remove('navbar-menu--visible');
      btnMenu.classList.remove('navbar__btn-menu--active');
      cartOverlay.classList.add('cart-overlay--open');
      disableScroll();
    }
    else {
      alert('Корзина пуста');
    }
  };

  const cartModalClose = () => {
    cartOverlay.classList.remove('cart-overlay--open');
    enableScroll();
  };

  cartBtn.addEventListener('click', cartModalOpen);

  cartOverlay.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('.cart__button-close') || target.matches('.cart-overlay')) {
      cartModalClose();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      cartModalClose();
    }
  });

  cartList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
      const id = target.closest('.cart__item').dataset.id;

      if (target.classList.contains('cart__btn-inc')) {
        incrementCount(id);
      } else if (target.classList.contains('cart__btn-dec')) {
        decrementCount(id);
      } else if (target.classList.contains('cart__btn-delete')) {
        deleteItem(id);
      }
    }
  });

  getGoods();
};

export default cartModal;
const sendForm = () => {
  const basketForm = document.querySelector('.basket__form');
  const inputAll = basketForm.querySelectorAll('.form__input');
  const basketWrapper = document.querySelector('.basket__wrapper');

  const errorMessage = 'Что то пошло не так...';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с вами свяжемся.';
  let isValidate = false;
  const cartArray = JSON.parse(localStorage.getItem('cart'));

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 20px; color: #AE7C78';

  const resetBasket = () => {
    basketWrapper.classList.add('basket__wrapper--empty');
    basketWrapper.textContent = 'Корзина пуста';
    localStorage.removeItem('cart');
  };

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };

  basketForm.addEventListener('submit', (event) => {
    event.preventDefault();

    inputAll.forEach(elem => {
      if (elem.value === '') {
        elem.nextElementSibling.textContent = 'Поле обязательно для заполнения';
        isValidate = false;
      } else {
        elem.nextElementSibling.textContent = '';
        isValidate = true;
      }
    });

    if (isValidate) {
      basketForm.append(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(basketForm);
      let body = {};
      body.cart = cartArray;

      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          if (!response.ok) {
            throw 'Error: ' + result.status + result.statusText;
          }
          basketWrapper.append(statusMessage);
          statusMessage.textContent = successMessage;
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.log(error);
        });
      resetBasket();
      basketForm.reset();
    }
  });
};

export default sendForm;
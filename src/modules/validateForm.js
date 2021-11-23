import maskPhone from './maskPhone';

const validateForm = () => {
  const formInput = document.querySelectorAll('.form__input');

  const regName = /^[А-Яа-яЁё]{2,16}$/;
  const regEmail = /[a-z]+@[a-z]+\.[a-z]{2,4}$/;

  maskPhone('#phone');

  const validate = (item) => {
    if (item.name === 'name') {
      if (!regName.test(item.value) && item.value !== '') {
        item.nextElementSibling.textContent = 'Только кирилица';
      } else if (item.value === '') {
        item.nextElementSibling.textContent = 'Поле обязательно для заполнения';
      } else {
        item.nextElementSibling.textContent = '';
      }
    }

    if (item.name === 'email') {
      if (!regEmail.test(item.value) && item.value !== '') {
        item.nextElementSibling.textContent = 'Пожалуйста, введите корректный email адрес';
      } else if (item.value === '') {
        item.nextElementSibling.textContent = 'Поле обязательно для заполнения';
      } else {
        item.nextElementSibling.textContent = '';
      }
    }
  };

  formInput.forEach((item) => {
    item.addEventListener('blur', () => {
      validate(item);
    })
  })

  formInput.forEach((item) => {
    item.addEventListener('input', () => {
      validate(item);
    })
  })
};

export default validateForm;
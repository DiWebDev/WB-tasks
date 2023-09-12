// Форма
const formEl = document.querySelector('.form');
// Инпуты 
const formInput = document.querySelectorAll('.form__input')

// Функция отправки формы 
formEl.addEventListener('submit', e => {
   // чтобы не перезагружалась страница
   e.preventDefault();
   // FormData принимает HTML форму, и собирает данные с инпутов у которых есть атрибут name
   const formData = new FormData(formEl);
   // принимает список пар ключ-значение и возвращает новый объект
   const data = Object.fromEntries(formData);
   fetch('https://64f1effa0e1e60602d24775e.mockapi.io/formData', {
      method: 'POST',
      // формат 
      headers: {
         'Content-Type': 'application/json'
      },
      // данные, которые будут отправлены
      body: JSON.stringify(data)
   });
   // сброс к дефолтным значениям всех полей формы
   formEl.reset();
})
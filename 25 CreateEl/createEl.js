// Задача: Создать и добавить стиль для элемента:
// Напишите функцию, которая создает новый элемент, 
// добавляет его в DOM и 
// устанавливает для него стиль с помощью CSS.



// Контейнер карточек с пользователями 
const users = document.querySelector('.users');
// Форма
const formEl = document.querySelector('.form');
// Инпуты 
const formInput = document.querySelectorAll('.form__input')

//функция, которая создает новый элемент и добавляет его в DOM 
function postData(data) {
   const { username, userLastName } = data;
   let result = `<div class="users__card">
   <p>Name: <span class="red">${username}</span></p>
   <p>Last Name: ${userLastName}</p>
   </div>`
   users.innerHTML += result
}

// Функция отправки формы (данные никуда не отправляет, только срабатывает функция публикации)
formEl.addEventListener('submit', e => {
   // чтобы не перезагружалась страница
   e.preventDefault();
   // FormData принимает HTML форму, и собирает данные с инпутов у которых есть атрибут name
   const formData = new FormData(formEl);
   // принимает список пар ключ-значение и возвращает новый объект
   const data = Object.fromEntries(formData);
   postData(data);
   // сброс к дефолтным значениям всех полей формы
   formEl.reset();
})


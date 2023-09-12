// Анализатор сложности пароля:
// создайте функцию, которая оценивает сложность
// введенного пользователем пароля.
// Необходимо анализировать длину пароля,
// использование различных символов,
// наличие чисел и букв в разных регистрах.
// Выведите пользователю оценку сложности
// пароля и предложите улучшения,
// если пароль слишком слабый.

let password = document.getElementById("pswrd");
console.log(password);
// глазик
let toggleBtn = document.getElementById("toggleBtn");
// console.log(toggleBtn)
// Строчная буква
let lowerEl = document.getElementById("lower");
// console.log(lower)
// Заглавная буква
let upperEl = document.getElementById("upper");
// console.log(upper)
// Число
let digitEl = document.getElementById("digit");
// console.log(digit)
// Знаки
let charsEl = document.getElementById("char");
// console.log(chars)
//  Длина
let lengthEl = document.getElementById("length");
// console.log(length)
// Кнопка регистрации
let btnEl = document.getElementById("btn");
let checkerEl = document.getElementById("checker");

// Проверка пароля
function checkPassword(inputValue) {
   // регулярные выражения
   // нижний регистр
   const lower = new RegExp("(?=.*[a-z])");
   // верхний регистр
   const upper = new RegExp("(?=.*[A-Z])");
   // число
   const number = new RegExp("(?=.*[0-9])");
   // знаки
   const specialChars = new RegExp("(?=.*[!@#$%^&*])");
   // длина
   const length = new RegExp("(?=.{8,})");

   // Проверка на нижний регистр
   if (lower.test(inputValue)) {
      lowerEl.classList.add("valid");
   } else {
      lowerEl.classList.remove("valid");
   }

   // Проверка на верхний регистр
   if (upper.test(inputValue)) {
      upperEl.classList.add("valid");
   } else {
      upperEl.classList.remove("valid");
   }

   // Проверка на числа
   if (number.test(inputValue)) {
      digitEl.classList.add("valid");
   } else {
      digitEl.classList.remove("valid");
   }

   // Проверка на знаки
   if (specialChars.test(inputValue)) {
      charsEl.classList.add("valid");
   } else {
      charsEl.classList.remove("valid");
   }

   // Проверка на длину
   if (length.test(inputValue)) {
      lengthEl.classList.add("valid");
   } else {
      lengthEl.classList.remove("valid");
   }

   // количество активных классов
   let validation = document.querySelectorAll(".valid");
   pswrdStength(validation);
}

function pswrdStength(data) {
   if (data.length >= 5) {
      btnEl.disabled = false;
      checkerEl.innerHTML = `<p class="strong">Ваш пароль очень сильный, он защитит вас от злодеев! 😍🥵😎</p>`;
      btnEl.classList.add("active");
   } else if (data.length < 5 && data.length > 0) {
      checkerEl.innerHTML = `<p class="weak">Ваш пароль очень слабый, давайте сделаем его сильнее! 💪</p>`;
      btnEl.disabled = true;
      btnEl.classList.remove("active");
   } else if (data.length === 0) {
      checkerEl.innerHTML = `<p>Давайте придумаем very strong пароль</p>`;
      btnEl.disabled = true;
      btnEl.classList.remove("active");
   }
}

// Функция показа пароля
toggleBtn.onclick = function () {
   if (password.type === "password") {
      password.setAttribute("type", "text");
      toggleBtn.classList.add("hide");
   } else {
      password.setAttribute("type", "password");
      toggleBtn.classList.remove("hide");
   }
};

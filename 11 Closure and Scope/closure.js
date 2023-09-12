// Задача о замыканиях и области видимости:
// напишите функцию, которая возвращает другую функцию.
// Внутренняя функция должна иметь доступ к переменной, определенной во внешней функции,
// даже после того, как внешняя функция завершила свое выполнение.

//* 1 Пример
function externalFnc(data) {
   // переменная внешней функции
   const greeting = data;
   // return для запуска функции позже, за пределами внешней функции
   return function internalFnc(name) {
      // переменная внутренней функции'
      return `${greeting} ${name}!`;
   };
}

// присваиваем функцию переменной
// получаем доступ к внутренней функции
// внешняя функция завершается
const goodMorning = externalFnc("Доброе утро");
const goodAfternoon = externalFnc("Добрый день");
const goodEvening = externalFnc("Добрый вечер");
console.log(goodMorning("Диана"));
console.log(goodAfternoon("Руслан"));
console.log(goodEvening("Баобей"));

//* 2 Пример
const btnOne = document.querySelector(".btn1");
const btnTwo = document.querySelector(".btn2");

function clickBtn(button) {
   let timesClicked = 0;
   return function btnTimesClicked() {
      timesClicked++;
      if (timesClicked > 1) {
         return `${button} has been clicked ${timesClicked} times`;
      } else {
         return `${button} has been clicked ${timesClicked} time`;
      }
   };
}

const buttonOne = clickBtn("Button One");
const buttonTwo = clickBtn("Button Two");

btnOne.addEventListener("click", () => {
   //console.log(buttonOne());
   document.getElementById("demoOne").innerHTML = buttonOne();
});

btnTwo.addEventListener("click", () => {
   //console.log(buttonTwo());
   document.getElementById("demoTwo").innerHTML = buttonTwo();
});

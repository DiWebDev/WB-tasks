//объявляем массив `functions`, в котором содержатся функции для вызова.
const functions = [
  () => {
    console.log(1);
  },
  () => {
    console.log(2);
  },
  () => {
    console.log(3);
  },
];

//Определяем функцию `runFunctionsSequentially`, которая будет вызывать функции последовательно.
function runFunctionsSequentially(functions) {
// Вспомогательная функция `runFunction`, принимает индекс текущей функции в массиве. Если индекс меньше длины массива функций, то вызывается функция с текущим индексом, а затем рекурсивно вызывается `runFunction` с увеличенным индексом.
  const runFunction = (index) => {
    if (index < functions.length) {
      functions[index]();
      runFunction(index + 1);
    }
  };
  //"runFunction(0)" запускаеn процесс последовательного вызова функций с начальным индексом 0.
  runFunction(0);
}

runFunctionsSequentially(functions);

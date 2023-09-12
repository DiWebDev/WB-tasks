// Функция "callFunctionsAndGetResults", принимает массив функций "functions". Внутри функции определена новая функция, которая возвращает результаты вызова каждой функции из переданного массива.
function callFunctionsAndGetResults(functions) {
    // Внутри новой функции создается пустой массив "results", который будет содержать результаты вызова функций.
    return function (...args) {
      const results = [];
      // В цикле `for` вызывается каждая функция из массива "functions" с помощью оператора расширения `...args`, передавая все аргументы, полученные при вызове новой функции.
      for (let i = 0; i < functions.length; i++) {
        const result = functions[i](...args);
        results.push(result);
      }
       //новая функция возвращает массив "results", содержащий результаты вызова каждой функции.
      return results;
    };
  }

//Создаем три простые функции: mulltiplyByTwo", "subtractThree" и "addTen". 
function multiplyByTwo(num) {
return num * 2;
}
function subtractThree(num) {
return num - 3;
}
function addTen(num) {
return num + 10;
}

//создаем массив "functions", содержащий функции.
const functions = [multiplyByTwo, subtractThree, addTen];

//Передаем массив в функцию "callFunctionsAndGetResults", чтобы получить новую функцию "resultFunction".
const resultFunction = callFunctionsAndGetResults(functions);

//Вызываем "resultFunction" с аргументом 5, и она вызывает каждую функцию из массива "functions", возвращая массив результатов [10, 2, 15], который выводидтся в консоль.
const results = resultFunction(5); // Вызываем новую функцию с аргументом 5
console.log(results); // Выводит [10, 2, 15]
  
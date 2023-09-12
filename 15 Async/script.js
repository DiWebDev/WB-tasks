// функция `asyncFunction` является асинхронной, так как использует ключевое слово `async`. 
async function asyncFunction() {
    try {
      // Внутри функции, используем ключевое слово `await` для ожидания выполнения других асинхронных операций.
      const result1 = await asyncOperation1();
      const result2 = await asyncOperation2(result1);
      const result3 = await asyncOperation3(result2);
      
      return result3;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
//имитируем асинхронные операции, используя `setTimeout` и `Promise`.
// Каждая операция задерживается на 1 секунду и возвращает результат с помощью `resolve`.
  function asyncOperation1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Result 1');
      }, 1000);
    });
  }
  function asyncOperation2(input) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Result 2: ' + input);
      }, 1000);
    });
  }
  function asyncOperation3(input) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Result 3: ' + input);
      }, 1000);
    });
  }
  
// вызываем `asyncFunction` и используем метод `then` для обработки результата выполнения. В случае возникновения ошибки, мы используем метод `catch` для обработки ошибки.
  asyncFunction()
  .then((result) => {
    console.log('Result:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

const MathX = {
  // функция вычисление N-го числа в ряду Фибоначчи

  fibNumber: function (n) {
    // определяем переменыне равные первым числам в ряду фибоначи
    let a = 1;
    let b = 1;
    // С помошью цикла находим и записываем искомое чило в ряду фибоначи
    //Цикл начинается с i=3, потому что первое и второе значения последовательности заданы a=1, b=1.
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  },
  fibSeries: function (n) {
    let fibSeries = [0, 1]; // начальные значения ряда Фибоначчи
    let fibNum = 0;
  
    while (fibNum <= n) {
      fibNum =
        fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2];

      if (fibNum <= n) {
        fibSeries.push(fibNum);
      }
    }

    return fibSeries;
  },
  primeNumber: function (n) {
    //Массив для отсеивания чисел которые не являются простыми
    const seive = []
    // Массив для записи простых чисел
    const primes = []
    let max = Math.pow(n, 2);
    for(let i = 2; i <= max; i++){
      if(!seive[i]){
        // добавляем текущее число в массив primes
        primes.push(i)

        for(let j = i * i; j <= max; j += i){
          seive[j] = true
        }
      }
    }
    // находим нужное значение по индексу
    return primes[n - 1]

  },
  primeNumbersSeries: function (n) {
    //Массив для отсеивания чисел которые не являются простыми
    const seive = []
    // Массив для записи простыъ чисел
    const primes = []

    for(let i = 2; i <= n; i++){
      if(!seive[i]){
        // добавляем текущее число в массив primes
        primes.push(i)

        for(let j = i * i; j <= n; j += i){
          seive[j] = true
        }
      }
    }
    return primes
  },
};


console.log(MathX.fibNumber(77));
console.log(MathX.fibSeries(1000));
console.log(MathX.primeNumber(53))
console.log(MathX.primeNumbersSeries(20));






//функция `recursiveDocumentWrite()` вызывает `document.write()` рекурсивно до тех пор, пока не будет достигнута ошибка "Maximum call stack size exceeded"


let writeCount = 0;
function recursiveDocumentWrite() {
  try {
    // В каждом вызове мы увеличиваем счетчик `writeCount` и выводим информацию о количестве вызовов в консоль, когда ошибка возникает.
    writeCount++;
    document.write('Calling document.write() ' + writeCount + ' time.\n');
    recursiveDocumentWrite();
  } catch (error) {
    console.error('Maximum call stack size exceeded. Total document.write() calls:', writeCount);
  }
}

//большое количество вызовов приводит к переполнению стека вызовов. По этой причине количество вызовов функции document.write() ограничено.

recursiveDocumentWrite();

// функция записывает тестовые данные в localStorage, увеличивая размер данных в каждой итерации до тех пор, пока не будет достигнуто максимальное значение.
function getMaxLocalStorageSize() {
   try {
     const testData = 'a'.repeat(1024 * 1024); // Создаем строку из 1 МБ данных
     let dataSize = testData.length;
     let maxDataSize = dataSize;
     while (true) {
       try {
         localStorage.setItem('testData', testData.repeat(Math.ceil(dataSize / testData.length)));
         maxDataSize = dataSize;
         dataSize *= 2;
       } catch (error) {
         break;
       }
     }
     //Затем удаляет записанные данные и возвращает максимальный объем данных, который можно записать в localStorage.
     localStorage.removeItem('testData');
     return maxDataSize;
   } catch (error) {
     console.error('LocalStorage is not supported.');
     return 0;
   }
 }

 const maxLocalStorageSize = getMaxLocalStorageSize();
console.log(`Максимальный объем данных, который можно записать в localStorage: ${maxLocalStorageSize} байт.`);
 // размер данных в localStorage может отличаться в разных браузерах и на разных устройствах. 
 // функция дает приблизительное значение максимального объема данных для текущего браузера и устройства.

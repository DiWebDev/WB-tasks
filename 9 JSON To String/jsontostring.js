function jsonToString(jsonData) {
  let jsonString = ''; // строка, в которую будем сохранять преобразованный JSON
  // функция для рекурсивного обхода структуры JSON и преобразования в строку
  function stringify(obj) {
    if (typeof obj === 'string') { // если значение является строкой
      jsonString += `"${obj}"`; // обрамляем его кавычками и добавляем к строке
    } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) { // если значение является числом, булевым или null
      jsonString += obj; // просто добавляем его к строке
    } else if (Array.isArray(obj)) { // если значение является массивом
      jsonString += '['; // добавляем открывающую скобку
      for (let i = 0; i < obj.length; i++) { // проходим по элементам массива
        stringify(obj[i]); // вызываем функцию stringify для каждого элемента
        if (i !== obj.length - 1) { // если элемент не последний, добавляем запятую
          jsonString += ',';
        }
      }
      jsonString += ']'; // добавляем закрывающую скобку
    } else if (typeof obj === 'object') { // если значение является объектом
      jsonString += '{'; // добавляем открывающую скобку
      let keys = Object.keys(obj); // получаем ключи объекта
      for (let i = 0; i < keys.length; i++) { // проходим по ключам
        jsonString += `"${keys[i]}":`; // добавляем ключ в кавычках и двоеточие
        stringify(obj[keys[i]]); // вызываем функцию stringify для значения по ключу
        if (i !== keys.length - 1) { // если ключ не последний, добавляем запятую
          jsonString += ',';
        }
      }
      jsonString += '}'; // добавляем закрывающую скобку
    }
  }
  stringify(jsonData); // вызываем функцию stringify для исходного JSON
  return jsonString; // возвращаем преобразованную строку JSON
}
 const data = {
   name: 'John',
   gender:'male',
   city: 'New York',
 };
 const jsonString = jsonToString(data);
 console.log(jsonString);
 
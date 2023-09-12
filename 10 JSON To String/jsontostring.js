// Реализовать функцию конвертации JSON в строку
// Функция `convertJSONToString` принимает объект JSON и рекурсивно обрабатывает его свойства и значения.
function convertJSONToString(json) {
   // Если значение является строкой, оно обертывается в двойные кавычки
   if (typeof json === 'string') {
     return `"${json}"`;
   // Если значение является числом, логическим значением или `null`, оно преобразуется в строку с помощью `String()`.
   } else if (typeof json === 'number' || typeof json === 'boolean' || json === null) {
     return String(json);
   // Если значение является массивом, каждый элемент рекурсивно обрабатывается и результаты объединяются в строку с помощью `join(',')`.
   } else if (Array.isArray(json)) {
     const elements = json.map(element => convertJSONToString(element));
     return `[${elements.join(',')}]`;
   } else if (typeof json === 'object') {
     const properties = Object.keys(json).map(key => `"${key}":${convertJSONToString(json[key])}`);
     return `{${properties.join(',')}}`;
   }
 }
 // Пример использования
 const data = {
   name: 'John',
   age: 30,
   isStudent: true,
   hobbies: ['reading', 'playing guitar',],
   address: {
     street: '123 Main St',
     city: 'New York'
   }
 };
 const jsonString = convertJSONToString(data);
 console.log(jsonString);
 
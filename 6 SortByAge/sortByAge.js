// Задача о сортировке объектов: у вас есть массив объектов вида
// { name: 'John', age: 25 }.
// Напишите код, который сортирует этот массив по возрастанию возраста,
// а при равных возрастах сортирует по алфавиту по полю name.

// массив объектов
const characters = [
   { name: "Bill", age: 1 },
   { name: "Ann", age: 1 },
   { name: "Ann", age: 2 },
   { name: "Diana", age: 24 },
   { name: "Zzzz", age: 150 },
   { name: "Will", age: 100 },
   { name: "Will", age: 99 },
   { name: "Diana", age: 200 },
];

// функция сортирующая полученные данные
function sortByAgeOrName(data) {
   // 1 сортировка  массива по возрастанию возраста
   // 2 сортировка массива по именам в алфавитном порядке
   data
      .sort((a, b) => a.age - b.age)
      .sort((a, b) => {
         if (a.age === b.age) {
            // если name первого объекта меньше name второго, то первый объект должен идти раньше
            if (a.name < b.name) {
               return -1;
            }
            // если name первого объекта больше, то он должен идти позже
            if (a.name > b.name) {
               return 1;
            }
            return 0;
         }
      });
   return data;
}

console.log(sortByAgeOrName(characters));

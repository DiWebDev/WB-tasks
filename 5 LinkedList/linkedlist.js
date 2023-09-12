// Разработайте функцию преобразования JSON в связный список.
// На входе функция должна получать JSON, содержащий список объектов,
// на выходе объект, представляющий из себя односвязный список.

// JSON
const jsonData = [
   {
      "id": "1",
      "name": "Diana"
   },
   {
      "id": "2",
      "name": "Alan"
   },
];

class Node {
   constructor(value) {
      //две встроенные перменные
      // первая в списке
      this.value = value;
      // последняя в списке
      this.next = null;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.size = 0;
   }
   //* проверка размера списка
   isEmpty() {
      return this.size === 0;
   }
   //* показывает размер списка
   getSize() {
      return this.size;
   }
   //* добавляет в начало новый элемент
   // принимает данные, которые будет содержать новая нода
   prepend(value) {
      // создаем экземпляр класса Node (ноду)
      const newNode = new Node(value);
      // если лист пуст
      if (this.isEmpty()) {
         // нода добавляется в начало списка
         this.head = newNode;
      }
      // если лист не пуст
      else {
         // созданная нода указывает на первую в листе
         newNode.next = this.head;
         // нода добавляется в начало
         this.head = newNode;
      }
      // обновляем размер
      this.size++;
   }

   //* добавляет в конец новый элемент
   append(value) {
      // создаем экземпляр класса Node (ноду)
      const newNode = new Node(value);
      //  если лист пуст
      if (this.isEmpty()) {
         // нода добавляется в начало списка
         this.head = newNode;
      }
      // если лист не пуст
      else {
         // присваем новой переменной первую ноду в списке
         let current = this.head;
         // цикл работает до тех пор пока current.next не является null
         while (current.next) {
            current = current.next;
         }
         // нода становится последним элементом
         current.next = newNode;
      }
      this.size++;
   }

   //* добавляет данные в список
   postNewData(data) {
      data.forEach((item) => {
         //this.append(item)
         this.prepend(item);
      });
   }
}
// Создаем экземпляр класса LinkedList
const jsonToLinkedList = new LinkedList();
//Вызываем метод преобразующий аргумент в односвязный список
jsonToLinkedList.postNewData(jsonData);
console.log(jsonToLinkedList);

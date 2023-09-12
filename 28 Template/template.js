// Напишите функцию, которая создает новый элемент
// с использованием шаблонов
// (например, с помощью тега < template >)
// и добавляет его в DOM.

const ulEl = document.querySelector("ul");
const templateEl = document.querySelector("#template");
// .content находим содержимое внутри тега <template>
const spanEl = templateEl.content.querySelector("span");
// .cloneNode(true) создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами
let liEl = templateEl.content.cloneNode(true);
// функция, которая создает новый элемент и добавляет в DOM
function addNewEl(data) {
   spanEl.textContent = `${data}`;
   liEl = templateEl.content.cloneNode(true);
   ulEl.append(liEl);
}

addNewEl("Севастополь");
addNewEl("Ялта");
addNewEl("Феодосия");

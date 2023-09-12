// Функция для получения данных с сервера
async function getData() {
  const response = await fetch('http://www.filltext.com/?rows=1000&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true');
  const data = await response.json();
  console.log(data);
  return data;
}
// Основная функция
async function main() {
  const usersData = await getData(); // Получаем данные
  let currentPage = 1; // Текущая страница
  let rows = 50; // Количество строк на странице
  let sortColumn = null; // Столбец для сортировки
  let sortDirection = 'asc'; // Направление сортировки
  // Функция для отображения данных на странице
  function displayList(arrData, rowPerPage, page) {
    const tableEl = document.querySelector('.table'); // Получаем элемент таблицы
    const tableTitleEl = document.querySelector('.table__title'); // Получаем элемент заголовка таблицы
    tableEl.innerHTML = ''; // Очищаем содержимое таблицы
    page--
    let paginatedData = [...arrData]; // Создаем копию массива данных
    if (sortColumn) {
      paginatedData.sort((a, b) => {
        const valueA = sortColumn === 'zip' ? parseInt(a[sortColumn]) : a[sortColumn];
        const valueB = sortColumn === 'zip' ? parseInt(b[sortColumn]) : b[sortColumn];
        if (sortDirection === 'asc') {
          return valueA < valueB ? -1 : 1;
        } else {
          return valueA > valueB ? -1 : 1;
        }
      });
    }
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    paginatedData = paginatedData.slice(start, end);
    let displayedOnThePage = `
      <tr class="table__title">
        <th class="sortable" data-column="fname">Name</th>
        <th class="sortable" data-column="lname">Last Name</th>
        <th class="sortable" data-column="tel">Phone Number</th>
        <th class="sortable" data-column="address">Address</th>
        <th class="sortable" data-column="city">City</th>
        <th class="sortable" data-column="state">State</th>
        <th class="sortable" data-column="zip">Zip Code</th>
      </tr>`;
    paginatedData.forEach(data => {
      displayedOnThePage += `
        <tr>
          <td>${data.fname}</td>
          <td>${data.lname}</td>
          <td><a href="tel:+${data.tel}">+${data.tel}</a></td>
          <td>${data.address}</td>
          <td>${data.city}</td>
          <td>${data.state}</td>
          <td>${data.zip}</td>
        </tr>
      `;
    });
    tableEl.innerHTML = displayedOnThePage;
  }
  // Функция для отображения пагинации
  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector('.pagination'); // Получаем элемент пагинации
    const pagesCount = Math.ceil(arrData.length / rowPerPage); // Вычисляем количество страниц
    paginationEl.innerHTML = ''; // Очищаем содержимое пагинации
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');
    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
  }
  // Функция для отображения кнопок пагинации
  function displayPaginationBtn(pageNumber) {
    const liEl = document.createElement('li');
    liEl.classList.add('pagination__item');
    liEl.innerText = pageNumber;
    if (currentPage == pageNumber) {
      liEl.classList.add('pagination__item--active');
    }
    liEl.addEventListener('click', () => {
      currentPage = pageNumber;
      displayList(usersData, rows, currentPage);
      const currentLi = document.querySelector('.pagination__item--active');
      currentLi.classList.remove('pagination__item--active');
      liEl.classList.add('pagination__item--active');
    });
    return liEl;
  }
// Функция для сортировки данных
function sortData(event) {
   const column = event.target.dataset.column;
   if (column) {
     sortColumn = column;
     sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
     displayList(usersData, rows, currentPage);
   }
 }
 // Привязываем обработчик событий для сортировки
 document.addEventListener('click', sortData);
 // Отображаем данные и пагинацию
 displayList(usersData, rows, currentPage);
 displayPagination(usersData, rows);
}
// Вызываем основную функцию
main();
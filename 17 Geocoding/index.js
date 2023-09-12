// Функция для дебоунсинга и защиты от троттлинга с помощью замыканий
function debounce(func, delay) {
  let timerId;
  return function() {
    clearTimeout(timerId);
    timerId = setTimeout(func, delay);
  }
}
// Функция для геокодирования адреса
function geocodeDaData(address) {
  return new Promise((resolve, reject) => {
    const apiKey = '637f2bac956489c64ae855128f81c8a693b97617';
    const url = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`;
    
    const requestData = {
      query: address,
      count: 5
    };
    // Выполнение запроса к сервису ДаДата для геокодирования адреса
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 637f2bac956489c64ae855128f81c8a693b97617'
      },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(data => {
        const suggestions = data.suggestions.map(item => item.value);
        resolve(suggestions);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Функция для обновления выпадающего списка с подсказками
function updateSuggestionList(suggestions) {
  const suggestionList = document.getElementById('suggestionList');
  
  // Очистка списка
  suggestionList.innerHTML = '';

  // Отображение выпадающего списка
  let size = suggestions.length
  suggestionList.setAttribute("size", size)

  // Создание элементов списка на основе полученных подсказок
  for (let suggestion of suggestions) {
    const option = document.createElement('option');
    option.textContent = suggestion;
    suggestionList.appendChild(option);
  }
}
// Функция для обработки ввода пользователя и вызова функции геокодирования
function handleInput() {
  const addressInput = document.getElementById('addressInput');
  const address = addressInput.value;
  
  // Проверка, что поле ввода не пустое
  if (address.trim() !== '') {
    // Вызов функции геокодирования
    geocodeDaData(address)
      .then(suggestions => {
        // Обновление выпадающего списка с подсказками
        updateSuggestionList(suggestions);
      })
      .catch(error => {
        console.error('Error geocoding address:', error);
      });
  }
  // Присваиваем выбранный элемент из списка инпуту
  const EL = document.getElementById("Select");
  if (!!EL) {
      EL.addEventListener("change", e => {
          const lang = e.target.value;
          addressInput.value = lang
      });
  }

}
// Добавление обработчика события ввода с использованием дебоунсинга
const debouncedHandleInput = debounce(handleInput, 300);
const addressInput = document.getElementById('addressInput');
addressInput.addEventListener('input', debouncedHandleInput);

// Импортируем необходимые данные и инициализируем переменные
const widget = document.getElementById('widget');  // Получаем элемент виджета по его id
let offset = 0;  // Инициализируем смещение постов
let lastPostId = null;  // Инициализируем последний идентификатор поста
VK.init({  
    apiId: 51745602  // Инициализируем API ВКонтакте с указанным apiId
});
// Функция для загрузки постов из API ВКонтакте
function loadPosts(offset) {  
    VK.Api.call('wall.get', {  
        owner_id: -1,  // Указываем id владельца стены (-1 для группы)
        count: 10,  // Указываем количество запрашиваемых постов
        offset: offset,  // Указываем смещение
        from: lastPostId,  // Указываем идентификатор последнего полученного поста
        v: '5.131',  // Указываем версию API
        access_token: "c92170f3c92170f3c92170f398ca34e3b1cc921c92170f3addabaf0c9d6a47df127f1c0"  // Указываем токен доступа
    }, function(response) {  
        if (response && response.response) {  
            const posts = response.response.items;  // Получаем массив постов из ответа
            lastPostId = posts[posts.length - 1].id;  // Обновляем последний идентификатор поста
            displayPosts(posts);  // Отображаем полученные посты
            savePostsToLocalStorage(posts);  // Сохраняем посты в локальное хранилище
        }  
    });  
}  
// Функция для отображения постов на странице
function displayPosts(posts) {  
    posts.forEach((post) => {  
        const postElement = document.createElement('div');  // Создаем элемент для поста
        postElement.innerHTML = post.text;  // Заполняем элемент текстом поста
        postElement.classList.add('post');  // Добавляем класс "post" для стилизации поста
        widget.appendChild(postElement);  // Добавляем элемент в виджет
    });  
}  
// Функция для сохранения постов в локальное хранилище
function savePostsToLocalStorage(posts) { 
    let savedPosts = localStorage.getItem('posts');  // Получаем сохраненные посты из локального хранилища
    if (savedPosts) { 
        savedPosts = JSON.parse(savedPosts);  // Парсим сохраненные посты из строки JSON
        savedPosts = posts.concat(savedPosts);  // Объединяем полученные посты с сохраненными
    } else { 
        savedPosts = posts;  // Если сохраненных постов нет, присваиваем полученные посты
    } 
    if (savedPosts.length > 100) { 
        savedPosts = savedPosts.slice(0, 100);  // Если количество постов превышает 100, обрезаем массив до 100 элементов
    } 
    localStorage.setItem('posts', JSON.stringify(savedPosts));  // Сохраняем посты в локальное хранилище в виде строки JSON
} 
// Функция для загрузки постов из локального хранилища
function loadPostsFromLocalStorage() { 
    let savedPosts = localStorage.getItem('posts');  // Получаем сохраненные посты из локального хранилища
    if (savedPosts) { 
        savedPosts = JSON.parse(savedPosts);  // Парсим сохраненные посты из строки JSON
        displayPosts(savedPosts);  // Отображаем сохраненные посты
    } 
} 
// Функция для вычисления размера занятой памяти в локальном хранилище
function calculateLocalStorageSize() { 
    let totalSize = 0;  // Инициализируем суммарный размер
    for (let key in localStorage) { 
        if (localStorage.hasOwnProperty(key)) { 
            totalSize += localStorage[key].length;  // Суммируем размер каждого элемента хранилища
        } 
    } 
    console.log(`Занятая память: ${totalSize} / ${localStorage.length} МБ`);  // Выводим информацию о размере памяти
} 
// Функция для обновления размера занятой памяти в локальном хранилище
function updateLocalStorageSize() { 
    localStorageSize = calculateLocalStorageSize(); 
} 
// Обработчик события прокрутки виджета
widget.addEventListener('scroll', function() {  
    let scrollPosition = widget.scrollTop;  // Получаем текущую позицию прокрутки
    let bottomBoundary = widget.scrollHeight - widget.clientHeight;  // Получаем нижнюю границу виджета
    if (scrollPosition >= bottomBoundary) {  
        offset
= offset + 10;  // Увеличиваем смещение на 10
        loadPosts(offset);  // Загружаем посты с новым смещением
        updateLocalStorageSize();  // Обновляем размер занятой памяти в локальном хранилище
    }  
});  
// Загружаем посты из локального хранилища при загрузке страницы
loadPostsFromLocalStorage(); 
// Загружаем первые посты из API ВКонтакте при загрузке страницы
loadPosts(0); 
// Обработчик события изменения локального хранилища
window.addEventListener('storage', updateLocalStorageSize);
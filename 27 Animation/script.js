// Функция addAnimation() добавляет анимацию к элементу с id "myElement".
function addAnimation() {
    // Получаем элемент с помощью метода getElementById() и сохраняем его в переменную element.
    const element = document.getElementById('myElement');
    // Затем с помощью метода classList.add() добавляем к элементу класс 'slide-in', который содержит правила для анимации.
    element.classList.add('slide-in');
    // Внутри setTimeout() используем метод classList.remove() для удаления класса 'slide-in' у элемента через 1 секунду.
    setTimeout(()=>{
    // Таким образом, анимация будет проигрываться на элементе в течение 1 секунды, а затем удалится.
        element.classList.remove('slide-in');
    },1000)
  }
  
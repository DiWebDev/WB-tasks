

function loadImageAndDisplay(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    // Функция создает новый объект Image и устанавливает его свойство src равным переданному URL. 
    image.src = url;
    
    // Затем она прослушивает событие onload, которое возникает, когда изображение успешно загружено, и вызывает resolve с объектом изображения в качестве аргумента.
    image.onload = () => {
      // Создаем элемент <img> и устанавливаем его src равным URL изображения
      const imgElement = document.createElement("img");
      imgElement.src = url;

      // Вставляем элемент <img> на страницу
      document.body.appendChild(imgElement);

      resolve(image);
    };
    // Если произошла ошибка загрузки изображения, функция вызывает reject с новым объектом ошибки.
    image.onerror = () => {
      reject(new Error("Failed to load image"));
    };
  });
}
const url = "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg";
loadImageAndDisplay(url)
  .then((image) => {
    console.log("Image loaded", image);
  })
  .catch((error) => {
    console.error("Failed to load image", error);
  });

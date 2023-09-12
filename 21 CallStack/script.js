// Функция `getBrowserStackSize` возвращает размер стека памяти браузера в зависимости от его названия.
function getBrowserStackSize(browserName) {
    if (browserName.toLowerCase() === "chrome") {
      return performance.memory.usedJSHeapSize;
    } else if (browserName.toLowerCase() === "firefox") {
      return performance.memory.used;
    } else if (browserName.toLowerCase() === "opera") {
      return performance.memory.usedJSHeapSize;
    } else if (browserName.toLowerCase() === "safari") {
      return performance.memory.usedJSHeapSize;
    } else {
    // Если название браузера не поддерживается, возвращается строка "Unsupported browser".
      return "Unsupported browser";
    }
  }

// const chromeStackSize = getBrowserStackSize("chrome");
// const firefoxStackSize = getBrowserStackSize("firefox");
// const operaStackSize = getBrowserStackSize("opera");
// const safariStackSize = getBrowserStackSize("safari");
// console.log("Chrome stack size:", chromeStackSize);
// console.log("Firefox stack size:", firefoxStackSize);
// console.log("Opera stack size:", operaStackSize);
// console.log("Safari stack size:", safariStackSize);

function checkSentence(sent) {
   // Приводим предложение к нижнему регистру, удаляем пробелы, переворачиваем и объединяем символы
   let str = sent.toLowerCase().replace(/\s/g, "").split("").reverse().join("");
   // Приводим исходное предложение к нижнему регистру и удаляем пробелы
   let strTwo = sent.toLowerCase().replace(/\s/g, "").split("").join("");
   // Сравниваем перевернутую строку со строкой без изменений
   if (str === strTwo) {
      return true;
   } else {
      return false;
   }
}
console.log(checkSentence("Коту скоро сорок суток"));
console.log(checkSentence("аргентина манит негра"));

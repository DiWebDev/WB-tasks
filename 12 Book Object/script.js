// Задача на работу с объектами:
// создайте объект, представляющий собой книгу.
// Объект должен иметь свойства, такие как:
// название книги, автор и год издания.
// Напишите методы для получения и изменения значений свойств книги.

class Book {
   constructor(title, author, yearOfPublication) {
      this.title = title;
      this.author = author;
      this.yearOfPublication = yearOfPublication;
   }
   // Методы changeYear(data), changeTitle(data) и changeAuthor(data) используются для обновления соответствующих свойств объекта книги.
   changeYear(data) {
      return (this.yearOfPublication = data);
   }
   changeTitle(data) {
      return (this.title = data);
   }
   changeAuthor(data) {
      return (this.author = data);
   }
   getYear() {
      return this.yearOfPublication;
   }
   getAuthor() {
      return this.author;
   }
   getTitle() {
      return this.title;
   }
}

const tgcf = new Book("Heaven Official Blessing", "Mo Xiang Tong Xiu", 2021);
console.log(tgcf);
tgcf.changeTitle("Heaven Official's Blessing");
console.log(tgcf);
console.log(`${tgcf.getAuthor()}, got her novel '${tgcf.getTitle()}' published in the USA in ${tgcf.getYear()}.`);

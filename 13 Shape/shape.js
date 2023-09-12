// Задача на классы и наследование:
// создайте базовый класс Shape (фигура),
// который имеет методы для расчета площади
// и периметра. Затем создайте подклассы,
// представляющие различные фигуры,
// такие как прямоугольник,
// круг и треугольник.
// Реализуйте методы расчета площади
// и периметра для каждой фигуры.

class Shape {
   constructor() { }
   // метод расчета площади
   getArea() { }
   // метод расчета периметра
   getPerimeter() { }
}

class Circle extends Shape {
   constructor(radius) {
      super();
      this.radius = radius;
   }
   // метод расчета площади
   getArea() {
      return Math.PI * this.radius * this.radius;
   }
   // метод расчета периметра
   getPerimeter() {
      return 2 * Math.PI * this.radius;
   }
}

class Triangle extends Shape {
   constructor(sideOne, sideTwo, sideThree) {
      super();
      this.sideOne = sideOne;
      this.sideTwo = sideTwo;
      this.sideThree = sideThree;
   }

   // метод расчета площади
   getArea() {
      // формула Герона
      const perimeter = this.getPerimeter();
      const s = perimeter / 2;
      return Math.sqrt(
         s * (s - this.sideOne) * (s - this.sideTwo) * (s - this.sideThree)
      );
   }
   // метод расчета периметра
   getPerimeter() {
      return this.sideOne + this.sideTwo + this.sideThree;
   }
}

class Rectangle extends Shape {
   constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
   }

   // метод расчета площади
   getArea() {
      return this.width * this.height;
   }
   // метод расчета периметра
   getPerimeter() {
      return (this.width + this.height) * 2;
   }
}

// Круг
const circleEl = new Circle(30);
console.log(circleEl.getArea());
console.log(circleEl.getPerimeter());
// Треугольник
const triangleEl = new Triangle(30, 30, 30);
console.log(triangleEl.getArea());
console.log(triangleEl.getPerimeter());

// Прямоугольник
const rectangleEl = new Rectangle(20, 30);
console.log(rectangleEl.getArea());
console.log(rectangleEl.getPerimeter());

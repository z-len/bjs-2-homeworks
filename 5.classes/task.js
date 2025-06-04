// ЗАДАЧА 1: Печатное издание 

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Пример 
const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);
console.log("Задача 1. Автор:", picknick.author); // Аркадий и Борис Стругацкие
picknick.state = 10;
console.log("Задача 1. Состояние до восстановления:", picknick.state); // 10
picknick.fix();
console.log("Задача 1. Состояние после восстановления:", picknick.state); // 15

// ЗАДАЧА 2: Класс библиотеки

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}

// Пример 
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("А. К. Дойл", "Шерлок Холмс", 1892, 500));
library.addBook(new Magazine("Наука и жизнь", 2020, 90));

const found = library.findBookBy("releaseDate", 2020);
console.log("Задача 2. Найденная книга:", found?.name); // Наука и жизнь

const given = library.giveBookByName("Шерлок Холмс");
console.log("Задача 2. Выданная книга:", given?.name); // Шерлок Холмс

// ЗАДАЧА 3: Журнал успеваемости

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0;
    }
    const sum = this.marks[subject].reduce((acc, m) => acc + m, 0);
    return sum / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) return 0;
    const total = subjects.reduce(
      (acc, subject) => acc + this.getAverageBySubject(subject),
      0
    );
    return total / subjects.length;
  }
}

// Пример 
const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // не добавится

console.log("Задача 3. Средняя по физике:", student.getAverageBySubject("физика")); // 4.5
console.log("Задача 3. Средняя по биологии:", student.getAverageBySubject("биология")); // 0
console.log("Задача 3. Общая средняя:", student.getAverage()); // 4.75

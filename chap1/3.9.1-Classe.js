class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

console.log(typeof Person);

const leo = new Person("Leo", "Fontolan");
console.log(leo);

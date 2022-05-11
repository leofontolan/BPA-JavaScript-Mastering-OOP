function Person(name, surname) {
  "use strict";
  this.name = name;
  this.surname = surname;
}


let person = new Person("John", "Doe");
console.log(typeof(person) );

console.log(Boolean(-Infinity));
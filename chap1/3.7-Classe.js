class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

function Person(name, surname) {
  "use strict";
  this.name = name;
  this.surname = surname;
}

var Person = class {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
};
var person = new Person("John", "Smith");

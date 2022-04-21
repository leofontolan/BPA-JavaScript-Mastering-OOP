var person = new Object();

person.name = "John";
person.surname = "Smith";

var person2 = {};
console.log(person2.constructor === Object);


var number = new Object(12)
var anotherNumber = new Object(3*2);
var string = new Object("Test");
var person = new Object({name: "John", surname: "Smith"});

console.log(number);
console.log(anotherNumber);
console.log(string);
console.log(person);
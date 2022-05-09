function Person(name , surname){
    "use strict";
    this.name = name;
    this.surname = surname;
    this.address = "";
    this.email = "";
    
    this.displayFullName = function(){
        return this.name + " " + this.surname;
    };
}

var johnSmith = new Person("John", "Smith");
var marioRossi = new Person("Mario", "Rossi");

console.log(johnSmith.displayFullName());




// var person = Person("John", "Smith");
// console.log(global);
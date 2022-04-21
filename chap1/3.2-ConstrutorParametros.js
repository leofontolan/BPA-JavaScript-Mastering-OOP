function Person(name , surname){
    this.name = name;
    this.surname = surname;
    this.address = "";
    this.email = "";
    this.displayFullName = function(){};
}

var johnSmith = new Person("John", "Smith");
var marioRossi = new Person("Mario", "Rossi");


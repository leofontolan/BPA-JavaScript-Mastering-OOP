var mankind = {
    
    race: "human",

    Person: function(name, surname) {
        'use strict';
        this.name = name;
        this.surname = surname;
    }
};

var johnSmith = mankind.Person("John", "Smith");
console.log(mankind);

var john = new mankind.Person("John", "Smith");
console.log(leo);
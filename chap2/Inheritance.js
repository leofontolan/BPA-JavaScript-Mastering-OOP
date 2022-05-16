let Person = function() {
    this.name = "Leo";
    this.age = "Fontolan";
}

let Programmer = function(language) {
    this.language = language;
}

let programmer = Programmer.prototype = new Person();
let programmer1 = new Programmer('JavaScript');

console.log(programmer1.name);

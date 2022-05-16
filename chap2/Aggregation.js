function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.parent = null;
}

var company = {
    name: "Company",
    employees: []
};

var johnSmith = new Person("John", "Smith");
var marioRossi = new Person("Mario", "Rossi");

company.employees.push(johnSmith);
company.employees.push(marioRossi);


console.log(company);
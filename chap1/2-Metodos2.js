let person = {
    name: "John",
    surname: "Smith",
    showFullName() {
        return this.name + " " + this.surname;
    }
};

console.log(person.showFullName());
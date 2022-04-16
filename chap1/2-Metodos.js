// Métodos em JavaScript são funções que são chamadas em determinado momento.
// No posto de vista semântico, a definição de um objeto é bastante semelhante,
// a definição de propriedades
var person = {};

function showFullName() {
  return "John Smith";
}

person.fullName = showFullName;

// Também podemos atribuir uma função a uma propriedade de um objeto
var person = {
  name: "John",
  showFullName: function () {
    return "John Smith";
  },
};

// O ES6 possibilita definir métodos em notação literal diretamente em um objeto
var person = {
  name: "John",
  surname: "Smith",
  showFullName() {
    return "John Smith";
  },
};

// Uma vez que que uma propriedade recebeu uma função, é na verdade um método.
// O método pode ser chamado como se fosse uma propriedade.
var nameAndSurname = person.showFullName();

// Podemos atribuir ua função anônima a uma propriedade de um objeto
person.fullName = function () {
  return "John Smith";
}

// Uma maneira da acessar valores do próprio objeto é usando a palavra-chave this
person.fullName = function () {
    return this.name + " " + this.surname;
}
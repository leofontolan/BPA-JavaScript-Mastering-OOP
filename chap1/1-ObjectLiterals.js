// Exemplo criação de um objeto literal
var emptyObject = {};
var person = {"name": "John", "surname": "Smith"};


// Não é necessário usarmos aspas nas propriedades do objeto, 
// se elas seguirem as mesmas regras da crianção de variáreis
var person = {name: "John", surname: "Smith"};


// Mas se quisermos usar definição diferentes precisamos usar aspas
var person = {"first-name": "John", "last-name": "Smith"};


// Podemos atribuir qualquer valor para uma propriedade,
// inclusive outros objetos
var person = { name: "John", 
                surname: "Smith", 
                address: { 
                    street : "13 Duncannon Street", 
                    city: "London",
                country: "United Kingdom" 
            }};

// Acessando as propriedades do objeto usando dot-notation
var name = person.name;

// Também podemos acessar as propriedades do objeto usando bracket-notation
var name = person["name"];

// Quando tentamos acessar propriedades que não existem,
// o javascript retorna undefined.
var name = person.age;

// Quando tentamos atribuir um valor a uma propriedade que não existe,
// podemos criar a propriedade com o valor que estamos tentando atribuir.
person.age = "28";


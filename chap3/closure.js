function TheatreSeats() {
  var seats = [];
}

TheatreSeats.prototype.placePerson = function (person) {
  seats.push(person);
};

var theatreSeats = new TheatreSeats();
theatreSeats.placePerson({ name: "John", surname: "Smith" }); //exceção

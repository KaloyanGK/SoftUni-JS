function solve(input, type) {
    let [key, value] = type.split(`-`);

    let counter = 0;
    JSON.parse(input)
        .filter(el => el[key] == value)
        .forEach((el) => {
            console.log(`${counter}. ${el.first_name} ${el.last_name} - ${el.email}`);
            counter++
        });
}
solve(
    `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    "last_name-Johnson"
);

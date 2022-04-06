function solve(input) {
  let object = {};
  let carsNumber = Number(input.shift());
  for (let i = 0; i < carsNumber; i++) {
    let line = input[i].split(`|`);
    let carModel = line[0];
    let carMilage = Number(line[1]);
    let carFuel = Number(line[2]);
    object[carModel] = {
      mileage: carMilage,
      fuel: carFuel,
    };
  }
  input.splice(0, carsNumber);
  for (let el of input) {
    el = el.split(` : `);
    let command = el[0];
    if (command === `Drive`) {
      let currentCar = el[1];
      let currentDistance = Number(el[2]);
      let neededFuel = Number(el[3]);
      if (neededFuel > object[currentCar].fuel) {
        console.log(`Not enough fuel to make that ride`);
      } else {
        object[currentCar].mileage += currentDistance;
        object[currentCar].fuel -= neededFuel;

        console.log(
          `${currentCar} driven for ${currentDistance} kilometers. ${neededFuel} liters of fuel consumed.`
        );
      }
      if (object[currentCar].mileage >= 100000) {
        delete object[currentCar];
        console.log(`Time to sell the ${currentCar}!`);
      }
    } else if (command === `Refuel`) {
      let currentCar = el[1];
      let givenFuel = Number(el[2]);
      let totalFuel = object[currentCar].fuel + givenFuel;
      if (totalFuel > 75) {
        let diff = 75 - object[currentCar].fuel;
        console.log(`${currentCar} refueled with ${diff} liters`);
        object[currentCar].fuel = 75;
      } else {
        console.log(`${currentCar} refueled with ${givenFuel} liters`);
        object[currentCar].fuel = totalFuel;
      }
    } else if (command === `Revert`) {
      let currentCar = el[1];
      let givenMileage = Number(el[2]);
      object[currentCar].mileage -= givenMileage;
      if (object[currentCar].mileage < 10000) {
        object[currentCar].mileage = 10000;
      } else {
        console.log(
          `${currentCar} mileage decreased by ${givenMileage} kilometers`
        );
      }
    } else if (command === `Stop`) {
      for (let el in object) {
        console.log(
          `${el} -> Mileage: ${object[el].mileage} kms, Fuel in the tank: ${object[el].fuel} lt.`
        );
      }
    }
  }
}
solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);

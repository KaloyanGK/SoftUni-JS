function solve(input) {
  let flowerscount = Number(input.shift());
  let object = {};

  for (let i = 0; i < flowerscount; i++) {
    let line = input[i].split(`<->`);
    let flower = line[0];
    let rearity = Number(line[1]);
    if (!object.hasOwnProperty(flower)) {
      object[flower] = {
        rear: rearity,
        rating: [],
      };
    } else {
      object[flower].rear += rearity;
    }
  }
  input.splice(0, flowerscount);

  let line = input.shift();

  while (line !== `Exhibition`) {
    let [command] = line.split(`: `);
    if (command == `Rate`) {
      let [currCommand, plantInfo] = line.split(`: `);
      let [platName, plantRating] = plantInfo.split(` - `);
      plantRating = Number(plantRating);
      if (object.hasOwnProperty(platName)) {
        object[platName].rating.push(plantRating);
      } else {
        console.log(`error`);
      }
    } else if (command == `Update`) {
      let [currCommand, plantInfo] = line.split(`: `);
      let [platName, newRarity] = plantInfo.split(` - `);
      newRarity = Number(newRarity);
      if (object.hasOwnProperty(platName)) {
        object[platName].rear = newRarity;
      } else {
        console.log(`error`);
      }
    } else if (command == `Reset`) {
      let [currCommand, plantInfo] = line.split(`: `);

      if (object.hasOwnProperty(plantInfo)) {
        object[plantInfo].rating = [];
      } else {
        console.log(`error`);
      }
    }

    line = input.shift();
  }
  
  console.log("Plants for the exhibition:");
  for (let el in object) {
    let rating = 0;
    if (object[el].rating.length > 0) {
      object[el].rating.forEach((element) => (rating += element));
      rating = rating / object[el].rating.length;
    }
    console.log(
      `- ${el}; Rarity: ${object[el].rear}; Rating: ${rating.toFixed(2)}`
    );
  }
}
solve([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);

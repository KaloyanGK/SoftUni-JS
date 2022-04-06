function solve(input) {
  let object = {};
  for (let el of input) {
    el = el.split(` `);
    let command = el[0];
    if (command == `Enroll`) {
      let heroName = el[1];
      if (object.hasOwnProperty(heroName)) {
        console.log(`${heroName} is already enrolled.`);
      } else {
        object[heroName] = [];
      }
    } else if (command == `Learn`) {
      let currHeroName = el[1];
      let currSpell = el[2];
      if (object.hasOwnProperty(currHeroName)) {
        if (object[currHeroName].includes(currSpell)) {
          console.log(`${currHeroName} has already learnt ${currSpell}.`);
        } else {
          object[currHeroName].push(currSpell)
        }
      } else {
        console.log(`${currHeroName} doesn't exist.`);
      }

    } else if (command == `Unlearn`) {
      let currHeroName = el[1];
      let currSpell = el[2];
      if (object.hasOwnProperty(currHeroName)) {
        if (object[currHeroName].includes(currSpell)) {
          let index = object[currHeroName].indexOf(currSpell);
          object[currHeroName].splice(index, 1)
        } else {
          console.log(`${currHeroName} doesn't know ${currSpell}.`);
        }
      } else {
        console.log(`${currHeroName} doesn't exist.`);
      }
    } else if (command == `End`) {
      console.log(`Heroes:`);


      for (let el in object) {

        if (object[el].length <= 0) {
          console.log(`== ${el}: ${object[el]}`);
        } else {
          console.log(`== ${el}: ${object[el].join(', ')}`);
        }
      }


    }
  }

}
solve([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End",
]);

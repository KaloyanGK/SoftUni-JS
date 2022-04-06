function solve(input) {
  let allHeroes = [];
  let obj = {};
  for (let el of input) {
    let splited = el.split(` / `);
    obj[`name`] = splited.shift();
    obj[`level`] = Number(splited.shift());
    obj[`item`] = splited.shift();
    allHeroes.push(obj);
  }
  console.log(obj);

  let sorted = allHeroes.sort((a, b) => a.level - b.level);

  sorted.forEach((el) => {
    console.log(`Hero: ${el[`name`]}`);
    console.log(`level => ${el[`level`]}`);
    console.log(`items => ${el[`item`]}`);
  });
}
solve([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);

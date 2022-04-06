function solve(input) {
  let moviesList = [];

  for (let ent of input) {
    let tempObj = {};

    if (ent.includes("addMovie")) {
      let splitEnt = ent.split("addMovie ");
      let name = splitEnt.pop();
      tempObj[`name`] = name;
      moviesList.push(tempObj);
    } else if (ent.includes("directedBy")) {
      let splitEnt = ent.split(" directedBy ");
      let name = splitEnt.shift();
      let director = splitEnt.shift();

      moviesList.forEach((el) => {
        if (el.name == name) {
          el["director"] = director;
        }
      });
    } else if (ent.includes("onDate")) {
      let splitEnt = ent.split(" onDate ");
      let name = splitEnt.shift();
      let date = splitEnt.shift();
      moviesList.forEach((el) => {
        if (el.name == name) {
          el[`date`] = date;
        }
      });
    }
  }

  let result = moviesList.filter((el) => {
    if (el.name && el.date && el.director) {
      return el;
    }
  });

  result.forEach((el) => console.log(JSON.stringify(el)));
}
solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

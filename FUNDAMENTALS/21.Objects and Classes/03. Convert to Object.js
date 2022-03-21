function solve(string) {

    let person = JSON.parse(string);
  
    let keys = Object.keys(person);

    for (let key of keys) {
        console.log(`${key}: ${person[key]}`);
    }



}

solve(`{"name": "George", "age": 40, "town": "Sofia"}`)
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}')
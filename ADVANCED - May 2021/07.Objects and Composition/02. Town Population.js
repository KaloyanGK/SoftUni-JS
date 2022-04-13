function solve(params) {
    let object = {};
    for (let el of params) {
        el = el.split(` <-> `);
        let currCity = el[0]
        let currPopulation = Number(el[1]);
        if (!object.hasOwnProperty(currCity)) {
            object[currCity] = currPopulation;
        } else {
            object[currCity] += currPopulation;
        }
    }
    for (let el in object) {
        console.log(`${el} : ${object[el]}`);
    }

}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

)
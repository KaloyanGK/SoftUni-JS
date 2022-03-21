function solve(string) {
    let words = string.toLowerCase().split(` `);

    let object = {};
    for (let el of words) {
        if (!object.hasOwnProperty(el)) {
            object[el] = 1;
        } else {
            object[el] += 1;
        }
    }
    let sorted = Object.entries(object);
    sorted.sort((a, b) => {
        return b[1] - a[1];
    });
    let nope = ``;
    for (let el of sorted) {
        if (el[1] % 2 != 0) {
            nope += el[0] + ` `

        }
    }
    console.log(nope);
}
solve('Cake IS SWEET is Soft CAKE sweet Food');

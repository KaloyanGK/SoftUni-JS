function solve(string, word) {
    let splited = string.split(` `);
    let counter = 0;
    for (let el of splited) {

        if (el === word) {
            counter++
        }
    }
    console.log(counter);
}
solve('softuni is great place for learning new programming languages',
    'softuni'
)
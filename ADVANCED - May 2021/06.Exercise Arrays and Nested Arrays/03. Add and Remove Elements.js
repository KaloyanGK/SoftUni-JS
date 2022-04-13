function solve(input) {
    let newArr = [];
    let counter = 0;
    for (let el of input) {
        counter++;
        if (el == `add`) {
            newArr.push(counter)
        } else if (el == `remove`) {
            newArr.pop()
        }
    }
    if (newArr.length == 0) {
        console.log(`Empty`);
    } else {
        console.log(newArr.join(`\n`));

    }
}
solve(['add', 'add', 'add', 'add']
)
console.log(`---`);
solve(['add', 'add', 'remove', 'add', 'add']

)
console.log(`---`);

solve(['remove', 'remove', 'remove'])

function solve(input) {
    let array = input;
    let newArray = input.shift().split(` `).map(Number);

    for (let i = 0; i < array.length; i++) {
        let currElOfArr = array[i].split(` `);
        let currCommand = currElOfArr[0];
        let currIndexForInsert = 0;
        let number = 0;

        if (currCommand === `Insert`) {
            number = Number(currElOfArr[1]);
            currIndexForInsert = Number(currElOfArr[2]);
        } else {
            number = Number(currElOfArr[1]);
        }
        if (currCommand == `Add`) {
            newArray.push(number);
        } else if (currCommand === `Remove`) {
            for (let i = 0; i < newArray.length; i++) {
                if (newArray[i] === number) {
                    newArray.splice(i, 1);
                }
            }
        } else if (currCommand === `RemoveAt`) {
            for (let i = 0; i < newArray.length; i++) {
                if (i === number) {
                    newArray.splice(i, 1);
                }
            }
        } else if (currCommand === `Insert`) {
            for (let i = 0; i < newArray.length; i++) {
                if (i === currIndexForInsert) {
                    newArray.splice(i, 0, number);
                }
            }
        }
    }

    console.log(newArray.join(` `));
}
solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);

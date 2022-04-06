function houseParty(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        let currentGuest = input[i].split(` `);
        let nameOfGuest = currentGuest[0];
        if (currentGuest.length === 3) {
            if (!newArr.includes(nameOfGuest)) {
                newArr.push(nameOfGuest);
            } else {
                console.log(`${nameOfGuest} is already in the list!`);
            }
        } else if (currentGuest.length === 4) {
            if (newArr.includes(nameOfGuest)) {
                let index = newArr.indexOf(nameOfGuest);
                newArr.splice(index, 1);
            } else {
                console.log(`${nameOfGuest} is not in the list!`);
            }
        }
    }
    console.log(newArr.join(`\n`));
}
houseParty(["Tom is going!", "Annie is going!", "Tom is going!", "Garry is going!", "Jerry is going!",]);

function num() {

    let x = ``;

    let lastVal = 10;

    for (let a = 1; a <= lastVal; a++) {
        if (a === lastVal) {
            x += `${a}`;

        } else {
            x += `${a},`

        }
    }

    console.log(x)
} num();
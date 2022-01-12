function loopsDemo() {


    let output = ``;

    for (let a = 1; a <= 5; a++) {
        if (a === 5) {
            output += `${a}`;
        } else {
            output += `${a},`;
        }


    }
    console.log(output)
}
loopsDemo();
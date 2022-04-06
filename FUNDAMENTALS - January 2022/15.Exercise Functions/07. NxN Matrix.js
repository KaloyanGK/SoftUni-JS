function NxN(input) {
    let number = input;

    let rowGenetaor = (num) => {
        let output = ``;
        for (let i = 0; i < num; i++) {
            output += `${number} `;
        }
        return output;
    };

    for (let j = 0; j < number; j++) {
        console.log(rowGenetaor(number));
    }
}
NxN(5);

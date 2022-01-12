function demo(input) {

    let man = Number(input[0]);
    let woman = Number(input[1]);
    let table = Number(input[2]);
    let counter = 0;
    let couple = ``;
    for (let i = 1; i <= man; i++) {
        for (let k = 1; k <= woman; k++) {
            counter++;
            couple += `(${i} <-> ${k}) `;
            if (counter === table) {
                console.log(couple);
                return;
            }
        }

    }
    console.log(couple);
} demo([`2`, `2`, `6`])
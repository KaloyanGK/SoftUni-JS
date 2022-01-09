function demo(input) {

    let edinLev = Number(input[0]);
    let dvaLeva = Number(input[1]);
    let petLeva = Number(input[2]);
    let sum = Number(input[3]);
    let combination = ``;
    let total = 0;

    for (let i = 0; i <= edinLev; i++) {
        for (let j = 0; j <= dvaLeva; j++) {
            for (let k = 0; k <= petLeva; k++) {
                total = i * 1 + j * 2 + k * 5;
                if (total === sum) {
                    combination = `${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv. `
                    console.log(combination);
                }
            }
        }
    }

} demo([`3`, `2`, `3`, `10`])
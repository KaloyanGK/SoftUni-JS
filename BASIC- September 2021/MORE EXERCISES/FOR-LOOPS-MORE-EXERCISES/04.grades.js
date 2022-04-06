function demo(input) {

    let totalGrades = Number(input[0]);
    let totalSumOfGrades = 0;
    let slab = 0;
    let sreden = 0;
    let dobur = 0;
    let otlichen = 0;
    for (let i = 1; i <= totalGrades; i++) {
        let currentGrades = Number(input[i]);
        totalSumOfGrades += currentGrades;

        if (currentGrades >= 2 && currentGrades <= 2.99) {
            slab++;
        } else if (currentGrades > 2.99 && currentGrades < 4) {
            sreden++;
        } else if (currentGrades >= 4 && currentGrades < 5) {
            dobur++;
        } else {
            otlichen++;
        }

    }
    let percentSlab = slab / totalGrades * 100;
    let percentSreden = sreden / totalGrades * 100;
    let percentDobur = dobur / totalGrades * 100;
    let percentOtlichen = otlichen / totalGrades * 100;

    let avarageGrade = totalSumOfGrades / totalGrades;

    console.log(`Top students: ${percentOtlichen.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentDobur.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentSreden.toFixed(2)}%`);
    console.log(`Fail: ${percentSlab.toFixed(2)}%`);
    console.log(`Average: ${avarageGrade.toFixed(2)}`);

} demo([`6`, `2`, `3`, `4`, `5`, `6`, `2.2`])
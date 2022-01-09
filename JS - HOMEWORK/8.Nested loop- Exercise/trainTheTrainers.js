function demo(input) {

    let index = 0;
    let people = Number(input[index]);
    index++;
    let sumOfGrade = 0;
    let counter = 0;
    let command = input[index];
    index++;
    while (command !== `Finish`) {
        let name = command;
        let temSumofGrade = 0;
        for (let i = 0; i < people; i++) {
            counter++
            let grade = Number(input[index]);
            index++;
            temSumofGrade += grade;
            sumOfGrade += grade;
        }
        let avgTempGrade = temSumofGrade / people;
        console.log(`${name} - ${avgTempGrade.toFixed(2)}.`);
        command = input[index];
        index++
    }
    let avgGrade = sumOfGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
} demo(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


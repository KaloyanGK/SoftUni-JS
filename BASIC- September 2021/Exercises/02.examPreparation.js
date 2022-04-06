function demo(input) {
    let index = 0;
    let numberOfBadGrades = Number(input[index]);
    index++;
    let command = input[index];
    let badGradesCounter = 0;
    let totalScore = 0;
    let examCount = 0;
    let lastProblem = ``;

    while (command !== `Enough`) {
        let examName = command;
        index++;
        let grades = Number(input[index]);
        index++;
        command = input[index];
        totalScore += grades;
        examCount++;

        if (grades <= 4) {
            badGradesCounter++;
        }
        if (badGradesCounter >= numberOfBadGrades) {
            console.log(`You need a break, ${badGradesCounter} poor grades.`);
            break;
        }
        lastProblem = examName;

    }
    let avarageScore = totalScore / examCount;
    if (command === `Enough`) {
        console.log(`Average score: ${avarageScore.toFixed(2)}`);
        console.log(`Number of problems: ${examCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }


} demo(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])

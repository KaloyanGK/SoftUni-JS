function graduation(input) {

    let nameOfTheStudent = input[0];

    let index = 1;
    let currentGrade = Number(input[index]);

    let counterGrade = 1;
    let counterNotes = 0;

    while (currentGrade >= 4) {
        counterGrade++;
        counterNotes += Math.abs(currentGrade);
        index++;
        currentGrade = input[index];
    }
    if (currentGrade < 4) {
        console.log(`${nameOfTheStudent} has been excluded at ${counterGrade} grade`);

    } else {
        console.log(`${nameOfTheStudent} graduated. Average grade: ${(counterNotes / 12).toFixed(2)}`)

    }
} graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])

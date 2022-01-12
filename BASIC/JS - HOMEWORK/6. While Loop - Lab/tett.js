function marin(input) {
    let badGrades = Number(input[0]);
    let grades = 0;
    let index = 1;
    let totalTasks = 0;
    let totalGrades = 0;
    let task = input[index++];
    let lastTask = '';
 
    while (task !== "Enough") {
        let gradeForTask = Number(input[index++]);
        task = input[index++];
        totalTasks++;
        totalGrades += gradeForTask;
        lastTask = input[index - 3];
 
        if (gradeForTask <= 4) {
            grades++;
        }
 
        if (grades >= badGrades) {
            console.log(`You need a break, ${grades} poor grades.`);
            break;
        }
 
    }
 
    if (task === 'Enough') {
        console.log(`Average score: ${(totalGrades / totalTasks).toFixed(2)}`);
        console.log(`Number of problems: ${totalTasks}`);
        console.log(`Last problem: ${lastTask}`);
    }
}
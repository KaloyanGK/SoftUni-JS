function highJump(input) {
    index = 0;
    let goalReach = Number(input[index]);
    let startingPoint = goalReach - 30;
    let counterOfSuccessesTries = 0;
    let counterOfFailedTries = 0;
    let finalCounter = 0;
    while (startingPoint <= goalReach) {
        index++;
        let currentJump = Number(input[index]);
        let jumpCounter = 0;
        while (startingPoint >= currentJump) {
            jumpCounter++;
            counterOfFailedTries++;
            index++;
            currentJump = Number(input[index]);
            if (jumpCounter === 3) {
                console.log(`Tihomir failed at ${startingPoint}cm after ${counterOfFailedTries + counterOfSuccessesTries} jumps.`);
                return;
            }
        }
        counterOfSuccessesTries++;
        finalCounter = counterOfSuccessesTries + counterOfFailedTries;
        startingPoint += 5;
        command = input[index];
    }
    console.log(`Tihomir succeeded, he jumped over ${goalReach}cm after ${counterOfSuccessesTries + counterOfFailedTries} jumps.`);
} 
highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"])
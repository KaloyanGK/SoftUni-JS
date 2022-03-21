function reception(array) {
    let list = array.map(Number);
    let employee1 = list[0];
    let employee2 = list[1];
    let employee3 = list[2];
    let totalEfficiency = employee1 + employee2 + employee3;
    let students = list[3];
    let counter = 0;

    while (students > 0) {
        students -= totalEfficiency;
        counter++;
        if (counter % 4 == 0) {
            counter++;
        }
    }
    console.log(`Time needed: ${counter}h.`);
}

reception(["1", "2", "3", "45"]);

reception(["5", "6", "4", "20"]);

reception(["3", "2", "5", "40"]);

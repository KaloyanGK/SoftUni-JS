function solve(input) {
    let grades = {};

    for (let el of input) {
        let elements = el.split(" ");
        let name = elements.shift();
        let schoolGrades = elements.map(Number);

        if (!grades.hasOwnProperty(name)) {
            grades[name] = schoolGrades;
        } else {
            schoolGrades.forEach((el) => {
                grades[name].push(el);
            });
        }
    }


    let sorted = Object.entries(grades);


    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (el of sorted) {
        let name = el[0];
        let grades = el[1];

        let avarageGrade = 0;
        for (let grade of grades) {
            avarageGrade += grade;
        }
        avarageGrade /= grades.length;
        console.log(`${name}: ${avarageGrade.toFixed(2)}`);
    }
}
solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);

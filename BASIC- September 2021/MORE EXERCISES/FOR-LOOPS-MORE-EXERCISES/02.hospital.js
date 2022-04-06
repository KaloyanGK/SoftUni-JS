function demo(input) {
    let days = Number(input[0]);
    let pregledani = 0;
    let nepregledani = 0;
    let doctors = 7;
    for (let day = 1; day <= days; day++) {
        let pacienti = Number(input[day]);
        if (day % 3 == 0 & nepregledani > pregledani) {
            doctors++
        }
        if (pacienti > doctors) {
            pregledani += doctors;
            nepregledani += pacienti - doctors;
        } else {
            pregledani += pacienti;
        }

    }
    console.log(`Treated patients: ${pregledani}.`);
    console.log(`Untreated patients: ${nepregledani}.`);
} demo([`3`, `7`, `7`, `7`])
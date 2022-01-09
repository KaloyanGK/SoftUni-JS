function workingHours(input) {
    let time = Number(input[0]);
    let day = input[1];

    if (time > 9 && time < 19) {
        switch (day) {
            case `Monday`:
            case `Tuesday`:
            case `Wednesday`:
            case `Thursday`:
            case `Friday`:
            case `Saturday`:
                console.log(`open`)
                break;
            case `Sunday`:
                console.log(`closed`);
                break;
        }
    } else {
        switch (day) {
            case `Monday`:
            case `Tuesday`:
            case `Wednesday`:
            case `Thursday`:
            case `Friday`:
            case `Saturday`:
            case `Sunday`:
                console.log(`closed`); break;
        }
    }

} workingHours(["11",
    "Monday"])





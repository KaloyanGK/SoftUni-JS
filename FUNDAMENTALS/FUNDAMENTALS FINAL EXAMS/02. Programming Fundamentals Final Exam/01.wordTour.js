function solve(input) {
    let destination = input.shift();
    let line = input.shift();

    while (line != `Travel`) {
        let newDestination = ``;

        line = line.split(`:`);
        let command = line[0];
        if (command === `Add Stop`) {
            let index = Number(line[1]);
            let newStop = line[2];

            if (index >= 0 && index <= destination.length - 1) {
                newDestination =
                    destination.slice(0, index) + newStop + destination.slice(index);

                destination = newDestination;
                console.log(destination);
            } else {
                console.log(destination);

            }

        } else if (command == `Remove Stop`) {
            let startIndex = Number(line[1]);
            let endIndex = Number(line[2]);
            if (
                startIndex >= 0 &&
                startIndex <= destination.length - 1 &&
                endIndex >= 0 &&
                endIndex <= destination.length - 1
            ) {
                newDestination =
                    destination.slice(0, startIndex) + destination.slice(endIndex + 1);

                destination = newDestination;
                console.log(destination);

            } else {
                console.log(destination);

            }

        } else if (command === `Switch`) {
            let oldString = line[1];
            let newString = line[2];
            if (destination.includes(oldString)) {
                destination = destination.replace(oldString, newString);

                console.log(destination);
            } else {
                console.log(destination);

            }
        }
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${destination}`);
}
solve([`Albania:Bulgaria:Cyprus:Deuchland`,
    `Add Stop:3:Nigeria`,
    `Remove Stop:4:8`,
    `Switch:Albania: Azərbaycan`,
    `Travel`])




    // ([
    //     "Hawai::Cyprys-Greece",
    //     "Add Stop:7:Rome",
    //     "Remove Stop:11:16",
    //     "Switch:Hawai:Bulgaria",
    //     "Travel",
    // ]);
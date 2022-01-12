function demo(input) {

    let index = 0;
    let command = input[index];
    index++;
    let standard = 0;
    let kid = 0;
    let student = 0;
    let totalTicketCounter = 0;
    while (command !== `Finish`) {
        let movieName = command;
        let freeSpace = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let counter = 0;
        while (ticketType !== `End`) {
            counter++;
            switch (ticketType) {
                case `standard`: standard++; break;
                case `kid`: kid++; break;
                case `student`: student++; break;
            }
            if (counter >= freeSpace) {
                break;
            }
            ticketType = input[index];
            index++;
        }
        totalTicketCounter += counter;
        let percentPeople = counter / freeSpace * 100;
        console.log(`${movieName} - ${percentPeople.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let percentKid = kid / totalTicketCounter * 100;
    let percentStudent = student / totalTicketCounter * 100;
    let percentStandard = standard / totalTicketCounter * 100;
    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${percentStudent.toFixed(2)}% student tickets.`);
    console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentKid.toFixed(2)}% kids tickets.`);
}
demo(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])

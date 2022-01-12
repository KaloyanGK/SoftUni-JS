function cinema(input) {

    let index = 0;
    let totalSpace = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalPeople = 0;
    let freeSpace = 0;
    let people = 0;
    let totalPrice = 0;
    while (command !== `Movie time!`) {
        people = Number(command);
        command = input[index];
        index++;
        totalPeople += people;
        if (totalPeople > totalSpace) {
            console.log(`The cinema is full.`);
            break;
        }
        if (command === `Movie time!`) {
            freeSpace = totalSpace - totalPeople;
            console.log(`There are ${freeSpace} seats left in the cinema.`);
        }
        if (people % 3 == 0) {
            totalPrice += (people * 5) - 5;
        } else {
            totalPrice += people * 5;
        }
    }
    console.log(`Cinema income - ${totalPrice} lv.`);

} cinema
    // (["60", "10", "6", "3", "20", "15", "Movie time!"])
    (["50", "15", "10", "10", "15", "5"])
    // (["100", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "Movie time!"])
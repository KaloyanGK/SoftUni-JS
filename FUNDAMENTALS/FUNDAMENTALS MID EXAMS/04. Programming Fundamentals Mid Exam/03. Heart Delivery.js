function heartDelivery(input) {
    let neighborhood = input.shift().split("@").map(Number);
    let currentHousePosition = 0;
    let successfulHouses = 0;
    let command = input.shift();

    while (command != "Love!") {
        let jumps = command.split(" ");
        currentHousePosition += Number(jumps[1]);

        if (currentHousePosition > neighborhood.length - 1) {
            currentHousePosition = 0;
        }

        if (neighborhood[currentHousePosition] == 0) {
            console.log(`Place ${currentHousePosition} already had Valentine's day.`);
            command = input.shift();
            continue;
        }

        neighborhood[currentHousePosition] -= 2;

        if (neighborhood[currentHousePosition] == 0) {
            successfulHouses++;
            console.log(`Place ${currentHousePosition} has Valentine's day.`);
        }

        command = input.shift();
    }

    console.log(`Cupid's last position was ${currentHousePosition}.`);

    if (successfulHouses == neighborhood.length) {
        console.log("Mission was successful.");
    } else {
        console.log(
            `Cupid has failed ${neighborhood.length - successfulHouses} places.`
        );
    }
}

heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);

function demo(input) {

    let index = 0;
    let startingPointsOfEggs = Number(input[index]);
    index++;

    let counterOfSoldedEggs = 0;

    let command = input[index];

    while (command !== "Close") {
        
        
        let currentEggs = Number(input[index]);
        if (command === "Buy") {
            
            // let currentEggs = Number(input[index]);
            if (startingPointsOfEggs < currentEggs) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${startingPointsOfEggs}.`);
                return;
            }
        startingPointsOfEggs = startingPointsOfEggs - currentEggs;
        counterOfSoldedEggs += currentEggs;
        }else if (command === "Fill") {
            index++;
            
            startingPointsOfEggs += currentEggs;
        }
        index++;
        command = input[index];
    }
    if (command === "Close") {
        console.log(`Store is closed!`);
        console.log(`${counterOfSoldedEggs} eggs sold.`);
    }

    




} 
demo(["20",
    "Fill",
    "30",
    "Buy",
    "15",
    "Buy",
    "20",
    "Close"])
function solve(input) {

    let numbersOfPlants = Number(input.shift());
    let plants = {};

    for (let i = 0; i < numbersOfPlants; i++) {

        let [plant, rarity] = input[i].split('<->');

        if (!plants.hasOwnProperty(plant)) {

            plants[plant] = {};
            plants[plant]['rarity'] = Number(rarity);
            plants[plant]['rating'] = [];

        } else {
            plants[plant]['rarity'] += Number(rarity);
        }
    }


    let listOfCommands = input.splice(numbersOfPlants);

    let index = 0;
    let el = listOfCommands[index];

    while (el !== 'Exhibition') {

        let [command] = el.split(': ');
       
        if (command == 'Rate') {

            let [currCommand, plant] = el.split(': ');

            let [currPlant, rating] = plant.split(' - ');

            rating = Number(rating);

            if (plants.hasOwnProperty(currPlant)) {

                plants[currPlant]['rating'].push(rating);

            } else {
                console.log('error');
            }


        }
        else if (command == 'Update') {

            let [currCommand, plant] = el.split(': ');

            let [currPlant, newRarity] = plant.split(' - ');

            newRarity = Number(newRarity);

            if (plants.hasOwnProperty(currPlant)) {

                plants[currPlant]['rarity'] = newRarity;

            } else {

                // console.log('error');
            }

        } else if (command == 'Reset') {

            let [currCommand, currPlant] = el.split(': ');

            if (plants.hasOwnProperty(currPlant)) {

                plants[currPlant]['rating'] = [];

            } else {

                //console.log('error');
            }
        }

        index++;
        el = listOfCommands[index];
    }

    //console.log('Plants for the exhibition:');
    for (let key in plants) {

        let nameOfThePlant = key;

        let rating = 0;

        if (plants[key]['rating'].length > 0) {

            plants[key]['rating'].forEach(element => rating += element);

            rating = rating / plants[key]['rating'].length;
        }


        //console.log(`- ${nameOfThePlant}; Rarity: ${plants[key]['rarity']}; Rating: ${rating.toFixed(2)}`);
    }
}
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
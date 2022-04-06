function solve(input) {
    let current = input.shift();
    input.pop();

    let towns = {};
    while (current != `Sail`) {
        let splited = current.split(`||`);
        let name = splited[0];
        let population = Number(splited[1]);
        let startingGold = Number(splited[2]);
        if (!towns.hasOwnProperty(name)) {
            towns[name] = {
                population: 0,
                gold: 0,
            };
        }
        towns[name].population += population;
        towns[name].gold += startingGold;
        current = input.shift();
    }

    for (let el of input) {
        el = el.split(`=>`);
        let command = el[0];
        if (command === `Plunder`) {
            let currentTown = el[1];
            let currentPeople = Number(el[2]);
            let currentGold = Number(el[3]);
            if (towns.hasOwnProperty(currentTown)) {
                towns[currentTown].population -= currentPeople;
                towns[currentTown].gold -= currentGold;
                console.log(
                    `${currentTown} plundered! ${currentGold} gold stolen, ${currentPeople} citizens killed.`
                );
            }
            if (towns[currentTown].population <= 0 || towns[currentTown].gold <= 0) {
                delete towns[currentTown];
                console.log(`${currentTown} has been wiped off the map!`);
            }
        } else if (command === `Prosper`) {
            let currentTown = el[1];
            let currentGold = Number(el[2]);
            if (currentGold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                towns[currentTown].gold += currentGold;
                console.log(
                    `${currentGold} gold added to the city treasury. ${currentTown} now has ${towns[currentTown].gold} gold.`
                );
            }
        }
    }

    if ((Object.keys(towns).length = 0)) {
        console.log(
            `Ahoy, Captain! All targets have been plundered and destroyed!`
        );
    } else {
        console.log(
            `Ahoy, Captain! There are ${Object.keys(towns).length
            } wealthy settlements to go to:`
        );
        for (let el in towns) {
            console.log(
                `${el} -> Population: ${towns[el].population} citizens, Gold: ${towns[el].gold} kg`
            );
        }
    }
}

solve([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End",
]);

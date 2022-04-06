function train(arr) {
    let passengersInWagon = arr.shift().split(` `).map(Number);
    let maxCapacityOfEachWagon = Number(arr.shift());
    let lengthOfArr = arr.length;

    for (let i = 0; i < lengthOfArr; i++) {
        
        let elOfArr = arr[i].split(" ");
        if (elOfArr.length === 2) {
            let currWagonToAdd = Number(elOfArr[1]);
            passengersInWagon.push(currWagonToAdd);
        } else {
            let passengersToAdd = Number(elOfArr[0]);

            for (let i = 0; i < passengersInWagon.length; i++) {
                let currNumOfArr = Number(passengersInWagon[i]);

                if (currNumOfArr + passengersToAdd <= maxCapacityOfEachWagon) {
                    let resultToAdd = currNumOfArr + passengersToAdd;
                    passengersInWagon.splice(i, 1, resultToAdd);
                    break;
                }
            }
        }
    }
    console.log(passengersInWagon.join(" "));


}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);

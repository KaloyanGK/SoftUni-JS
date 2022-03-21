function solve(arr) {
    let arrOfTargets = arr.shift().split(" ").map(Number);

    let lengthOfLeftArr = arr.length;

    let counterOfTargets = 0;

    for (let i = 0; i < lengthOfLeftArr; i++) {

        let currTryToHitTarget = Number(arr[i]);

        if (
            currTryToHitTarget >= 0 &&
            currTryToHitTarget <= arrOfTargets.length - 1
        ) {
            let findThatNumber = Number(arrOfTargets[currTryToHitTarget]);

            counterOfTargets++;

            arrOfTargets.splice(currTryToHitTarget, 1);

            arrOfTargets.splice(currTryToHitTarget, 0, -1)

            for (let i = 0; i < arrOfTargets.length; i++) {

                let currNum = arrOfTargets[i];

                if (currNum == -1) {
                    continue;
                }

                if (currNum > findThatNumber) {
                    let resultToAdd = currNum - findThatNumber;
                    arrOfTargets.splice(i, 1, resultToAdd);
                } else if (currNum <= findThatNumber) {
                    let newResultToAdd = currNum + findThatNumber;
                    arrOfTargets.splice(i, 1, newResultToAdd);
                }
            }


        }
    }

    console.log(`Shot targets: ${counterOfTargets} -> ${arrOfTargets.join(' ')}`);
}
solve(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);

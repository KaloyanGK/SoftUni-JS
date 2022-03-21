function demo(arr, bomb) {
    let arrOfNumbers = arr;

    let bombNum = bomb;

    let removingNum = Number(bombNum.splice(0, 1));

    let numbersToRemove = Number(bombNum.splice(0));

    let length = arrOfNumbers.length;

    for (let i = 0; i < length; i++) {
        let el = arrOfNumbers[i];
        console.log(el);

        if (el == removingNum) {
            let index = arrOfNumbers.indexOf(removingNum);
            console.log(index);

            for (let j = 0; j <= numbersToRemove + numbersToRemove; j++) {
                arrOfNumbers.splice(index - numbersToRemove, 1);
                console.log(arrOfNumbers);
            }

            length = arrOfNumbers.length;
            i = -1;
        }
    }

    let sum = 0;

    for (let result of arrOfNumbers) {
        sum += result;
    }

    console.log(sum);
} demo
    ([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
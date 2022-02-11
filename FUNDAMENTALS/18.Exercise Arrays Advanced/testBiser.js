function demo(arr, bomb) {
    
    let arrOfNumbers = arr;
    let bombNum = bomb;
    let removingNum = bombNum.shift();
    let numbersToRemove = bombNum.shift();
    let length = arrOfNumbers.length;

    for (let i = 0; i < length; i++) {
        let el = arrOfNumbers[i];

        if (el == removingNum) {
            let index = arrOfNumbers.indexOf(removingNum);

            for (let j = 0; j <= numbersToRemove + numbersToRemove; j++) {
                arrOfNumbers.splice(index - numbersToRemove, 1);
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
}
demo([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
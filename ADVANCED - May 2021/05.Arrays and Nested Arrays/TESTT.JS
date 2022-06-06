function solve(input) {

    let number = Number.MIN_SAFE_INTEGER;

    for (let el of input) {

        let biggestNum = Math.max(...el);

        if (biggestNum > number) {

            number = biggestNum;
        }
    }

    console.log(number)
}
solve([[20, 50, 10],
[8, 33, 145]]
)

solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
)
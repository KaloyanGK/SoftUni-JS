function solve(input) {
    let newArr = [];
    let number = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < input.length; i++) {
        let currNum = input[i];
        if (currNum >= number) {
            newArr.push(currNum);
            number = currNum;

        }

    }
    return newArr;
}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]

)
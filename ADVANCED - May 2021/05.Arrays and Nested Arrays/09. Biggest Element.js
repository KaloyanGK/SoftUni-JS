function solve(input) {

    let number = Number.MIN_SAFE_INTEGER;

    for (let el of input) {

        let biggestNum = Math.max(...el);

        if (biggestNum > number) {

            number = biggestNum;
        }
    }

    return number;
}

solve(
    [`Mihailovich Ivan Gosho Teodor Tatqna`],

);

function solve(n) {

    if (n === null || n === ' ' || n === 0) {
        for (let i = 0; i < 5; i++) {
            console.log(`${(star.repeat(5)).trim()}`);
        }
    } else {
        for (let i = 0; i < n; i++) {
            let result = ``;

            for (let j = 0; j < n; j++) {
                result += `* `
            }
            console.log(result);

        }
    }

}
solve(2)
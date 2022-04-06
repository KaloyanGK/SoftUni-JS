function numbers(a, b, c) {

    /* Вариант 1 */
    // let sum = a + b + c;
    // if (sum % 1 !== 0) {
    //     console.log(`${sum} - Float`);
    // } else {
    //     console.log(`${sum} - Integer`);
    // }
    /* Вариант 2 */


    let sum = a + b + c;

    let sumAsString = String(sum);
    let type = `Integer`;

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == `.`) {
            type = `Float`;
        }
    }
    console.log(`${sum} - ${type}`);
} numbers(9, 100, 1.1)
numbers(100, 200, 303)
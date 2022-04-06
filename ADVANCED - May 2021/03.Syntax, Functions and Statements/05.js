function solve(a, b, operator) {
    let result = 0;
    switch (operator) {
        case `+`: result = a + b; break;
        case `-`: result = a - b; break;
        case `*`: result = a * b; break;
        case `/`: result = a / b; break;
        case `%`: result = a % b; break;
        case `**`: result = a ** b; break;

    }
    console.log(result);
}
solve(5, 6, '+')
solve(3, 5.5, '*')